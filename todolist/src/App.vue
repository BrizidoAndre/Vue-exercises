<script setup>

import {reactive, ref} from "vue";
import Card from "@/components/card.vue";

const newTodo = reactive({
  name: '',
  category: null
})
const todos = ref([]);

function addTodo() {
  todos.value.push({
    name: newTodo.name,
    category: newTodo.category,
    createdAt: (new Date).getTime(),
  })
}

function deleteTodo() {
  console.log('teste')
  // todos.value = todos.value.filter(currenTodo => {
  //   return (currenTodo.name + currenTodo.createdAt) !== (todo.name + todo.createdAt);
  // })
}
</script>
<template>
  <h1>Todos</h1>
  <form @submit.prevent="addTodo">
    <label for="name">Name: </label>
    <input required type="text" id="name" v-model="newTodo.name">
    <h2>Category</h2>
    <input required type="radio" name="category" id="personal" value="personal" v-model="newTodo.category">
    <label for="personal">Personal</label>
    <input required type="radio" name="category" id="business" value="business" v-model="newTodo.category">
    <label for="business">Business</label>
    <button>Add todo</button>
  </form>
  <card
      v-for="todo in todos"
      :title="todo.name"
      :context="todo.category"
      :time="todo.createdAt"
      @deleted="deleteTodo"
  />
</template>