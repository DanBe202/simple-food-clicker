<script setup lang="ts">

import { Item } from '../../game/items/item.object.ts';
import { toString } from '../../game/number-compression/number-compression.ts';

interface Props {
  item: Item;
}

const emit = defineEmits(['buy']);

defineProps<Props>();
</script>

<template>
  <div
    class="collapse
           bg-base-200">
    <input
      type="radio"
      name="my-accordion-1" />
    <div
      class="collapse-title text-xl font-medium">
      {{ item.name }}
    </div>
    <div class="collapse-content">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex justify-between">
            <div class="">
              <h2 class="card-title">
                {{ item.description }}
              </h2>
              <p>
                Income: {{ item.income }}
              </p>
              <p>
                Value: {{ toString(item.value) }}
              </p>
            </div>
            <div class="flex items-center">
              <p class="font-bold text-4xl">
                {{ item.quantity }}
              </p>
            </div>
          </div>
          <div class="card-actions justify-end">
            <button
              class="btn btn-primary"
              @click="$emit('buy')">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>