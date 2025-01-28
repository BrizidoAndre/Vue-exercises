<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'

const router = useRouter();
function goBack(){
    router.back()
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
        <RouterLink to="/login" >Login</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
