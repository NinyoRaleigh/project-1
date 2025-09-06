<script setup lang="ts"></script>

<template>

<div>
    <slot>
    <RouterLink  class="bg-orange-300 hover:border-2 border-gray-400 active:border-gray-500 active:bg-orange-400 text-black rounded-full p-3 text-2xl " to="/"> 
            <button>Home Button
                <slot></slot>
            </button>
        </RouterLink>
    </slot>
</div>

</template>