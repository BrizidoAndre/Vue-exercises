<script setup>
import {ref, useAttrs} from "vue";

const props = defineProps({
  title: String,
  message: {
    type: String,
  },
})
</script>

<template>
  <h1>
    {{ props.title }}
  </h1>
  <p class="justify-content-between">
    {{ props.message }}
  </p>
</template>
