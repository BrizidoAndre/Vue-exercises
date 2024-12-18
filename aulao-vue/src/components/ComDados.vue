<script setup>
const produtoNome = 'Caneta';
const produtoCodigo = '#123';
</script>

<template>
  <div class="container">
    <h1>Componente com dados</h1>
    <p>Nome: {{ produtoNome }} - {{ produtoCodigo }}</p>
  </div>
</template>

<style >
.container {
  text-align: center;
  border: 2px solid rgb(10, 69, 4);
  background-color: #050d04;
  border-radius: 15px;
  margin: 30px;
  padding: 10px;
}
</style>
