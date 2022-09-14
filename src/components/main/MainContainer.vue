<template>
    <div class="flex flex-col gap-10 p-7">
        <HelloBar />
        <CurrentProject />

        <div class="grid grid-cols-12 grid-rows-2 gap-10">
            <TasksForToday class="row-span-2 col-span-12 md:col-span-6 " />
            <Statistics class="row-span-1 col-span-12 md:col-span-6 " />
            <ProjectPlan class="row-span-1 col-span-12 md:col-span-6 " />
        </div>

    </div>
</template>

<script setup>
import HelloBar from './HelloBar.vue';
import CurrentProject from './CurrentProject.vue';
import TasksForToday from './TasksForToday.vue';
import Statistics from './Statistics.vue';
import ProjectPlan from './ProjectPlan.vue';

</script>