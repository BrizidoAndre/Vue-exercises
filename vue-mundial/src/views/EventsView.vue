<script setup>
import {computed, onMounted, reactive, ref, useTemplateRef, watch, watchEffect} from "vue";

import EventCard from "@/components/EventCard.vue";

const events = ref([]);
const nextQuery = ref(1);
const urlQuery = ref('');

const spinner = useTemplateRef('spinner')

const time = reactive({
  beginning: '',
  ending: ''
})

watch(time, (value, oldValue, onCleanup) => {
  const url = new URLSearchParams();
  url.set('beginning_date', value.beginning);
  url.set('ending_date', value.ending);
  url.set('page', 1);
  urlQuery.value = url.toString();
  loadEvents()
})

async function loadEvents() {
  const url = 'http://localhost/module_d_api.php/events.json?' + urlQuery.value;
  const res = await fetch(url)
  const data = await res.json();
  events.value = data.events;
  nextQuery.value = data.pages.next[data.pages.next.length - 1];
  // adding observer
  observer.observe(spinner.value)
}


async function addEvents() {
  const url = 'http://localhost/module_d_api.php/events.json?' + urlQuery.value;
  const res = await fetch(url)
  const data = await res.json();
  events.value.push(...data.events)
  if (data.pages.next) {
    nextQuery.value = data.pages.next[data.pages.next.length - 1] || data.pages.next;
  } else {
    nextQuery.value = null;
  }
}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const url = new URLSearchParams(urlQuery.value);
      url.set('page', nextQuery.value);
      urlQuery.value = url.toString()
      addEvents()
    }
  })
}, {
  threshold: 1
});

onMounted(() => {
  loadEvents()
})
</script>

<template>
  <div class="container mb-5 pb-5">
    <div class="mb-3">
      <label for="beginning" class="form-label">Beginning date</label>
      <input
          v-model="time.beginning"
          type="date"
          class="form-control"
          id="beginning"
          placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="ending" class="form-label">Ending date</label>
      <input
          v-model="time.ending"
          type="date"
          class="form-control"
          id="ending"
          placeholder="name@example.com">
    </div>
    <EventCard
        v-for="event in events"
        :title="event.title"
        :image="event.image"
        :date="event.date"
    />
    <div v-if="nextQuery !== null" class="d-flex justify-content-center">
      <div class=" spinner-border" role="status" ref="spinner">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
