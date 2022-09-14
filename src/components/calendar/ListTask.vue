<template>
    <div class="flex justify-between items-center gap-4">
        <p class="w-24 text-xl">
            {{ task.timeEffort }}h
        </p>

        <hr 
            class="w-1 rounded-xl h-10"
            :class="`bg-color_${task.colorId }` "
        />

        <div class="flex-1">
            <p class="font-bold text-gray-800 text-xl">{{task.title}}</p>
            <p class=" text-gray-500 ">{{task.sub}}</p>
        </div>
    </div>

</template>

<script setup>
import ListTask from "./ListTask.vue";

    defineProps ({ 
        task: {
            type: Object,
            required:true
        } 
    });
</script>