<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
    <!-- Glitch-style 404 -->
    <h1 class="text-7xl font-extrabold text-gray-800 dark:text-white tracking-widest relative">
      404
      <span class="absolute left-0 top-0 animate-pulse text-blue-500">404</span>
    </h1>

    <!-- Message -->
    <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
      You've reached an unexplored corner of my portfolio.
    </p>

    <!-- Navigation -->
    <div class="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
      <!-- Back to Home -->
      <router-link
          to="/"
          class="flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
      >
        <HomeIcon class="w-5 h-5 mr-2" />
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Optional custom styles */
</style>
