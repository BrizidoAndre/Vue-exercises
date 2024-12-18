<script setup>
import {computed, ref} from "vue";

const anoNascimento = ref(1900);
const anoAtual = ref((new Date).getFullYear());
const idade = computed(()=>{
  return  anoAtual.value - anoNascimento.value;
})
</script>
<template>
  <div class="container">
    <h1>Componente com Propriedades Computadas</h1>
    <p>Idade: {{ idade }}</p>
    <label for="">Ano nascimento:</label>
    <input type="number" min="1900" v-model="anoNascimento">
    <label for="">Ano atual</label>
    <input type="number" min="2000" v-model="anoAtual">
  </div>
</template>

<style scoped>
label{
  margin:10px;
}
</style>