<script setup="">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header">
        <h2>{{ route.path.split('/')[1] }}</h2>
      </div>
      <div class="card-body">
        <p class="card-text">Distance: {{ route.query.distance }}</p>
        <p class="card-text">Availability: {{ route.query.availableSpaces }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
