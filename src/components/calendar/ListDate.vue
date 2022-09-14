<template>
    <div class="flex justify-between">
        <h5 class="font-bold text-gray-600">
            {{ date.m }} {{ date.d }}, {{ date.y }}
        </h5>
        <mdicon name="dots-vertical" />
    </div>

    <ListTask 
        v-for="(task, index) in listTasks"
        :key="index"
        :task="task"
    />
</template>

<script setup>
import ListTask from "./ListTask.vue";

    defineProps ({ 
        date: {
            type: Object,
            required:true
        } 
    });

    const listTasks = [
    {
        timeEffort: 10,
        title: "Task Title",
        sub: "SubTitle Here",
        colorId: 1,
    },
    {
        timeEffort:"5",
        title: "Task Title",
        sub: "SubTitle Here",
        colorId: 2,
    },
    {
        timeEffort:"1",
        title: "Task Title",
        sub: "SubTitle Here",
        colorId: 3,
    }
    ]

</script>