<template>
  <header class="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-800 dark:text-white font-poppins">
        Portfolio
      </div>

      <!-- Right section (Navigation and Dark mode toggle) -->
      <div class="flex items-center gap-4">
        <!-- Mobile Menu Button (Heroicons) -->
        <button
            @click="isMenuOpen = !isMenuOpen"
            class="block lg:hidden text-gray-800 dark:text-white"
        >
          <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </button>

        <!-- Navigation links (visible on large screens) -->
        <nav class="hidden lg:flex">
          <ul class="flex flex-wrap justify-center space-x-6 text-gray-800 dark:text-gray-200">
            <li class="relative group font-poppins">
              <a href="#" class="transition duration-300">Home</a>
              <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
            <li class="relative group font-poppins">
              <a href="#about" class="transition duration-300">About</a>
              <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
            <li class="relative group font-poppins">
              <a href="#projects" class="transition duration-300">Projects</a>
              <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
            <li class="relative group font-poppins">
              <a href="#experience" class="transition duration-300">Experience</a>
              <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
            <li class="relative group font-poppins">
              <a href="#contact" class="transition duration-300">Contact</a>
              <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          </ul>
        </nav>

        <!-- Dark mode toggle switch -->
        <div
            @click="toggleDarkMode"
            class="w-12 h-6 flex items-center rounded-full px-1 cursor-pointer transition-colors duration-300"
            :class="isDark ? 'bg-gray-700' : 'bg-gray-300'"
        >
          <div
              class="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300"
              :class="isDark ? 'translate-x-5' : 'translate-x-0'"
          >
            <component
                :is="isDark ? MoonIcon : SunIcon"
                class="w-3 h-3"
                :class="isDark ? 'text-gray-700' : 'text-yellow-500'"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div
          v-if="isMenuOpen"
          class="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md px-4 py-6 backdrop-blur-md z-40"
      >
        <nav>
          <ul class="flex flex-col items-center space-y-4 text-lg font-poppins">
            <li><a href="#" @click="isMenuOpen = false" class="text-gray-800 dark:text-white">Home</a></li>
            <li><a href="#about" @click="isMenuOpen = false" class="text-gray-800 dark:text-white">About</a></li>
            <li><a href="#projects" @click="isMenuOpen = false" class="text-gray-800 dark:text-white">Projects</a></li>
            <li><a href="#experience" @click="isMenuOpen = false" class="text-gray-800 dark:text-white">Experience</a></li>
            <li><a href="#contact" @click="isMenuOpen = false" class="text-gray-800 dark:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </transition>

  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid"

const isDark = ref(false)
const isMenuOpen = ref(false)

// Sahifa yuklanganda, oldingi rejimni tekshirish
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)

  // Rejimni localStorage ga saqlash
  localStorage.setItem('darkMode', isDark.value.toString())
}
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
