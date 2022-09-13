<template>
<div class="grid grid-cols-12 gap-2 h-screen bg-background">
  <div class="col-span-12 lg:col-span-9 bg-stone-50 rounded-r-[37px] md:divide-x-2 flex gap-2 flex-col lg:flex-row">
    <!-- NAVIGATION -->
      <div class="lg:w-[250px] w-full lg:h-full overflow-hidden">
        <NavBar />
      </div>
    <!-- MAIN CONTENT -->
      <div class="flex-1">
        <MainContainer />
      </div>
  </div>
  <!-- CALENDAR -->
  <div class="col-span-3 bg-debug hidden">
    <Calendar />
  </div>

  <!-- <mdicon name="content-save-minus-outline" /> -->
  <!-- <RouterView /> -->
</div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/navigation/NavBar.vue';
  import MainContainer from './components/main/MainContainer.vue';
  import Calendar from './components/calendar/Calendar.vue';
  </script>