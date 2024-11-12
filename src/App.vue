<script setup lang="ts">
import GameView from './views/GameView.vue';
import NavBar from './components/common/NavBar.vue';
</script>

<template>
  <div class="flex flex-col gap-6">
    <NavBar></NavBar>
    <GameView></GameView>
  </div>
</template>

