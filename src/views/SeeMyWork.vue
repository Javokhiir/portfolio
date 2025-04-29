<template>
  <section class="text-gray-800 dark:text-white bg-white dark:bg-gray-900 " :class="modeClass">
  <div :class="modeClass">
    <h1>See My Work</h1>
  </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const modeClass = ref('')

onMounted(() => {
  const mode = localStorage.getItem('mode')
  if (mode === 'night') {
    modeClass.value = 'bg-gray-800 text-white'
  } else {
    modeClass.value = 'bg-white text-black'
  }
})
</script>

<style scoped>
/* Agar kerak bo'lsa, maxsus stil qo'shish mumkin */
</style>
