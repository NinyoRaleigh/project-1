<script setup lang="ts">
import HomeButton from './HomeButton.vue';
import NewsSlot from './NewsSlot.vue';

</script>

<template>
    <div class="absolute -top-0 left-[0%] right-[5%] w-full  flex flex-col space-y-10 justify-center ">


        <NewsSlot>
            <template #header>Name: asdfghjkl</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam vero incidunt, dolor veniam,
            reprehenderit
            maiores labore, deleniti aspernatur possimus minus atque maxime rerum ratione esse pariatur facere corrupti
            necessitatibus!
            <template #footer>
                <div class="flex justify-evenly">
                    <button class="  text-black w-20">Like</button>
                    <button class="  text-black w-20">Comment</button>
                    <button class="  text-black w-20">Share</button>
                </div>
            </template>
        </NewsSlot>
        <NewsSlot>
            <template #header>Name: asdfghjkl</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam vero incidunt, dolor veniam,
            reprehenderit
            maiores labore, deleniti aspernatur possimus minus atque maxime rerum ratione esse pariatur facere corrupti
            necessitatibus!
            <template #footer>
                <div class="flex justify-evenly">
                    <button class="  text-black w-20">Like</button>
                    <button class="  text-black w-20">Comment</button>
                    <button class="  text-black w-20">Share</button>
                </div>
            </template>
        </NewsSlot>

        <div class="absolute right-0 -bottom-10  flex flex-row transform -translate-x-1/2 -translate-y-1/2 ">

        </div>


    </div>



</template>