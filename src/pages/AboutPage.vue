<script setup lang="ts">
import MarqueeDecor from '../components/MarqueeDecor.vue';
import MyCard from '../components/MyCard.vue';


</script>

<template>

    <h1>About Page</h1>

    <div
        class="flex flex-wrap space-x-5 ml-4 border h-2/3 w-250 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200 rounded-2xl">
        <div class="border border-black w-2/5 rounded-2xl h-7/8 m-10 bg-orange-100 space-y-10">
            <h1 class="text-2xl font-bold ml-5 mr-5">All About Me</h1>
            <h1 class="text-5xl font-semibold text-black ml-5  mr-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
            <h2 class="text-m font-semibold text-black ml-5 mt-15 mr-5 text-justify w-90 h-55 overflow-hidden"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis reiciendis soluta tempora est perspiciatis doloribus. Modi aliquam esse sit explicabo excepturi aperiam officia enim unde, maiores, repellat, incidunt labore deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque unde voluptatem corporis quaerat voluptates hic at dolores eveniet magni quidem, expedita nemo vero vitae aspernatur magnam! Ea, necessitatibus nulla.</h2>

        </div>
        <div class="flex flex-col">
            <div class="border border-black w-2/4 rounded-2xl h-3/7 m-10 bg-orange-100 absolute right-0"> <img class="w-full h-full rounded-2xl overflow-hidden" src="/images/man.jpg"></div>
            <div class=" w-2/4 rounded-2xl h-3/8 m-10 bg-orange-200 absolute right-0 bottom-0">
                <div class="grid grid-cols-2   text-center w-[100%] h-full gap-[5%]">
                    <div class="flex flex-col items-center border border-black bg-orange-100 rounded-2xl   justify-center">
                        <p class="text-3xl font-bold">2</p>
                        <p>Days Experience</p>
                    </div>
                    <div class="flex flex-col items-center justify-center border border-black bg-orange-100 rounded-2xl  text-center">
                        <p class="text-3xl font-bold">0</p>
                        <p>Projects</p>
                </div>
                    <div class="flex flex-col items-center justify-center border border-black bg-orange-100 rounded-2xl  text-center">
                        
                        <p class="text-3xl font-bold">0</p>
                        <p>Reviews</p>
                    </div>
                    <div class="flex flex-col items-center justify-center border border-black bg-orange-100 rounded-2xl  text-center">
                        <p class="text-3xl font-bold">256</p>
                        <p>Following</p>
                        </div>
                    
                </div>
            </div>

        </div>


    </div>




      <marquee behavior="" direction="left" scrollamount="20" class="absolute w-full bottom-0 ">   
        <div style="display: flex; gap: 20px; align-items: center; ">
            <img class="w-20 h-20 transform scale-x-[-1]" src="/images/sonicrunning.gif"></img>
            <img class="w-12 h-12 transform scale-x-[-1]" src="/images/knuckles.gif"></img>
            RUN
        </div>
    </marquee>  
</template>