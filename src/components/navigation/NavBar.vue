<script setup>
    import NavBarMenu from './NavBarMenu.vue';
    import NavBarSvg from './NavBarSvg.vue';
    import {ref} from "vue";

    const MOBILE_BREAKPOINT = 1024; // Tailwind: lg

    const width = ref(document.body.offsetWidth);

    const menuIsActive = ref(width.value > MOBILE_BREAKPOINT);

    const toggleMenu = () => menuIsActive.value = !menuIsActive.value;

    window.addEventListener( "resize", function () {
        width.value = document.body.offsetWidth;
        menuIsActive.value = width.value >= MOBILE_BREAKPOINT
    })

</script>

<template>
    <div class="lg:space-y-10 lg:block relative p-2 grid grid-cols-12 h-full">
        <!-- LOGO -->
        <div class="col-span-6 flex justify-center items-center gap-4">
            <div class="bg-gradient-to-tl from-color_3 to _pink-500 rounded-xl p-2 text-white">
                <mdicon name="checkbox-marked-circle-plus-outline" class="text-current" />
            </div>
            <h5>LOGO</h5>
        </div>

        <!-- BURGER MENU -->
        <div class="lg:hidden col-span-6 flex justify-end items-center">
            <button 
                class="bg-stone-300 p-2 rounded-lg"
                @click="toggleMenu"
            >
                <mdicon name="menu" />
            </button>
        </div>

        <!-- USER PROFILE -->
        <div class="col-span-12 hidden lg:block">
            <div class="relative w-full h-24 flex flex-col items-center gap-4">
                <img src="../../assets/img/profile.jpg" alt="Admin" class="w-24 h-24 rounded-full"/>
                <p class="absolute bg-white -bottom-2 left-1/2 transform -translate-x-1/2 text-xs px-2 text-orange-500 flex items-center gap-1 rounded-full">
                    <mdicon name="clock" width="15px" />
                    <span class="font-bold">10h</span>
                </p>
            </div>
            <div class="text-center mt-7">
                <h1 class="font-bold text-black">Juan Dela Cruz</h1>
                <a href="#" class="text-gray-500">juandelacruz@gmail.com</a>
            </div>
        </div>

        <!-- MENU -->
        <div class="col-span-12 p-10" v-if="menuIsActive">
            <NavBarMenu />
        </div>

        <!-- SVG -->
        <div class="hidden lg:block absolute bottom-0 left-0 ">
            <NavBarSvg name="svg"/>
        </div> 
    </div>
</template>


    
    