<script setup>
const props = defineProps({
  nome: String,
  dogs:Array,
})
</script>

<template>
  <div class="container">
    <h1>Componente com Renderização Condicional</h1>
    <p>Nome : {{nome}}</p>
    <p v-show="dogs.length === 0">Não tem cachorro</p>
    <ul>
      <li v-for="dog in dogs">
        Nome: {{dog.nome}} | Idade: {{dog.idade}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul{
  margin:0;
  padding:0;
}
li{
  list-style: none;
  text-align:center;
  font-size: large;
}
</style>