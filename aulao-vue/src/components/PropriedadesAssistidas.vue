<script setup>
import {computed, ref, watch, watchEffect} from "vue";

const anoNascimento = ref(1900);
const anoAtual = ref((new Date).getFullYear());
const idade = ref(anoAtual.value - anoNascimento.value);

// Usando watch você especifica quais variáveis estão sendo monitoradas e oque faremos com ela
// watch(anoAtual,(ano)=>{
//   idade.value = ano - anoNascimento.value;
// })
// watch(anoNascimento, (ano)=>{
//   idade.value = anoAtual.value - ano
// })
watchEffect(()=>{
  idade.value = anoAtual.value - anoNascimento.value
})
</script>
<template>
  <div class="container">
    <h1>Componente com Propriedades Assistidas</h1>
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