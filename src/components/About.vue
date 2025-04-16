<template>
   <section id="about" class="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <!-- About Card -->
      <div
          class="rounded-2xl shadow-xl p-8 md:flex items-center gap-10 bg-white/80 dark:bg-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.01]"
      >
        <!-- Image Side -->
        <div class="flex justify-center md:w-1/3 mb-8 md:mb-0 group">
          <img
              src="/aboutPic.png"
              alt="Javohir"
              class="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <!-- Text Side -->
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Javohir — a creative frontend developer specializing in Vue.js and Tailwind CSS. I build elegant and efficient user interfaces, with a focus on clean code and smooth UX.
          </p>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Outside of coding, I enjoy photography, learning new technologies, and taking part in space missions 🚀.
          </p>
          <blockquote class="mt-8 italic text-gray-600 dark:text-gray-400">
            "Code is like humor. When you have to explain it, it’s bad."
          </blockquote>
        </div>
      </div>
    </div>
    <!-- Skills Table Section -->
    <div class="mt-12 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Skills</h2>

      <div class="space-y-6">
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">Vue.js</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">85%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-green-500 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">Tailwind CSS</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">90%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-cyan-500 rounded-full w-[90%]"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">Nuxt.js</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">80%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-indigo-500 rounded-full w-[80%]"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">HTML5</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">95%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-orange-500 rounded-full w-[95%]"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">JavaScript</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">85%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-yellow-500 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-800 dark:text-white font-medium">Git</span>
            <span class="text-gray-600 dark:text-gray-300 text-sm">80%</span>
          </div>
          <div class="w-full h-2 bg-gray-300 rounded-full">
            <div class="h-2 bg-amber-500 rounded-full w-[80%]"></div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
