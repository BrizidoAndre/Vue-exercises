<script setup>
import {ref} from "vue";


let turn = 'x';
let gameOn = true;
let wonMessage = ref('')

function handleCheck(ev) {
  let content = ev.target.innerHTML;
  if (content || !gameOn) {
    return null;
  }
  ev.target.innerHTML = turn;
  gameOver();
  turn = turn === 'x' ? 'o' : 'x';
}

function gameOver() {
  let boxes = document.querySelectorAll('.box');
  let values = [];
  let allFilled = true;
  boxes.forEach(box => {
    if (box.innerHTML === '') {
      allFilled = false;
    }
    values.push(box.innerHTML);
  })
  switch (true) {
    case(values[0] === values[1] && values[0] === values[2] && values[0] !== ''):
      showWhoWon();
      break;
    case(values[3] === values[4] && values[3] === values[5] && values[3] !== ''):
      showWhoWon();
      break;
    case(values[6] === values[7] && values[6] === values[8] && values[6] !== ''):
      showWhoWon();
      break;
    case(values[0] === values[3] && values[0] === values[6] && values[0] !== ''):
      showWhoWon();
      break;
    case(values[1] === values[4] && values[1] === values[7] && values[1] !== ''):
      showWhoWon();
      break;
    case(values[2] === values[5] && values[2] === values[8] && values[2] !== ''):
      showWhoWon();
      break;
    case(values[0] === values[4] && values[0] === values[8] && values[0] !== ''):
      showWhoWon();
      break;
    case(values[2] === values[4] && values[2] === values[6] && values[2] !== ''):
      showWhoWon();
      break;
  }
  if (allFilled && wonMessage.value.length === 0) {
    wonMessage.value = 'It\' a draw!';
    gameOn = false;
  }
}

function showWhoWon() {
  wonMessage.value = turn + ' has won!';
  gameOn = false;
}

function restartGame() {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.innerHTML = '';
  })
  turn = 'x';
  wonMessage.value = '';
  gameOn = true;
}
</script>

<template>
  <div class="container">
    <div v-for="n in 9" class="box" @click="handleCheck"></div>
  </div>
  <div class="container-content">
    <p v-if="wonMessage!== ''">{{ wonMessage }}</p>
    <button v-if="wonMessage!== ''" @click="restartGame">Restart</button>
  </div>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  margin: 0 auto;
  max-width: 300px;
  aspect-ratio: 1;
}

.container-content {
  max-width: 300px;
  margin: 0 auto;
  color: white;
  font-size: 2rem;
}

.box {
  border: 1px solid rgba(250, 250, 250, 0.51);
  cursor: pointer;
  transition: .4s;
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: white;
}

.box:hover {
  background: #4f4f4f;
}
</style>
