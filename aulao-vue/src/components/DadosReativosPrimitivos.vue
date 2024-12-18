<script setup>
import {ref} from 'vue';
const nome = ref('André');
const idade =ref(20);

function birthday() {
  idade.value += 1;
}
function  changeName(){
  nome.value = nome.value==='Arthur' ? 'André' : 'Arthur';
}
</script>
<template>
  <div class="container">
    <h1>Componente Com Dados Reativos Primitivos </h1>
    <p>Nome: {{ nome }} | Idade: {{ idade }}</p>
    <button @click="birthday">Fazer aniversário</button>
    <button @click="changeName">Mudar Nome</button>
  </div>
</template>