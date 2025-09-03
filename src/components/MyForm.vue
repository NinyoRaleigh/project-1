<script setup lang="ts">
import {computed, ref} from "vue";

const firstNum = ref(0);
const secondNum = ref(0);
const result = ref(0);

// const result = computed(()=>{
//     return firstNum.value * secondNum.value;
// })

function getResult(){
    result.value = firstNum.value * secondNum.value;
}

</script>

<template>
    <div>
        <h1> First Number : {{ firstNum }}</h1>
        <input type="number" v-model="firstNum"/> 
        <h1> Last Number : {{ secondNum }}</h1>        
        <input type="number" v-model="secondNum"/> 
        <div>Result : {{ result }}</div>
        <button @click="getResult"> Get Result</button>


    </div>
</template>