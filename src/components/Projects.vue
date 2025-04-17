<template>
  <section id="projects" class="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-7xl mx-auto text-center ">
      <h2 class="text-4xl font-bold mb-10 text-gray-900 dark:text-white">My Projects</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition ease-in-out duration-500"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-6 text-left ">
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
    title: 'Green Light ELD',
    description: 'Platform offers a comprehensive suite of tools crafted for trucking companies and owner-operators.',
    image: '/gle.png',
    techStack: ['Vue.js', 'Tailwind CSS', 'Nuxt Js'],
    live: 'https://greenlighteld.com/',
    github: 'https://github.com/Javokhiir',
  },
  {
    id: 2,
    title: 'Pizza House',
    description: 'Online FastFood delivery web app',
    image: '/pizza-web.png',
    techStack: ['Vue Js', 'Tailwind Css', 'Axios'],
    live: 'https://pizza-house-web-javohirs-projects-b5f70d85.vercel.app/',
    github: 'https://github.com/Javokhiir',
  },
  {
    id: 3,
    title: 'Portfolio 2.0',
    description: 'My latest personal portfolio featuring dark mode and smooth animations.',
    image: '/portfolio-web.png',
    techStack: ['Vue 3', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://portfolio-ebon-five-19.vercel.app/',
    github: 'https://github.com/Javokhiir',
  },
]
</script>
