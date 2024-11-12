<script setup lang="ts">

import { Items } from '../../game/items/items.ts';
import ItemControls from './ItemControls.vue';

interface Props {
  items: Items;
}

defineProps<Props>();

const emit = defineEmits(['buy']);

</script>

<template>
  <div class="flex flex-col gap-1">
    <ItemControls
      v-for="item in items.items"
      :item="item"
      @buy="$emit('buy', item)"
    >
    </ItemControls>
  </div>
</template>