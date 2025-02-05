<script setup>
import {reactive, ref, watchEffect} from "vue";
import InputLabel from "@/components/InputLabel.vue";
import Paragraph from "@/components/Paragraph.vue";
import {debug} from "@/utils.js";

const newItem = ref('');
const newImportant = ref(false);
const isTyping = ref(false);
const todos = ref([]);

function resetItem() {
  newItem.value = '';
  newImportant.value = false;
}

function handleSubmit() {
  todos.value.push({
    title: newItem.value,
    createdAt: (new Date).getTime(),
    important: newImportant.value,
    turn: false,
  })
  resetItem()
}

function doneTodo(index) {
  todos.value[index].done = !todos.value[index].done;
  todos.value[index].turn = true;
  setTimeout(() => {
    todos.value[index].turn = false;
  }, 500)
}
function handleRemove(index) {
  todos.value.splice(index, 1);
}

watchEffect((onCleanup)=>{
  if(newItem.value.length > 0){
    isTyping.value = true;
  }
  // getting the id for this timeout
  const removingTypingStatus = setTimeout(()=>{
    isTyping.value = false;
  },2000)
  // when another watch effect starts before this is over
  onCleanup(()=>{
    clearTimeout(removingTypingStatus)
  })
},)
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <InputLabel v-model="newItem" label="Chore's title"/>
      <div class="form-check">
        <input v-model="newImportant" class="form-check-input" type="checkbox" id="importante">
        <label class="form-check-label" for="importante">
          Importante
        </label>
        <p class="text-typing" v-if="isTyping">The user is typing...</p>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
    <ol class="list-group list-group-numbered mt-3">
      <li
          v-for="(todo, index) in todos"
          class="list-group-item"
          :class="{
        done: todo.done,
        important: todo.important,
        turn: todo.turn
      }"
      >
        <span @click="doneTodo(index)">{{ todo.title }}</span>
        <button @click="handleRemove(index)" class="btn btn-outline-danger float-end">Delete</button>
      </li>
    </ol>
  </main>
  <Paragraph :title="newItem"/>
</template>

<style scoped>
.done {
  text-decoration-line: line-through;
}

.important {
  color: rebeccapurple;
}

li span {
  cursor: pointer;
}

.turn {
  animation: rotate .3s linear 1;
}

@keyframes rotate {
  from {
    rotate: 0deg
  }
  to {
    rotate: 360deg
  }
}

.text-typing{
  font-style: italic;
  color: dimgray;
}
</style>
