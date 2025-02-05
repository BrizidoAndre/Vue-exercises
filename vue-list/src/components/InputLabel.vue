<script setup>
import {useId} from "vue";

const id = useId()

defineProps(['label'])
const model = defineModel();
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
        class="form-control"
        v-model="model"
        :type="$attrs.type"
    >
  </div>
</template>
