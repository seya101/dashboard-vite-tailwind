<template>
    <div class="space-y-7">
      <h3 class="text-3xl">
        Project Plan
      </h3>

      <div class="relative bg-white rounded-xl p-4 space-y-7 overflow-hidden">
        <h6 class="text-4xl font-bold">
          $9.00
          <span class="font-normal text-sm text-gray-500">/monthy</span>
        </h6>

        <div class="space-y-2">
          <h3 class="text-lg">
            ProPlan
          </h3>
          <span class="text-gray-500">More productivity with Premium!</span>
        </div>

        <!-- SVG -->
        <div class="absolute bottom-0 -right-14">
            <MainSvg name="img2"/>
        </div> 

      </div>
    </div>
</template>
  
<script setup>
import MainSvg from './MainSvg.vue';
  
</script>