<template>
  <div class="relative bg-cover bg-center md:bg-blend-overlay h-[100vh] md:h-[100vh] text-white" style="background-image: url('/javohir.png'); background-attachment: fixed; background-position: center top;">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
      <div class="fade-in">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm Javohir. <br> Welcome to my portfolio.
        </h1>
        <p class="mt-6 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
          Building innovative software solutions with no boundaries. Let's create something amazing together!
        </p>
        <button class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300">
          <a href="#projects">See My Work</a>
        </button>
        <div class="flex gap-6 mt-8">
          <a href="https://t.me/Shaxriyorov_J" target="_blank" class="text-white hover:text-blue-400">
            <Icon icon="akar-icons:telegram-fill" class="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/Javohir_shaxriyorov" target="_blank" class="text-white hover:text-blue-400">
            <Icon icon="brandico:instagram" class="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/javohir-shaxriyorov-b23146309/" target="_blank" class="text-white hover:text-blue-400">
            <Icon icon="fa-brands:linkedin" class="w-6 h-6" />
          </a>
          <a href="https://github.com/Javokhiir" target="_blank" class="text-white hover:text-blue-400">
            <Icon icon="fa-brands:github" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isVisible = ref(true)
</script>

<style scoped>
.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
