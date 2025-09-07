<script setup lang="ts">
import HeadButtons from './HeadButtons.vue';

</script>

<template>

    <div class="space-x-2 p-10 border-b bg-orange-100 absolute w-full left-1/2 -translate-x-1/2 ">
        <div class="flex justify-end space-x-5">
            <HeadButtons>
                <RouterLink to="/">Home Page</RouterLink>
            </HeadButtons>

            <HeadButtons>
                <RouterLink to="/about">About Page</RouterLink>
            </HeadButtons>

            <HeadButtons>
                <RouterLink to="/contact">Contact Page</RouterLink>
            </HeadButtons>

            <HeadButtons>
                <RouterLink to="/announcement">News Page</RouterLink>
            </HeadButtons>


        </div>


    </div>


</template>