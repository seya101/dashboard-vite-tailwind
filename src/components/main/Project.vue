<template>
  <div 
    class="rounded-xl text-white p-4 flex justify-between flex-col gap-7"
    :class="`bg-${project.color}`"
  >
    <div class="flex justify-between items-center">
        <!-- IMAGE -->
        <div class="flex -space-x-2">
            <img 
                v-for="(image, index) in images"
                :key="index"
                :src="image" 
                alt="person"
                class="inline-block h-8 rounded-full ring-2"
                :class="`ring-${project.color}`"
            />
            <button class="bg-black flex justify-center items-center rounded-full w-8 h-8">
                <span class="text-sm"> + {{project.people}}</span>
            </button>
        </div>
        <!-- MORE -->
        <button>
            <mdicon name="dots-vertical" />
        </button>
        
    </div>

    <h3 class="font-bold text-3xl">{{project.name}}</h3>

    <div class="space-y-2">
        <p class="text-white">
            <span>{{project.task}}</span> Task | <span>{{project.percentage}}%</span>
        </p>
        <div class="relative h-2 bg-black bg-opacity-20 rounded-xl">
            <span 
                class="absolute bg-gray-200 h-2 top-0 left-0 rounded-xl"
                :style="`width:${project.percentage}%`"
            ></span>
        </div>
    </div>
  </div>
</template>


<script setup>

defineProps ({ 
    project: {
        type: Object,
        required:true
    } 
});

const images = [
    "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=596&q=80",
    "https://images.unsplash.com/photo-1514061842379-da1141f46ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
]
</script>
