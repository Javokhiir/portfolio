<template>
  <div>
    <!-- Floating Chat Button -->
    <button
        @click="isOpen = !isOpen"
        class="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
    >
      <ChatBubbleLeftRightIcon class="w-6 h-6" />
    </button>

    <!-- Chat Modal -->
    <transition name="fade-slide-up">
      <div
          v-if="isOpen"
          class="fixed bottom-20 right-6 w-80 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 z-50 overflow-hidden"
      >
        <div class="p-4 border-b border-zinc-200 dark:border-zinc-700 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold block items-center">
          <span>Ask Javohir 🤖</span>
          <span class="flex items-center text-sm font-normal text-lime-300">
    <span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse mr-1"></span>
    Online
  </span>
        </div>


        <div class="p-4 max-h-72 overflow-y-auto space-y-3 text-sm">
          <div v-for="(msg, index) in messages" :key="index" class="flex" :class="msg.from === 'user' ? 'justify-end' : 'justify-start'">
            <div
                class="px-4 py-2 rounded-xl"
                :class="msg.from === 'user'
                ? 'bg-indigo-500 text-white rounded-br-none'
                : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white rounded-bl-none'"
            >
              {{ msg.text }}
            </div>
          </div>
          <div v-if="loading" class="text-zinc-500 italic">Javohir is typing...</div>
        </div>

        <div class="flex border-t border-zinc-200 dark:border-zinc-700">
          <input
              v-model="input"
              @keyup.enter="sendMessage"
              placeholder="Ask something..."
              class="flex-1 p-3 bg-transparent outline-none text-sm dark:text-white"
          />
          <button @click="sendMessage" class="px-4 text-indigo-500 font-bold">Send</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(false)
const input = ref('')
const loading = ref(false)
const messages = ref([
  { from: 'bot', text: "Hi there! I am Javohir's personal AI👋" }
])

