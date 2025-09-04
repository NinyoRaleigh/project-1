<script setup lang="ts"></script>

<template>
    <aside class="border rounded-lg bg-green-200 border-black w-9/10 h-1/16">
        <div>
            <div>
                <slot name="sidebar1"></slot>
            </div>

            <div>
                <slot> </slot>
            </div>

            <div>
                <slot name="sidebar2"></slot>
            </div>
        </div>

    </aside>

</template>