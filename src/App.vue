<template>
  <div class="font-sans text-gray-800 dark:text-white bg-white dark:bg-gray-900 transition-all">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
</script>
