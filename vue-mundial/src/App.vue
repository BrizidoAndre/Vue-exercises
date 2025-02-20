<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import {onMounted} from "vue";
const router = useRouter();
function goBack() {
  router.back();
}
onMounted(()=>{
  document.body.dataset.bsTheme = 'dark'
})
</script>

<template>
  <header class="position-sticky sticky-top">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <button @click="goBack" class="text-white btn btn-secondary float-start">Back</button>
        <h1 class="navbar-brand mx-auto">{{ $route.name }}</h1>
        <button class="text-transparent">Back</button>
      </div>
    </nav>
  </header>
  <RouterView/>
  <footer>
    <nav class="navbar bg-body-tertiary w-100">
      <ul class="navbar-nav w-100">
        <li class="nav-item d-flex justify-content-between">
          <router-link
              class="nav-link"
              to="/"
          >Carparks
          </router-link>
          <router-link
              class="nav-link"
              to="/events"
          >Events
          </router-link>
          <router-link
              class="nav-link"
              to="/weather"
          >Weather
          </router-link>
          <router-link
              class="nav-link"
              to="/settings"
          >Settings
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.text-transparent {
  opacity: 0;
  cursor: auto;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer nav {
  padding: 10px 5%;
}
</style>
