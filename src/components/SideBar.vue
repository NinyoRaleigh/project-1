<script setup lang="ts">
import NavBar from './NavBar.vue';
import SideBarComp from './SideBarComp.vue';

</script>

<template>
    <div class="h-full w-1/7 bg-orange-200 absolute border-r pl-5 pt-2 text-center flex flex-col space-y-10">

        <SideBarComp>

hello

        </SideBarComp>

        <SideBarComp #sidebar2> hi</SideBarComp>

        <SideBarComp>how 
        </SideBarComp>

        <SideBarComp #sidebar2> are </SideBarComp>        
        <SideBarComp> you</SideBarComp>
        <SideBarComp/>
    





    </div>



</template>