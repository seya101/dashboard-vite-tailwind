<template>
  <div class="space-y-7 w-full">
    <h3 class="text-3xl">Task For Today</h3> 
  

    <div class="flex flex-col space-y-4">
      <Task 
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
      />
    </div>
  </div>
</template>

<script setup>
import Task from './Task.vue';

const tasks = [
  {
    name: "Mobile App",
    description: "This is a description ",
    color: "color_1",
    active: true
  },
  {
    name: "Mobile App",
    description: "This is a description",
    color: "color_2",
    active: true
  },
  {
    name: "Mobile App",
    description: "This is a description",
    color: "color_3",
    active: false
  }
]

</script>