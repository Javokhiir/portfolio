<template>
  <section class="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
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

        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Javohir — a creative frontend developer specializing in Vue.js and Tailwind CSS. I build elegant and efficient user interfaces, with a focus on clean code and smooth UX.
          </p>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Outside of coding, I enjoy photography, learning new technologies, and taking part in space missions 🚀.
          </p>
        </div>
      </div>

      <!-- Creative Skills Section -->
      <div class="mt-12 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Skills</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- Skill Card 1 -->
          <div class="relative group text-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 mx-auto mb-4 shadow-lg overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
              <div class="relative z-10 text-white text-4xl font-semibold">JS</div>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">JavaScript</h3>
            <div class="mt-4 flex justify-center items-center">
              <div class="w-2/3 h-2 bg-gray-300 rounded-full">
                <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <!-- Skill Card 2 -->
          <div class="relative group text-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-green-600 mx-auto mb-4 shadow-lg overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
              <div class="relative z-10 text-white text-4xl font-semibold">Vue</div>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Vue.js</h3>
            <div class="mt-4 flex justify-center items-center">
              <div class="w-2/3 h-2 bg-gray-300 rounded-full">
                <div class="h-2 bg-green-500 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <!-- Skill Card 3 -->
          <div class="relative group text-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600 mx-auto mb-4 shadow-lg overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
              <div class="relative z-10 text-white text-4xl font-semibold">Tail</div>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
            <div class="mt-4 flex justify-center items-center">
              <div class="w-2/3 h-2 bg-gray-300 rounded-full">
                <div class="h-2 bg-teal-500 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>

          <!-- Skill Card 4 -->
          <div class="relative group text-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-r from-red-400 via-orange-500 to-red-600 mx-auto mb-4 shadow-lg overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
              <div class="relative z-10 text-white text-4xl font-semibold">Node</div>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Node.js</h3>
            <div class="mt-4 flex justify-center items-center">
              <div class="w-2/3 h-2 bg-gray-300 rounded-full">
                <div class="h-2 bg-red-500 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          <!-- Skill Card 5 -->
          <div class="relative group text-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mb-4 shadow-lg overflow-hidden">
              <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
              <div class="relative z-10 text-white text-4xl font-semibold">Git</div>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Git</h3>
            <div class="mt-4 flex justify-center items-center">
              <div class="w-2/3 h-2 bg-gray-300 rounded-full">
                <div class="h-2 bg-yellow-500 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <blockquote class="mt-8 italic text-gray-600 dark:text-gray-400">
        "Code is like humor. When you have to explain it, it’s bad."
      </blockquote>
    </div>
  </section>
</template>
