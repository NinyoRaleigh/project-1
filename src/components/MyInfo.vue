<script setup lang="ts">
import {ref} from "vue";

const name = ref("empty");

function changeToFirstName() {
    name.value = "Niño";
}

function changeToLastName() {
    name.value = "Paragas";
}

</script>


<template>
    <div>
        {{ name }}
        <button @click="changeToFirstName">Show My First Name</button>
        <button @click="changeToLastName">Show My Last Name</button>
    </div>

</template>