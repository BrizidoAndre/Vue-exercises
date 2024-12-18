<script setup>

</script>
<template>
  <div class="container">
    <button>
      <slot name="texto">
        Botão padrão
      </slot>
      <slot name="icone"/>
    </button>
  </div>
</template>

<style scoped>
button{
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>