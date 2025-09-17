<script setup lang="ts"></script>

<template>
    <aside class="border rounded-lg bg-orange-100 border-black max-h-35 overflow-hidden ">
        <div class="space-y-2">
            <div class="border-b">
                <slot name="header"></slot>
            </div>

            <div class="border-b">
                <slot> </slot>
            </div>

            <div>
                <slot name="footer"></slot>
            </div>
        </div>

    </aside>

</template>