<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';
import MyCard from '../components/MyCard.vue';
import NewsSlotComp from '../components/NewsSlotComp.vue';


</script>

<template>

    <div
        class="flex border h-2/3 w-250 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-200 rounded-2xl ">

        <div
            class="flex flex-col absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold text-center p-20">
            <h1>News</h1>


        </div>
        <div class="text-m absolute left-1/10 top-2/10 w-4/5 text-justify p-10">
            <NewsSlotComp></NewsSlotComp>
        </div>



        <div class="absolute left-1/2 bottom-0 gap-20 flex transform -translate-x-1/2 -translate-y-1/2 ">
            <HomeButton>
                Prev
            </HomeButton>
            <HomeButton>
                Next
            </HomeButton>
        </div>

    </div>

    <div class="absolute left-1/2 bottom-[5%] flex space-x-150 transform -translate-x-1/2 -translate-y-1/2">
        <HomeButton>
            <RouterLink to="/contact">Prev</RouterLink>
        </HomeButton>
        <button
            class="bg-gray-300 text-black text-lg rounded-4xl w-20 h-auto text-center transform -translate-y-1/2 -translate-x-1/2">Next</button>

    </div>


    <!-- <marquee behavior="" direction="left" scrollamount="20" class="absolute w-full bottom-0 ">   
        <div style="display: flex; gap: 20px; align-items: center; ">
            <img class="w-20 h-20 transform scale-x-[-1]" src="/images/sonicrunning.gif"></img>
            <img class="w-12 h-12 transform scale-x-[-1]" src="/images/knuckles.gif"></img>
            RUN
        </div>
    </marquee>   -->
</template>