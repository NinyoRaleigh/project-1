<script setup lang="ts">

</script>

<template>

<div class="space-y-5 ">
    <div class="space-x-2 p-10 border-b bg-blue-400">
        <RouterLink  class="bg-black text-white rounded-full p-5 text-2xl ml-180" to="/" >Home Page </RouterLink>
        <RouterLink  class="bg-black text-white rounded-full p-5 text-2xl" to="/about">About Page </RouterLink>
    </div>
    <router-view></router-view>


</div>

</template>


