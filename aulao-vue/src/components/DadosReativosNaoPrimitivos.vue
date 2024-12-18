<script setup>
import {reactive} from 'vue';
const pessoa = reactive({
  nome:'Ana',
  idade:27
})

function birthday() {
  pessoa.idade += 1;
}
function  changeName(){
  pessoa.nome = pessoa.nome==='Ana' ? 'Maria' : 'Ana';
}
</script>
<template>
  <div class="container">
    <h1>Componente Com Dados Reativos Não Primitivos</h1>
    <p>Nome: {{ pessoa.nome }} | Idade: {{ pessoa.idade }}</p>
    <button @click="birthday">Fazer aniversário</button>
    <button @click="changeName">Mudar Nome</button>
  </div>
</template>