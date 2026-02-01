<template>
  <span class="typing-effect">
    {{ displayText }}<span class="cursor" :class="{ 'blinking': isFinished }">▊</span>
  </span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 50
  },
  startDelay: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['finished'])

const displayText = ref('')
const isFinished = ref(false)

const typeText = async () => {
  displayText.value = ''
  isFinished.value = false
  
  if (props.startDelay > 0) {
    await new Promise(resolve => setTimeout(resolve, props.startDelay))
  }
  
  for (let i = 0; i < props.text.length; i++) {
    displayText.value += props.text.charAt(i)
    await new Promise(resolve => setTimeout(resolve, props.speed))
  }
  
  isFinished.value = true
  emit('finished')
}

onMounted(() => {
  typeText()
})

watch(() => props.text, () => {
  typeText()
})
</script>

<style scoped>
.cursor {
  color: var(--accent-green);
  margin-left: 2px;
  opacity: 1;
}

.cursor.blinking {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
