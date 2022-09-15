<template>
    <ul>
        <li 
            v-for="({ text, icon}, index) in items"
            @click="setActive(index)"
            :key="index"
        >   
            <router-link :to="{ path:text }">
                <div 
                    class="p-3 flex justify-start items-center gap-3 cursor-pointer"
                    :class="{'font-bold bg-gradient-to-tl to _pink-500 from-orange-300 rounded-xl text-gray-500' : active === index}"
                >
                    <mdicon :name="icon" class="text-current" />
                    <span>{{ text }}</span> 
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
    import {ref} from "vue";

    const active = ref(0);

    const setActive = (index) => active.value = index;

    const items = [
        {text: "Dashboard", icon: "home"},
        {text: "Analytics", icon: "poll"},
        {text: "Tracking", icon: "text-box-check-outline"},
        {text: "Setting", icon: "cog-outline"}
    ]
</script>

<style>

</style>