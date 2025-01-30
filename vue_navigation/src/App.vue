<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import {computed, ref} from "vue";

const router = useRouter();
const currentRoute = useRoute();

function goBack() {
  router.back()
}

function seeRoute() {
  console.log(currentRoute.fullPath)
}

let token = localStorage.getItem('token')

function logout() {
  console.log(token)
  localStorage.removeItem('token');
  token = null
  router.push('/')
}
</script>

<template>
  <header>
    <h1>Hello App</h1>
    <button class='' @click="goBack">Go back</button>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
      <nav>
        <RouterLink to="/protected">Protected</RouterLink>
        <button v-if="token" @click="logout">Logout</button>
      </nav>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
