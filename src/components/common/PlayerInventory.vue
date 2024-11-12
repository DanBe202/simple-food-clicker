<script setup lang="ts">
import { Player } from '../../game/player/player.object.ts';
import { toString } from '../../game/number-compression/number-compression.ts';

interface Props {
  player: Player;
}

defineProps<Props>();

const emits = defineEmits(['upgrade-click']);

</script>

<template>
  <div class="stats stats-vertical shadow">
    <div class="stat">
      <div class="stat-title">Balance</div>
      <div class="stat-value">{{ toString(player.balance) }}</div>
      <div class="stat-desc">coins</div>
    </div>

    <div class="stat">
      <div class="stat-title">Income</div>
      <div class="stat-value">{{ toString(player.income) }}</div>
      <div class="stat-desc">coins/s</div>

    </div>
    <div class="stat w-56">
      <div class="stat-title">Value:</div>
      <div class="stat-value">{{ toString(player.clickCost) }}</div>
      <div class="stat-value">{{ toString(player.clickValue) }}</div>
      <div class="stat-desc">c/t</div>
      <button
        class="btn btn-outline btn-accent"
        @click="$emit('upgrade-click')">
        Upgrade click
      </button>
    </div>
  </div>

</template>

<style scoped>

</style>