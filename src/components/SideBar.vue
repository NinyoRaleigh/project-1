<script setup lang="ts">
import NavBar from './NavBar.vue';
import SideBarComp from './SideBarComp.vue';

</script>

<template>
    <div class="h-full w-1/7 bg-orange-200 absolute border-r pl-5 pt-2 text-center flex flex-col space-y-10">

        <SideBarComp>
            <template #sidebar1>Side Bar</template>
        </SideBarComp>

        <SideBarComp>
        </SideBarComp>

        <SideBarComp/>
        <SideBarComp/>
        <SideBarComp/>
        <SideBarComp/>
        <SideBarComp/>
        <SideBarComp/>
    





    </div>



</template>