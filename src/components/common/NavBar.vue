<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


</script>

<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Idle Food</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-10">
        <li><a><font-awesome-icon :icon="faDiscord" size="xl"/></a></li>
        <li>
          <details>
            <summary class="text-base w-24">Info</summary>
            <ul class="bg-base-200 rounded-t-none p-2 w-32">
              <li><a>Contact Us</a></li>
              <li><a>About Us</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>