<script setup>

import {onMounted, ref, useTemplateRef} from "vue";
import {debug} from "@/utils/debug.js";
import {useRoute} from "vue-router";

const seconds = ref(0)
const route = useRoute();
const stopped = ref(true);

function nextSecond() {
  setTimeout(() => {
    if (!stopped.value) {
      seconds.value++;
    }
    nextSecond()
  }, 1000)
}

function alterCounter() {
  stopped.value = !stopped.value
}

onMounted(() => {
  nextSecond()
})

</script>

<template>
  <h1>This is the main page</h1>
  <button @click="debug(route)">See current route</button>
  <p>You have passe {{ seconds }} seconds in this page</p>
  <button @click="alterCounter">{{ stopped ? 'Resume' : 'Stop' }} counter</button>
</template>

<style scoped>

</style>
