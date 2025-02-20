<script setup>

import {computed, reactive, ref} from "vue";
import Card from "@/components/card.vue";
import Address from "@/components/Address.vue";

const newTodo = reactive({
  name: '',
  category: null
})
const todos = ref([]);
const editing = ref(false)

const characterCount = computed(()=>{
  return newTodo.name.length
})

function addTodo() {
  todos.value.push({
    name: newTodo.name,
    category: newTodo.category,
    createdAt: (new Date).getTime(),
  })
  console.log(todos.value[0].createdAt);
  newTodo.category = null;
  newTodo.name = '';
}

function doEdit(isAdding) {
  editing.value = isAdding
}

function deleteTodo(todo) {
  todos.value = todos.value.filter(currenTodo => {
    return (currenTodo.name + currenTodo.createdAt) !== (todo.name + todo.createdAt);
  })
}

const computedData = computed(()=>{
  return todos.value.reverse()
})
</script>
<template>
  <div class="header">
    <h1>Todos</h1>
    <button v-if="editing" @click="doEdit(false)">Cancel</button>
    <button v-else @click="doEdit(true)">Add Item</button>
  </div>
  <form v-if="editing" @submit.prevent="addTodo">
    <div>
      <label for="name">Name: </label>
      <input autocomplete="false" required type="text" id="name" v-model="newTodo.name">
      <span>{{ characterCount }}/100</span>
    </div>
    <div>
      <input
          required
          type="radio"
          name="category"
          id="personal"
          value="personal"
          v-model.trim="newTodo.category">
      <label for="personal">Personal</label>
      <input
          required
          type="radio"
          name="category"
          id="business"
          value="business"
          v-model.trim="newTodo.category">
      <label for="business">Business</label>
    </div>
    <button
    :disabled="newTodo.name.length <= 4 || newTodo.category === null"
    >Add todo</button>
  </form>
  <div v-if="todos.length === 0">
    <p>Nothing to see here.</p>
  </div>
  <card
      v-for="todo in todos"
      :title="todo.name"
      :context="todo.category"
      :time="todo.createdAt"
      @deleted="deleteTodo(todo)"
  /><card
      v-for="todo in computedData"
      :title="todo.name"
      :context="todo.category"
      :time="todo.createdAt"
      @deleted="deleteTodo(todo)"
  />
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>