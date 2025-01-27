<script setup>
const props = defineProps(['title','context','time'])
const emit = defineEmits(['deleted'])
emit('deleted')
</script>

<template>
  <div style="display: flex; gap: 20px">
    <p>{{ props.title }}</p>
    <p>{{props.context}}</p>
    <p>{{props.time}}</p>
    <button @click.prevent="emit.deleted">Delete</button>
    <p v-if="props.category === 'business'">Isto é importante (porque é business)</p>
  </div>
</template>

<style scoped>

</style>