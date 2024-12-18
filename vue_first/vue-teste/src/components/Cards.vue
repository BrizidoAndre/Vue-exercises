<script setup>
import {ref, watchEffect} from "vue";

const props = defineProps({
  title:{
    type:String,
    default:'Title default'
  },
  subtitle:{
    type:String,
    default:'Subtitle default'
  },
  description:{
    type: String,
    default: 'Description default'
  },
  count:{
    default: 0
  },
  pageTitle:String,
})
const localCount = ref(props.count);
const inputValue = ref('');
const pageTitleValue = ref(props.pageTitle);
function addCount(){
    localCount.value ++;
}

watchEffect(()=>{
  props.pageTitle = pageTitleValue.value;
})
</script>


<template>
  <div class="card mb-2" >
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ subtitle }}</h6>
      <p class="card-text">{{ description }}</p>
      <div class="row">
        <p>Count: {{localCount}}</p>
      <button @click="addCount" class="btn btn-outline-primary">Add counter</button>
      </div>
      <div class="mb-3">
        <label for="inputValue" class="form-label">Test</label>
        <input type="text" v-model="pageTitleValue" class="form-control" id="inputValue" placeholder="example">
      </div>
      <h4>{{pageTitleValue}}</h4>
    </div>
  </div>
</template>