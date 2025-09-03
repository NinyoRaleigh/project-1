<script setup lang="ts">
import {computed, ref} from "vue";

const temp = ref(0);

function Increment() {
    if (temp.value < 10){
        temp.value++;
    }
    
}
function Decrement() {
    if (temp.value > 0){
        temp.value--;
    }
    
}

const doubleTemp = computed(()=>{
    return temp.value * 5;
});

</script>

<template>
    <div>
        <h1>Temp : {{ temp }}</h1>
        <h1>Double Temp : {{ doubleTemp }}</h1>
        
        <button @click="Increment">Increment</button>
        <button @click="Decrement">Decrement</button>
    </div>
</template>