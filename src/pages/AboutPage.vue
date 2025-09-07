<script setup lang="ts">
import AboutMeCard from '../components/AboutMeCard.vue';
import AboutMePic from '../components/AboutMePic.vue';
import AboutMeStat from '../components/AboutMeStat.vue';
import MarqueeDecor from '../components/MarqueeDecor.vue';
import MyCard from '../components/MyCard.vue';


</script>

<template>

    <h1>About Page</h1>

    <div
        class="flex flex-wrap space-x-5 ml-4 border h-2/3 w-250 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200 rounded-2xl">
        <AboutMeCard/>
        <div class="flex flex-col">
            <AboutMePic/>
            <div class=" w-2/4 rounded-2xl h-3/8 m-10 bg-orange-200 absolute right-0 bottom-0">
                <AboutMeStat/>
            </div>

        </div>


    </div>




      <!-- <marquee behavior="" direction="left" scrollamount="20" class="absolute w-full bottom-0 ">   
        <div style="display: flex; gap: 20px; align-items: center; ">
            <img class="w-20 h-20 transform scale-x-[-1]" src="/images/sonicrunning.gif"></img>
            <img class="w-12 h-12 transform scale-x-[-1]" src="/images/knuckles.gif"></img>
            RUN
        </div>
    </marquee>   -->
</template>