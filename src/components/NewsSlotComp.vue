<script setup lang="ts">
import NewsSlot from './NewsSlot.vue';

</script>

<template>
    <div class="absolute w-full text-center flex flex-col space-y-10 ">

        <NewsSlot>

hello

        </NewsSlot>

        <NewsSlot #sidebar2> hi</NewsSlot>

        <NewsSlot>how 
        </NewsSlot>

        <NewsSlot #sidebar2> are </NewsSlot>        
        <NewsSlot> you</NewsSlot>
        <NewsSlot/>
    





    </div>



</template>