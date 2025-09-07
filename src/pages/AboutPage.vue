<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';
import AboutMeCard from '../components/AboutMeCard.vue';
import AboutMePic from '../components/AboutMePic.vue';
import AboutMeStat from '../components/AboutMeStat.vue';
import MarqueeDecor from '../components/MarqueeDecor.vue';
import MyCard from '../components/MyCard.vue';


</script>

<template>

    <h1>About Page</h1>

    <div
        class="flex flex-wrap border h-2/3 w-250 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-orange-200 rounded-2xl">
        <AboutMeCard />
        <div class="flex flex-col">
            <AboutMePic />
            <div class=" w-2/4 rounded-2xl h-3/8 m-10 bg-orange-200 absolute right-0 bottom-0">
                <AboutMeStat />
            </div>

        </div>




    </div>

    <div class="absolute left-1/2 bottom-[5%] flex space-x-150 transform -translate-x-1/2 -translate-y-1/2">
            <HomeButton><RouterLink to="/">Prev</RouterLink> </HomeButton>
            <HomeButton><RouterLink to="/contact">Next</RouterLink> </HomeButton>
    </div>


    <!-- <marquee behavior="" direction="left" scrollamount="20" class="absolute w-full bottom-0 ">   
        <div style="display: flex; gap: 20px; align-items: center; ">
            <img class="w-20 h-20 transform scale-x-[-1]" src="/images/sonicrunning.gif"></img>
            <img class="w-12 h-12 transform scale-x-[-1]" src="/images/knuckles.gif"></img>
            RUN
        </div>
    </marquee>   -->
</template>