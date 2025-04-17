<template>
  <div class="relative w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <!-- Green blur effect on complete -->
    <div v-if="verified" class="absolute inset-0 bg-green-400 blur-xl opacity-60 transition-all duration-300 z-0"></div>

    <!-- Blur trail -->
    <div v-if="dragging" :style="{ left: `0px`, width: `${handleLeft + handleWidth / 2}px` }"
         class="absolute h-full bg-blue-400/70 blur-md z-0 transition-all"></div>

    <!-- Swipe handle -->
    <div ref="handle"
         class="absolute top-0 z-10 w-10 h-full flex items-center justify-center cursor-pointer rounded-full"
         :class="['transition-all duration-300', { 'animate-bounce': !verified }]"
         :style="{ left: `${handleLeft}px`, backgroundColor: verified ? '#4ade80' : '#3b82f6' }"
         @mousedown="startDrag"
         @touchstart="startDrag">
      <svg viewBox="20 20 0 00" fill="white" class="w-5 h-5 transform -rotate-90">
        <path d="M10 0L0 20H20L10 0Z" />
      </svg>
    </div>

    <!-- Label text -->
    <div class="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-white pointer-events-none z-0">
      <span v-if="!verified">Swipe to verify</span>
      <span v-else>VERIFIED</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const handle = ref(null)
const dragging = ref(false)
const verified = ref(false)
const handleLeft = ref(0)
const handleWidth = 41

let containerWidth = 0
let startX = 0

const emit = defineEmits(['verified'])

const startDrag = (e) => {
  if (verified.value) return
  dragging.value = true
  startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('touchmove', onDrag)
  window.addEventListener('mouseup', endDrag)
  window.addEventListener('touchend', endDrag)
}

const onDrag = (e) => {
  if (!dragging.value) return
  const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
  const diff = currentX - startX
  handleLeft.value = Math.min(Math.max(0, diff), containerWidth - handleWidth)
}

const endDrag = () => {
  dragging.value = false
  if (handleLeft.value >= containerWidth - handleWidth - 5) {
    verified.value = true
    emit('verified')
    handleLeft.value = containerWidth - handleWidth
  } else {
    handleLeft.value = 0
  }
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('mouseup', endDrag)
  window.removeEventListener('touchend', endDrag)
}

const resetHandle = () => {
  handleLeft.value = 0 // Reset handle position smoothly
}

onMounted(() => {
  containerWidth = handle.value.parentElement.offsetWidth
})
</script>

<style scoped>
@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* Slight shift */
  }
  100% {
    transform: translateX(0);
  }
}

.animate-bounce {
  animation: bounce 1.4s infinite;
}
</style>
