<script setup lang="ts"></script>

<template>

    <div class="space-x-2 p-10 border-b bg-orange-100 absolute w-full left-1/2 -translate-x-1/2 ">
        <RouterLink  class="bg-orange-300 hover:border-2 border-gray-400 active:border-gray-500 active:bg-orange-400 text-black rounded-full p-3 text-2xl absolute left-1/3 transform -translate-x-1/3 top-1/2 -translate-y-1/2" to="/"> 
            <button>Home Page </button>
        </RouterLink>
        <RouterLink  class="bg-orange-300 hover:border-2 border-gray-400 active:border-gray-500 active:bg-orange-400 text-black rounded-full p-3 text-2xl absolute left-2/3 transform
         -translate-x-1/2 top-1/2 -translate-y-1/2" to="/about">
            <button class=" cursor-pointer ">About Page </button>
        </RouterLink>
    </div>


</template>