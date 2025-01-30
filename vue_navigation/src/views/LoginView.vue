<script setup="">
import {reactive} from "vue";
import {useRouter} from "vue-router";

const user = reactive({
  username: '',
  password: ''
})
const router = useRouter();

function goAnotherPageWithId() {
  router.push({
    name: 'profile',
    params: {
      id: '22'
    },
    query: {
      test: 'test'
    }
  })
}

function goAnotherPage() {
  router.push('/profile')
}

function login() {
  localStorage.setItem('token',JSON.stringify(user))
  router.push({name: 'protected'})
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">
        Username:
      </label>
      <input type="text" id="username" v-model="user.username">
      <label for="password">
        Password:
      </label>
      <input type="password" id="password" autocomplete="true" v-model="user.password">
      <button>Login</button>
    </form>
    <button @click="goAnotherPage">Go to profile</button>
    <button @click="goAnotherPageWithId">Go to profile with Id</button>
  </div>
</template>

<style scoped>

</style>