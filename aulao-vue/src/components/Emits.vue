<template>
  <div ref="div" class="container">
    <h1>Carrinho de Compras</h1>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const div  = ref(null);
onMounted(()=>{
  console.log(div)
})
</script>

<style lang="scss" scoped>

</style>