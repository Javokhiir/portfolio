<template>
  <div class="font-sans text-gray-800 dark:text-white bg-white dark:bg-gray-900 transition-all">
    <Navbar v-if="$route.name !== 'NotFound'" />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
