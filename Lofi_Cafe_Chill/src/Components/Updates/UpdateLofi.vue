<template >
    <div class="flex justify-center">
        <div class="w-[66%] flex flex-wrap">
            <h2 class="text-4xl font-bold w-full  ">What's new</h2>
            <div class="w-full flex flex-wrap mt-8" v-for="(i) in update">
                <div class="w-full flex flex-wrap">
                    <p class="w-full text-[red] font-bold p-2 text-xl md:w-[30%] md:flex items-center">{{ i.time }}</p>
                    <div class="w-full p-2 text-[16px] font-bold pb-8 border-b-[1px] border-solid border-[#333]  md:w-[70%] ">
                        <ul v-for="(z) in i.Content" class="" >
                        <li>{{ z }}</li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const update = ref([
    {
        time: 'August, 2022',
        Content: ["New Clock Widget", "New Train Journey scenes", "New sounds 'Window Rain', 'Train'", "Timer improvements"]
    },
    {
        time: 'July, 2022',
        Content: ["New set 'Honolulu'", "Added Spotify integration", "New FAQ section", "Timer improvements"]
    },
    {
        time: 'August, 2022',
        Content: ["New Clock Widget", "New Train Journey scenes", "New sounds 'Window Rain', 'Train'", "Timer improvements"]
    },
    {
        time: 'August, 2022',
        Content: ["New Clock Widget", "New Train Journey scenes", "New sounds 'Window Rain', 'Train'", "Timer improvements"]
    }

])
</script>
<style >

</style>