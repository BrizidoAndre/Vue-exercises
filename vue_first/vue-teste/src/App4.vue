<script setup>
import Cards from "@/components/Cards.vue";
import {ref} from "vue";

const pageTitle = ref('PageTitle');
</script>

<template>
  <h1>{{ pageTitle }}</h1>
  <Cards/>
  <Cards
      title="Titulo exemplo"
      subtitle="teste2"
      description="descrição teste"
      count='1'
      :page-title="pageTitle"/>
</template>
<style>
@import './assets/css/bootstrap.min.css';
</style>
