<template>
    <h1>Not Found!</h1>
    <p>{{$route.fullPath}}</p>
  <button @click="seeRoute">See route</button>
</template>

<script setup>
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {debug} from "@/utils/debug.js";

const route = useRoute();
function seeRoute(){
  debug(route)
}

</script>

<style scoped>

</style>