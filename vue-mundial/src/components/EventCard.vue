<script setup="">

defineProps(['date','image','title'])

</script>

<template>
  <div class="card mx-auto my-2">
    <img :src="'http://localhost' + image" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">Date: {{date}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
