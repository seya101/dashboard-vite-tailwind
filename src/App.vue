<template>
<div class="grid grid-cols-12 gap-2 h-screen">
  <div class="col-span-12 xl:col-span-9 bg-stone-50 rounded-r-[37px] md:divide-x-2 flex gap-2 flex-col lg:flex-row">
    <!-- NAVIGATION -->
      <div class="lg:w-[250px] w-full lg:h-full overflow-hidden">
        <NavBar />
        
      </div>
    <!-- MAIN CONTENT -->
    <div class="flex-1">
      <router-view />
    </div>
  </div>
  <!-- CALENDAR -->
    <div class="hidden xl:col-span-3 xl:block">
      <Calendar class="p-10"/>
    </div>

</div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/navigation/NavBar.vue';
  import MainContainer from './components/main/Dashboard/MainContainer.vue';
  import Calendar from './components/calendar/Calendar.vue';
  import Dashboard from './views/Dashboard.vue';
  </script>