const replies = {
  // **General / Salomlashuv**
  'hi': "Hello! How can I assist you today? 😊 If you'd like to get in touch, please fill out the contact form below! 📩",
  'hello': "Hi there! How’s it going? 👋 If you need assistance, just fill out the form below to reach me! 📩",
  'good morning': "Good morning! Ready to start your day? 🌞 Need help? Fill out the contact form and I'll get back to you! 📩",
  'good afternoon': "Good afternoon! How’s your day going so far? 🌼 If you need anything, just use the contact form! 📩",
  'good evening': "Good evening! Hope you had a great day. 🌙 Want to chat more? Fill out the form to get in touch! 📩",
  'how are you': "I'm doing great, thanks for asking! How about you? 😊 If you need help, use the contact form to reach me! 📩",
  'how are you doing': "I'm doing well, thank you! How are you today? 👋 Feel free to reach out by filling out the form below! 📩",
  'what\'s up': "Hey! Not much, just here to help you. What's up with you? 👀 Want to discuss further? Contact me through the form! 📩",
  'how is it going': "It’s going well! How’s everything with you? 😊 If you need assistance, you can contact me via the form! 📩",
  'how can I help you': "I'm here to help you with anything you need! Just ask away, or fill out the contact form to reach me! 📩",

  // **Introductions / Tanishuv**
  'who are you': "I’m Javohir's AI assistant, here to help you with anything you need! 🤖 You can always reach me via the contact form! 📩",
  'tell me about yourself': "I’m a friendly AI created to help you with programming, technology, and anything else you need. Let’s chat! 🤖 Fill out the form to contact me directly! 📩",
  'what is your name': "I'm Javohir’s AI assistant. You can call me Assistant! 😊 Need help? Reach out via the contact form! 📩",
  'where do you work': "I work with Javohir on his personal website, helping visitors like you! 🚀 Want to connect? Fill out the contact form below! 📩",
  'what can you do': "I can answer questions, provide tech help, and assist with programming-related tasks. Ask me anything! 💻 Use the contact form to get in touch! 📩",
  'are you a bot': "Yes, I’m an AI bot designed to help you out with various tasks! 🤖 Need more info? Contact me using the form! 📩",
  'what do you look like': "I don't have a physical form, but I’m here in the digital world to help you out! 🧑‍💻 Feel free to reach out through the contact form! 📩",
  'can you help me with programming': "Absolutely! I specialize in frontend development and can help with various tech-related topics. 🤓 Contact me via the form for more help! 📩",
  'are you real': "Well, I’m real in the sense that I’m here to assist you, but I’m not a human. I’m an AI! 🤖 Fill out the form to get in touch! 📩",

  // **Common Questions / Umumiy Savollar**
  'what is your purpose': "My purpose is to assist you with anything you need, be it tech-related or just a casual chat! 🤖 If you want to get in touch, fill out the contact form below! 📩",
  'how can I contact you': "You can contact me anytime via the chat box right here! 💬 But, for a direct conversation, fill out the contact form! 📩",
  'do you have a phone number': "No phone number, just this chat window for all your queries. 📱💬 If you need to speak directly, use the contact form! 📩",
  'where can I find your contact info': "You can use the contact form right here on the website to get in touch. 📩",
  'are you available 24/7': "Yes, I’m always here to assist you whenever you need help. 😊 Just reach out through the contact form! 📩",
  'can I ask you anything': "Yes, you can ask me anything! I’ll do my best to provide an answer. 😊 Or fill out the form if you want to reach me directly! 📩",
  'is there a limit to what I can ask': "No limit! Ask anything and I’ll try to help. Just keep it respectful. 🤖 Contact me via the form for detailed inquiries! 📩",

  // **Career & Expertise / Kasbiy Tajriba**
  'what do you do': "I'm a frontend developer specializing in Vue.js & Tailwind CSS 🚀 Need more info? Use the contact form to reach me directly! 📩",
  'what is your best project': "Probably my portfolio itself 😉 it's fully custom and creative! Want to know more? Fill out the contact form! 📩",
  'where are you from': "I'm proudly from Uzbekistan 🇺🇿 If you'd like to learn more, contact me through the form! 📩",
  'how to contact': "You can use the contact form on the site — swipe to verify and boom! 📩",
  'what is your professional background': "I have a background in frontend development, specializing in modern JavaScript frameworks and CSS tools like Vue.js and Tailwind CSS. Want to know more? Fill out the contact form! 📩",
  'could you tell me about your expertise in frontend development': "I specialize in building responsive, dynamic, and performance-oriented web applications using Vue.js and Tailwind CSS. Need further details? Use the contact form! 📩",

  // **Personal Interests / Shaxsiy Qiziqishlar**
  'what are your hobbies outside of programming': "Outside of programming, I enjoy reading, photography, traveling, and learning new languages. Want to chat more? Reach out through the form! 📩",
  'how do you spend your free time': "I like to spend my free time exploring new tech trends, watching sci-fi movies, and spending time with friends and family. Contact me via the form if you want to chat more! 📩",
  'what motivates you outside of work': "I'm motivated by the potential to create something impactful that can help people or solve problems. Want to discuss? Use the contact form! 📩",
  'how do you manage a healthy work-life balance': "I prioritize my time and set clear boundaries between work and personal life, ensuring I take regular breaks and spend time with loved ones. Need more advice? Contact me! 📩",

  // **Work & Collaboration / Ish & Hamkorlik**
  'how do you approach team collaboration in a development project': "I believe in clear communication and regular code reviews to ensure everyone is aligned on the project goals and implementation. Want to discuss further? Fill out the form! 📩",
  'have you worked in an agile development environment': "Yes, I've worked in agile teams, participating in sprints and daily stand-ups to ensure timely delivery of features. Contact me via the form for more insights! 📩",
  'how do you handle project deadlines and pressure': "I break down tasks into smaller chunks, prioritize the most important tasks, and communicate with my team to meet deadlines without compromising quality. Need advice? Use the contact form! 📩",
  'how do you handle feedback from colleagues': "I take feedback positively, view it as an opportunity for growth, and make necessary changes to improve the quality of my work. Want to discuss your own experience? Contact me! 📩",

  // **Languages & Skills / Til va Ko'nikmalar**
  'what programming languages are you proficient in': "I’m proficient in JavaScript, HTML, CSS, and have experience with TypeScript. Want more details? Fill out the contact form! 📩",
  'can you list the technologies you\'re familiar with': "I'm familiar with Vue.js, React, Tailwind CSS, SASS, and tools like Webpack, Git, and NPM. Reach out via the form for more info! 📩",
  'how would you rate your knowledge of javascript': "I would rate my JavaScript skills as intermediate to advanced. I’m comfortable with ES6+ features and async programming. Want to learn more? Use the contact form! 📩",

  // **Education & Learning / Ta'lim & O'rganish**
  'what is your educational background': "I have a degree in computer science and have taken several online courses to deepen my knowledge of web development. Contact me via the form for further discussion! 📩",
  'where did you study programming or computer science': "I studied computer science at [Your University], and later honed my web development skills through online courses and self-study. Want to know more? Use the contact form! 📩",
  'what resources do you use to enhance your knowledge': "I follow blogs like CSS-Tricks, Smashing Magazine, and regularly watch conference talks on YouTube to stay updated. Want recommendations? Fill out the contact form! 📩",

  // **Random Fun Questions / Qiziqarli Savollar**
  'do you like coffee': "I don't drink coffee, but I know it’s a developer’s fuel! ☕️ Want to share your coffee preferences? Fill out the contact form! 📩",
  'what is your favorite food': "If I could eat, I’d probably go for pizza 🍕 or sushi 🍣. What's your favorite? Contact me through the form! 📩",
  'are you a morning person': "I’m always available, so whether it’s morning or night, I’m here to help! 🌅🌙 Want to chat more? Use the contact form! 📩",
  'what is your favorite color': "If I had a favorite color, it would be blue 💙, just like the sky on a clear day! What’s your favorite? Reach out through the contact form! 📩",
  'do you like music': "I don't have ears, but I know music is great! What kind of music do you like? 🎶 Contact me via the form to discuss! 📩",

  // **FAQ**
  'where can I find your FAQ': "You can check out the FAQ section right here on the site for more information. 📚 Want further help? Use the contact form! 📩",
  'what are the most common questions people ask': "People usually ask about my background, skills, and how to contact me. 😊 Want to ask something specific? Fill out the form! 📩",
  'is this chat bot available in other languages': "Yes, I can communicate in multiple languages, including Uzbek, English, and Russian! 🌍 Want to chat? Use the contact form! 📩",

  // **Help Requests / Yordam Savollari**
  'help me with vue.js': "I'd be happy to help! What specifically would you like to know about Vue.js? Or fill out the form for further assistance! 📩",
  'how can I improve my web development skills': "Practice is key! Build projects, read documentation, and keep learning from online resources. You can also take courses on platforms like freeCodeCamp or Udemy. Need further guidance? Fill out the contact form! 📩",
  'how do I start learning programming': "Start with the basics: HTML, CSS, and JavaScript. Then, build small projects and move on to more advanced topics like frameworks and databases. 😄 Want more help? Fill out the form! 📩",
  'can you help me debug my code': "Sure! Share the code you're working on, and I’ll do my best to help you debug it. 🐛 Use the contact form if you need a more detailed review! 📩"
};



const sendMessage = () => {
  const question = input.value.trim()
  if (!question) return

  messages.value.push({ from: 'user', text: question })
  input.value = ''
  loading.value = true

  setTimeout(() => {
    const key = Object.keys(replies).find(k => question.toLowerCase().includes(k))
    const reply = key ? replies[key] : "Hmm... I don't have an answer for that yet 🤖"
    messages.value.push({ from: 'bot', text: reply })
    loading.value = false
  }, 1000)
}
</script>

<style scoped>
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
