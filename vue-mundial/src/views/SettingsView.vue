<script setup="">

import Cloudy from "@/components/Cloudy.vue";
import {settings} from "@/utils.js";

</script>

<template>
  <div class="container pt-3">
    <div class="form-check form-switch">
      <input :checked="settings.darkTheme" @change="settings.changeTheme" class="form-check-input" type="checkbox" role="switch" id="theme" checked>
      <label class="form-check-label" for="theme">Dark Theme</label>
    </div>
    <div class="form-check form-switch">
      <input v-model="settings.sortAlphabetically" class="form-check-input" type="checkbox" role="switch" id="sort" checked>
      <label class="form-check-label" for="sort">Sort alphabetically</label>
    </div>
  </div>
</template>

<style scoped>

</style>
