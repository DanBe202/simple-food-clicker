<script setup lang="ts">

const emits = defineEmits(['click']);

</script>

<template>
  <div class="flex items-center size-2/4">
    <button
      class="btn size-5/6"
      @click="$emit('click')">
      <img
        src="/src/images/shwarma.png"
        alt="shwarma"/>
    </button>
  </div>
</template>

<style scoped>

</style>