<template>
  <div class="container">
    <h1>Componente com Data Binding</h1>
    <p>{{ valor }}</p>
    <input type="text" v-model="valor" >
  </div>
</template>
<script setup>
import {ref} from "vue";
const valor = ref('Vue é muito legal');
</script>