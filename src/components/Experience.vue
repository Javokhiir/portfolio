<template>
  <section id="experience" class="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-5xl mx-auto relative">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>

      <!-- Vertical Line -->
      <div class="absolute left-1/2 top-12 h-full w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0"></div>

      <!-- Timeline Items -->
      <div class="space-y-16 relative z-10">
        <div
            v-for="(exp, index) in experiences"
            :key="index"
            :class="[
            'md:w-1/2 px-4',
            index % 2 === 0 ? 'md:pr-12 md:ml-auto text-left' : 'md:pl-12 md:mr-auto text-left',
          ]"
            class="relative"
            :data-aos="'fade-up'"
        >

          <!-- Card -->
          <div
              class="bg-white dark:bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-[1.01] transition duration-300"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ exp.role }}</h3>
            <p class="text-sm text-blue-600 dark:text-blue-300 font-medium">
              {{ exp.company }} — {{ exp.period }}
            </p>
            <p class="mt-2 text-gray-700 dark:text-gray-300">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
  })
})

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Google',
    period: '2024 - Present',
    description: 'Building scalable web interfaces using Vue.js and integrating modern UI patterns.',
  },
  {
    role: 'Real Estate Visual Creator',
    company: 'Prime Haven Properties',
    period: '2024',
    description: 'Captured and edited mobile videos and photos for premium property listings.',
  },
  {
    role: 'Vue.js Intern',
    company: 'Open Source Community',
    period: '2024 - 2025',
    description: 'Contributed to component libraries and gained hands-on experience in frontend dev.',
  },
  {
    role: 'Spaceflight Candidate',
    company: 'SERA x Blue Origin',
    period: '2025',
    description: 'Registered for an experimental suborbital mission to explore new frontiers.',
  },
  {
    role: 'Creative WebSite Builder',
    company: 'Personal',
    period: '2024 - 2025',
    description: 'Designed and built a creative Websites using Vue 3 and Tailwind.',
  },
]
</script>
