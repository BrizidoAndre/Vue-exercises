<script setup>
import EmiteEvento from "@/components/EmiteEvento.vue";
import {ref} from "vue";

const total = ref(0);

function atualizatTotal(preco) {
  const valor = parseFloat(total.value) + parseFloat(preco);
  total.value = valor.toFixed(2);
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
</script>
<template>
  <div class="container">
    <h1>Componente que escuta evento</h1>
    <p>Total: R${{ total }}</p>
    <div class="lista">
      <EmiteEvento item="Item1" :preco="2" @foiAdicionado='atualizatTotal'/>
      <EmiteEvento item="Item2" :preco="5" @foiAdicionado="atualizatTotal"/>
      <EmiteEvento item="Item3" :preco="10.99" @foiAdicionado="atualizatTotal"/>
      <EmiteEvento item="Item4" :preco="7.60" @foiAdicionado="atualizatTotal"/>
    </div>
  </div>
</template>


<style scoped>
.lista {
  display: flex;
  justify-content: space-between;
}

.lista button:hover {
  cursor: pointer;
}
</style>