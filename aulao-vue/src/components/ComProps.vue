<script setup>
defineProps({
  item: String,
  preco: Number,
})
</script>
<template>
  <div class="container">
    <h1>Componente com props</h1>
    <p>{{ item }} ( R${{ preco }})</p>
  </div>
</template>