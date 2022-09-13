<template>
    <div class="flex flex-col md:flex-row items-center md:items-stretch gap-7">

        <Project 
            v-for="(project, index) in projects"
            :key="index"
            class="w-full md:w-1/3 p-4"
            :project="project"
        />

    </div>
</template>


<script setup>
    import Project from "./Project.vue";
    
    const projects = [
        {
        name: "Web Development",
        task: 9,
        percentage: 60,
        people: 3,
        color: "color_1",
        },
        {
        name: "Design",
        task: 7,
        percentage: 36,
        people: 3,
        color: "color_2",
        },
        {
        name: "UI/UX Brand",
        task: 20,
        percentage: 96,
        people: 9,
        color: "color_3",
        }
    ];
</script>
