<script setup>
const props = defineProps({
  nome: String,
  qtdeCachorros:Number,
})
</script>

<template>
  <div class="container">
    <h1>Componente com Renderização Condicional</h1>
    <p>Nome : {{nome}}</p>
    <p v-if="qtdeCachorros<=0">Não tem Cachorros</p>
    <p v-else-if="qtdeCachorros===1">Tem 1 Cachorro</p>
    <p v-else="qtdeCachorros > 1">Tem muitos Cachorros</p>
  </div>
</template>