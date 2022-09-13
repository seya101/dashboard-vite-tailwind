<template>
  <div class="space-y-7 w-full">
    <h1 class="text-3xl">Task For Today</h1> 
  </div>

  <div class="flex flex-col">
    <Task 
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
    />
  </div>
</template>

<script setup>
import Task from './Task.vue';

const task = [
  {
    name: "Mobile App",
    description: "This is a description that describe the title",
    color: "color_1",
    active: true
  },
  {
    name: "Mobile App",
    description: "This is a description that describe the title",
    color: "color_2",
    active: true
  },
  {
    name: "Mobile App",
    description: "This is a description that describe the title",
    color: "color_3",
    active: true
  }
]

</script>