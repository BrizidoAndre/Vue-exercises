<script setup>

import {computed, onMounted, ref} from "vue";
import CarParkCard from "@/components/CarParkCard.vue";
import {debug, getDistanceFromLatLonInKm, settings} from "@/utils.js";
import {useRoute} from "vue-router";

const carparks = ref([]);
const pinnedParks = ref(JSON.parse(localStorage.getItem('fixedPark')))
const route = useRoute()

async function loadCarparks() {
  const res = await fetch('http://localhost/module_d_api.php/carparks.json')
  const data = await res.json();
  carparks.value = Object.entries(data).map(([name, values]) => {return {name, ...values}})
  addDistanceToCarParks();
}

const carParksSorted = computed(settings.sortAlphabetically ? sortByAlphabet  : sortByLocation)

function addDistanceByUrl(positionError) {
  let parks = carparks.value;
  parks.forEach((park, index) => {
    parks[index].distance = getDistanceFromLatLonInKm(
        route.query.latitude,
        route.query.longitude,
        park.latitude,
        park.longitude
    )
  })
}

function addDistanceToCarParks() {
  if (route.query.latitude && route.query.longitude) {
    addDistanceByUrl();
    return null;
  }
  let parks = carparks.value;
  navigator.geolocation.getCurrentPosition((position) => {
    const location = position.coords;
    parks.forEach((park, index) => {
      parks[index].distance = getDistanceFromLatLonInKm(
          location.latitude,
          location.longitude,
          park.latitude,
          park.longitude
      )
    })
  }, addDistanceByUrl);
}

function sortByLocation() {
  addDistanceToCarParks();
  if(carparks.value.length <=0){
    return null;
  }
  let parks = carparks.value;
  resetPinnedParks();
  parks = parks.filter(park => {
    return !pinnedParks.value.some(pinnedPark => park.location === pinnedPark.location);
  })
  parks.sort((a, b) => {
    return a.distance > b.distance ? 1 : -1;
  })
  return parks
}

function sortByAlphabet(){
  if(carparks.value.length <=0){
    return;
  }
  let parks = carparks.value;
  resetPinnedParks();
  parks = parks.filter(park => {
    return !pinnedParks.value.some(pinnedPark => park.location === pinnedPark.location);
  })
  parks.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  })
  return parks;
}

onMounted(() => {
  loadCarparks()
})

function handleButtonPress(carPark) {
  const pinned = JSON.parse(localStorage.getItem('fixedPark')) || [];
  pinned.push(carPark);
  localStorage.setItem('fixedPark', JSON.stringify(pinned))
  resetPinnedParks()
}

function handleRemovePinned(carPark) {
  let pinned = JSON.parse(localStorage.getItem('fixedPark'));
  let filteredList = pinned.filter(park => {
    return park.location !== carPark.location;
  })
  localStorage.setItem('fixedPark', JSON.stringify(filteredList))
  resetPinnedParks()
}

function resetPinnedParks() {
  pinnedParks.value = JSON.parse(localStorage.getItem('fixedPark')) || [];
}
</script>

<template>
  <main class="container">
    <CarParkCard
        v-for="pinnedParks in pinnedParks"
        :available-spaces="pinnedParks.availableSpaces"
        :location="pinnedParks.location"
        :name="pinnedParks.name"
        :distance="pinnedParks.distance"
        @pinCarPark="handleRemovePinned"
        button-text="Remove Park"
    />
    <CarParkCard
        v-for="carpark in carParksSorted"
        :available-spaces="carpark.availableSpaces"
        :location="carpark.location"
        :name="carpark.name"
        :distance="carpark.distance"
        @pinCarPark="handleButtonPress"
        button-text="Pin Park"
    />
  </main>
</template>
