<script setup>
import {computed, reactive, ref, watchEffect} from "vue";
import InputLabel from "@/components/InputLabel.vue";
import {debug} from "@/utils.js";
const user = reactive({
  username: 'username',
  password: 'secret'
});
</script>
<template>
  <div class="about">
    <InputLabel label="Teste" v-model="user.username"/>
    <InputLabel label="Teste" v-model="user.password" type="password"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
