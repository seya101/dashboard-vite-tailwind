<template>
<div class="flex flex-col gap-10 p-7">
    <div class="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div>
            <h1 class="font-extrabold text-5xl text-blueGray-700">Title Page</h1>
            <p class="text-gray-800 pt-2">
                Subtitle of Page Title
            </p>
        </div>
        <div class="flex justify-between gap-2 items-center">
            <button class="bg-gray-200 p-2 rounded-lg text-blueGray-500">
                <mdicon name="magnify"/>
            </button>
            <button class="bg-black py-2 px-4 text-gray-300 rounded-lg hover:shadow-2xl cursor-pointer">
                Add new Project
            </button>
        </div>
    </div>
</div>
</template>

<script setup>

</script>