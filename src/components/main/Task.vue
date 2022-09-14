<template>
  <div 
    class="relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex"
  >
  <img 
    class="absolute top-0 left-0 w-2 h-full rounded-l-xl"
    :class="`bg-${task.color}`"
  /> 
    <!-- DETAILS -->
    <div class="flex-1">
      <h6>{{ task.name }}</h6>
      <p class="text-gray-500">
        {{ task.description }}
      </p>
    </div>

    <button class="flex justify-center items-center w-7 h-7 border rounded-full"> 
      <mdicon 
        name="check"
        v-if="task.active"
        class="w-7 text-white bg-black rounded-full"
      />
    </button>
</div>
</template>

<script setup>

defineProps ({ 
    task: {
        type: Object,
        required:true
    } 
});

</script>
