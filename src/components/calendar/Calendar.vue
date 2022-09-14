<template>
    <div class="space-y-5">
        <!-- HEADER -->
        <div class="flex justify-between items-center">
            <h3 class="text-xl font-bold">Calendar</h3>
            <button class="relative p-2 bg-white rounded-xl">
                <mdicon name="bell" />
                <span class="absolute bg-red-400 h-2 w-2 rounded-full top-2 right-2"></span>
            </button>
        </div>

        <div class="space-y-7">
            <ListDate 
                v-for="(date, index) in listDate"
                :key="index"
                :date="date"
            />
            
        </div>

    </div>
    
</template>

<script setup>
import ListDate from "./ListDate.vue";

const listDate = [
    {
        m:"September",
        d: 1,
        y: 2022
    },
    {
        m:"September",
        d: 2,
        y: 2022
    },
    {
        m:"September",
        d: 3,
        y: 2022
    }
]
</script>
