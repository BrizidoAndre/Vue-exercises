<script setup="">
import {useRouter} from "vue-router";

const props = defineProps(['availableSpaces', 'name', 'distance', 'location', 'buttonText'])
const router = useRouter();

function redirectToPark() {
  router.push({
    path: '/' + props.name,
    query: {
      distance: props.distance,
      availableSpaces: props.availableSpaces
    }
  })
}

const emits = defineEmits(['pinCarPark'])

function handlePress() {
  emits('pinCarPark', {...props})
}
</script>

<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ location }}</p>
      <p class="card-text">Available: {{ availableSpaces }}</p>
      <p class="card-text">Distance: {{ distance }}km</p>
      <button class="btn btn-primary me-2" @click="redirectToPark">See details</button>
      <button
          class="btn"
          :class="{
        'btn-success': buttonText === 'Pin Park',
        'btn-danger': buttonText === 'Remove Park'
          }"
          @click="handlePress"
      >{{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
