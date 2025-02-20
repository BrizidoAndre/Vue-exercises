<script setup="">
import Cloudy from "@/components/Cloudy.vue";
import Sunny from "@/components/Sunny.vue";
import Rainy from "@/components/Rainy.vue";

defineProps(['date', 'temp_max', 'temp_min', 'status']);

const svgIcon = {
  'Sunny': Sunny,
  'Cloudy': Cloudy,
  'Rainy': Rainy
}

</script>

<template>
  <div class="card text-center">
    <div class="card-header">
      {{ date }}
    </div>
    <div class="card-body">
      <component :is="svgIcon[status]" class="svg-animation"/>
      <p class="card-text">{{ temp_min + '-' + temp_max }}ºC</p>
    </div>
    <div class="card-footer text-body-secondary">
      {{ status }}
    </div>
  </div>
</template>

<style scoped>
.card-img{
  fill: red;
}
.svg-animation{
  stroke:  #1c3e60;
  stroke-width: 1;
  fill: none;
}
.svg-animation:hover{
  animation: dash-stroke 3s ease-out 1 forwards;
}
@keyframes dash-stroke {
  from{
    stroke-dasharray: 0 200;
  }
  to{
    stroke-dasharray: 200 0;
  }
}
</style>
