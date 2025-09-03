<script setup lang="ts">
import TheCounter from './TheCounter.vue';
import MyInfo from './MyInfo.vue';
import { ref } from 'vue';


const isOpen = ref(true);


function show() {
    isOpen.value = true;
}

function hide() {
    isOpen.value = false;
}

</script>

<template>
    <div>
        <button @click="show"> Show My Info </button>
        <button @click="hide"> Show The Counter </button>
        <MyInfo v-if="isOpen" />
        <TheCounter v-else />
    </div>
</template>