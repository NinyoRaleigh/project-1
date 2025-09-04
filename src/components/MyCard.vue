<script setup lang="ts"></script>

<template>

    <div class="border rounded-lg mt-1 space-y-5 pb-5 pt-2 bg-orange-200 p-10">
        
    <div>
        <slot name="header"></slot>
    </div>

    <div>
        <slot></slot>
    </div>

    <div>
        <slot name="footer"></slot>
    </div>


    </div>



</template>