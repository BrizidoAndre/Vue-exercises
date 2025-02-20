<script setup>

import {reactive, ref} from "vue";

const address = reactive({
  cep: '',
  logradouro: '',
  bairro: '',
  estado: "",
})
const messageError = ref('')

async function loadAddress() {
  try {
    const url = `https://viacep.com.br/ws/${address.cep}/json`;
    const res = await fetch(url)
    const data = await res.json();
    if (res.ok) {
      address.logradouro = data.logradouro;
      address.bairro = data.bairro;
      address.estado = data.estado;
    }
  } catch (e) {
    messageError.value = 'CEP inválido';
  }
}
</script>

<template>
  <div>
    <h2>Endereço:</h2>
    <label for="cep">CEP: </label>
    <input type="text" id="cep" v-model="address.cep" @blur="loadAddress">
    <span v-if="messageError.length > 0">{{ messageError }}</span>
    <label for="logradouro">Logradouro: </label>
    <input type="text" v-model="address.logradouro" id="logradouro">
    <label for="estado">Estado</label>
    <input type="text" v-model="address.estado" id="estado">
    <label for="bairro">Bairro</label>
    <input type="text" v-model="address.bairro" id="bairro">
  </div>
</template>


<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>