<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';
import Marquee from '../components/MarqueeDecor.vue';
import MessageCard from '../components/MessageCard.vue';
import SideBar from '../components/SideBar.vue';
import SkillsCard from '../components/SkillsCard.vue';
import SocialsCard from '../components/SocialsCard.vue';
import { ref } from 'vue'

const hideButton = ref(true)

function showMe(){
    hideButton.value = true;
}
function hideMe(){
    hideButton.value = false;
}


</script>

<template>

    <!-- <h1>Home Page</h1> -->
    <div
        class="flex flex-wrap space-x-5 ml-4 border h-150 w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-100 rounded-2xl" v-if=hideButton>
        <img class="h-90 w-90 rounded-full ml-20 mt-10 border-20 border-solid border-orange-200 outline-2  outline-black transform transition-transform duration-300 hover:scale-90"
            src="/images/images.jpg"></img>
        <div class="flex flex-col space-y-4 ml-10 mt-12 w-4/9 absolute right-3/22">
            <h1 class="text-5xl font-bold">Niño Raleigh Paragas</h1>
            <h1 class="text-2xl text-gray-600">sample@gmail.com</h1>

            <!-- socials -->
            <SocialsCard />
        </div>
        <!-- sa ubos ni siya -->
        <SkillsCard />
        <!-- letter ni or message -->
        <MessageCard />


    </div>

    <div class="absolute left-1/2 bottom-[5%] flex space-x-4 transform -translate-x-1/2 -translate-y-1/2">
        <HomeButton><button @click="showMe">Show</button></HomeButton>
        <HomeButton><button @click="hideMe">Hide</button></HomeButton>
    </div>

    <div class="absolute left-1/2 bottom-[5%] flex space-x-150 transform -translate-x-1/2 -translate-y-1/2">
        <button  class="bg-gray-300 text-black text-lg rounded-4xl w-20 h-auto text-center transform -translate-y-1/2 -translate-x-1/2">Prev</button>
        <HomeButton><RouterLink to="/about">Next</RouterLink></HomeButton>
        
    </div>




    <!-- <SideBar />
    <SideBar />
    <SideBar /> -->



    <!-- <Marquee /> -->



</template>