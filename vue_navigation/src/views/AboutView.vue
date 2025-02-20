<script setup>
import {useRoute, useRouter} from "vue-router";
import {debug} from "@/utils/debug.js";
import {onBeforeUnmount, onMounted, onUnmounted, ref, useTemplateRef} from "vue";

const router = useRouter();
const route = useRoute();

function seeRoute() {
  debug(route);
}

</script>
<template>
  <h1>This is an about page</h1>
  <button @click="seeRoute">See current route</button>
</template>

<style scoped>
</style>
