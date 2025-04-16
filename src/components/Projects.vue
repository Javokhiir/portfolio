<template>
  <section class="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10 text-gray-900 dark:text-white">My Projects</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-6 text-left">
            <h3 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 text-sm rounded"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-4">
              <a
                  :href="project.live"
                  target="_blank"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Live Preview
              </a>
              <a
                  :href="project.github"
                  target="_blank"
                  class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'TravelX',
    description: 'A travel booking platform with stunning UI and 360-degree destination previews.',
    image: '/projects/travelx.jpg',
    techStack: ['Vue.js', 'Tailwind CSS', 'Three.js'],
    live: 'https://travelx-demo.com',
    github: 'https://github.com/Javokhiir',
  },
  {
    id: 2,
    title: 'ELD Dashboard',
    description: 'Fleet management system with real-time driver data and ELD log tracking.',
    image: '/projects/eld.jpg',
    techStack: ['Vue', 'Chart.js', 'Axios'],
    live: '#',
    github: 'https://github.com/Javokhiir/eld-dashboard',
  },
  {
    id: 3,
    title: 'Portfolio 2.0',
    description: 'My latest personal portfolio featuring dark mode and smooth animations.',
    image: '/projects/portfolio.jpg',
    techStack: ['Vue 3', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    github: 'https://github.com/Javokhiir/portfolio-v2',
  },
]
</script>
