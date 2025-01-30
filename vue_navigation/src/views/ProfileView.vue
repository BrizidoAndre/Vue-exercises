<template>
  <div>
    <h1>Profile</h1>
    <p v-if="id">O id da url é: {{id}}</p>
    <button @click="debug(route)">See route</button>
  </div>
</template>

<script setup>
  import {useRoute} from "vue-router";
  import {onMounted} from "vue";
  import {debug} from "@/utils/debug.js";

  const route = useRoute();

  const id = route?.params.id || false;
</script>

<style scoped>

</style>