<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
      <!-- Left content -->
      <div class="flex flex-col justify-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let’s Talk 👋</h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Whether it's a quick chat or a serious collab — I’m always open. Fill the form or ping me on my socials below.
        </p>
        <div class="space-y-3 text-gray-700 dark:text-gray-300">
          <p><span class="font-semibold text-blue-600 dark:text-blue-400">Email:</span> shahriyorovjavohir@gmail.com</p>
          <p><span class="font-semibold text-blue-600 dark:text-blue-400">Phone:</span> +998 77 022 27 50</p>
          <p><span class="font-semibold text-blue-600 dark:text-blue-400">Location:</span> Tashkent, Uzbekistan</p>
        </div>
        <div class="flex gap-6 mt-8">
          <a href="https://t.me/Shaxriyorov_J" target="_blank" class="text-gray-400 hover:text-blue-400">
            <Icon icon="akar-icons:telegram-fill" class="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/Javohir_shaxriyorov" target="_blank" class="text-gray-400 hover:text-blue-400">
            <Icon icon="brandico:instagram" class="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/javohir-shaxriyorov-b23146309/" target="_blank" class="text-gray-400 hover:text-blue-400">
            <Icon icon="fa-brands:linkedin" class="w-6 h-6" />
          </a>
          <a href="https://github.com/Javokhiir" target="_blank" class="text-gray-400 hover:text-blue-400">
            <Icon icon="fa-brands:github" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Contact form -->
      <div class="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg p-8 space-y-6 border border-white/20 dark:border-white/10">
        <div class="relative">
          <input type="text" id="name" v-model="name" required
                 @blur="validateName"
                 class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-transparent"
                 placeholder="Your Name" />
          <label for="name"
                 class="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
            Your Name
          </label>
          <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
        </div>

        <div class="relative">
          <input type="email" id="email" v-model="email" required
                 @blur="validateEmail"
                 class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-transparent"
                 placeholder="Your Email" />
          <label for="email"
                 class="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
            Your Email
          </label>
          <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>

        <div class="relative">
          <textarea id="message" v-model="message" rows="4" required
                    @blur="validateMessage"
                    class="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-transparent resize-none"
                    placeholder="Your Message"></textarea>
          <label for="message"
                 class="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
            Your Message
          </label>
          <p v-if="messageError" class="text-red-500 text-sm mt-1">{{ messageError }}</p>
        </div>

        <p class="text-sm text-gray-700 dark:text-gray-300 mt-4">
          Verify you are not a robot:
        </p>

        <SwipeVerify @verified="isVerified = true" />

        <button
            @click="handleSubmit"
            :disabled="!isVerified || isLoading"
            :class="[
    'mt-4 w-full font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center',
    isVerified && !isLoading ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  ]"
        >
          <svg v-if="isLoading" class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
        </button>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 backdrop-blur-md">
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center max-w-sm w-full">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Thank you for your message!</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">We will get back to you shortly.</p>
        <button @click="closeModalAndRedirect" class="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">
          Close
        </button>
      </div>
    </div>

    <!-- Decorative Orb -->
    <div class="absolute w-64 h-64 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full -bottom-20 -right-20 blur-3xl animate-spin-slow"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import SwipeVerify from "./SwipeVerify.vue";
import {Icon} from "@iconify/vue";

const isVerified = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const isLoading = ref(false)
const nameError = ref('')
const emailError = ref('')
const messageError = ref('')
const showModal = ref(false)

const TOKEN = '8154697961:AAEmcKd5-IKBfk2b1CjSI6s4wVm4qlMpQhk'
const CHAT_ID = '1306798323'

const sendToTelegram = async (name, email, message) => {
  const text = `
📥 New Contact Message:

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
  `
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML'
    })
  })
}

const validateName = () => {
  nameError.value = name.value.length < 2 ? 'Name must have at least 2 characters.' : ''
}

const validateEmail = () => {
  emailError.value = !email.value.includes('@') ? 'Please enter a valid email address.' : ''
}

const validateMessage = () => {
  messageError.value = !message.value ? 'Message cannot be empty.' : ''
}

const handleSubmit = async () => {
  isLoading.value = true

  // Final validation before submitting
  validateName()
  validateEmail()
  validateMessage()

  if (nameError.value || emailError.value || messageError.value) {
    isLoading.value = false
    return
  }

  try {
    await sendToTelegram(name.value, email.value, message.value)
    toast.success('Message sent successfully!', {
      position: "top-center",
      autoClose: 3000,
    })
    success.value = true
    name.value = ''
    email.value = ''
    message.value = ''
    isVerified.value = false
    showModal.value = true

    // Auto-close the modal after 5 seconds and redirect
    setTimeout(closeModalAndRedirect, 5000)

  } catch (error) {
    toast.error('Failed to send message.', {
      position: "top-center",
      autoClose: 3000,
    })
  } finally {
    isLoading.value = false
  }
}

const closeModalAndRedirect = () => {
  showModal.value = false
  window.location.href = '/'
}
</script>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
