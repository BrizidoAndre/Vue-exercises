<script setup>
const props = defineProps(['title','context','time'])
const emit = defineEmits(['deleted'])


</script>

<template>
  <div style="display: flex; gap: 20px">
    <p>{{ props.title }}</p>
    <p
        class="category"
      :class="{
      business: props.context === 'business',
      personal: props.context !== 'business',
      }"
    >{{props.context}}</p>
    <p>{{props.time}}</p>
    <button @click.prevent="emit('deleted')">Delete</button>
    <p v-if="props.context === 'business'">Isto é importante (porque é business)</p>
  </div>
</template>

<style scoped>
  .business{
    color: darkblue;
  }
  .personal{
    color: orangered;
  }
  .category{
    font-weight: bolder;
    text-transform: capitalize;
  }
</style>