<script setup lang="ts"></script>

<template>
  <RouterLink
    to="/"
    class="bg-orange-300 hover:border-2 border-gray-400 active:border-gray-500 active:bg-orange-400 text-black rounded-full p-3 text-2xl cursor-pointer"
  >
    <slot></slot>
  </RouterLink>
</template>
