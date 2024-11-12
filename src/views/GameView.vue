<script setup lang="ts">

import { GameScene } from '../game/game.scene.ts';
import ItemsDisplay from '../components/common/ItemsDisplay.vue';
import { ref } from 'vue';
import { Item } from '../game/items/item.object.ts';
import PlayerInventory from '../components/common/PlayerInventory.vue';
import Clicker from '../components/common/Clicker.vue';

const game = ref<GameScene>(new GameScene());

function buyItem(item: Item): void {
  game.value.itemUpgrade(item);
}

function addToBalance(): void {
   game.value.player.addToBalance();
}

function upgradeClick(): void {
  game.value.player.upgradeClick();
}

function resetGame(): void {
  game.value.player.resetPlayer();
}

setInterval(() => {
  game.value.update();
}, 1000);

</script>

<template>
  <div class="flex flex-row gap-6">
    <ItemsDisplay
      :items="game.player.items"
      @buy="buyItem">
    </ItemsDisplay>
    <Clicker
      @click="addToBalance">
    </Clicker>
    <div>
      <PlayerInventory
        :player="game.player"
        @click="upgradeClick">
      </PlayerInventory>
    </div>
  </div>
  <button
    class="btn btn-error absolute bottom-0 right-0"
    @click="resetGame">
    Reset Game
  </button>
</template>