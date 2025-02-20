<script setup="">

import WeatherCard from "@/components/WeatherCard.vue";
import {onMounted, ref} from "vue";
import Cloudy from "@/components/Cloudy.vue";

const weathers = ref([]);

async function loadWeather(){
  const res = await fetch('http://localhost/module_d_api.php/weather.json')
  const data = await res.json();
  weathers.value = data
}
onMounted(()=>{
    loadWeather()
})
</script>

<template>
  <div class="container mt-4 pt-5">
    <WeatherCard
      v-for="weather in weathers"
      :date="weather.date"
      :temp_min="weather.lower_temperature"
      :temp_max="weather.upper_temperature"
      :status="weather.status"
      class="weather-card"
    />
  </div>
</template>

<style scoped>
.container{
  display: flex;
  gap: 20px;
  overflow: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  max-width: 100vw;
}

.container::-webkit-scrollbar{
  display: none;
}
.weather-card{
  min-width: 80vw;
  scroll-snap-align: center;
}
</style>
