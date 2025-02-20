<script setup>
import {onBeforeUnmount, onMounted, ref, useTemplateRef} from "vue";

const boxMouse = ref()
const clicked = ref(false);
const count = ref(0);

function boxFollowMouse(ev) {
  const mouseX = ev.x;
  let mouseY = ev.y;
  if(mouseY < 200){
    mouseY = 200
  }
  boxMouse.value.style.top = mouseY + 'px';
  boxMouse.value.style.left = mouseX + 'px';
}

onMounted(() => {
  window.addEventListener('mousemove', boxFollowMouse)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', boxFollowMouse)
})

function handleClickOnBox(){
  clicked.value = !clicked.value;
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="boxClass" :class="{round: clicked }" @click="handleClickOnBox" ref="boxMouse"></div>
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

.boxClass {
  width: 100px;
  aspect-ratio: 1;
  background-color: green;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: border-radius .4s;
}

.round {
  border-radius: 50%;
}
</style>
