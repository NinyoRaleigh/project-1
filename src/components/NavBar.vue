<script setup lang="ts">
import HeadButtons from './HeadButtons.vue';

</script>

<template>

    <div class="space-x-2 p-10 border-b bg-orange-100 absolute w-full left-1/2 -translate-x-1/2 ">
        <div class="flex justify-evenly">
        <HeadButtons>
            <RouterLink to="/">Home Page</RouterLink>
        </HeadButtons>

        <HeadButtons>
         <RouterLink to="/about">About Page</RouterLink>           
        </HeadButtons>

        <HeadButtons>
         <RouterLink to="/contact">Contact Page</RouterLink>           
        </HeadButtons>


        </div>


    </div>


</template>