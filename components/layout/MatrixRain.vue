<template>
  <canvas ref="canvas" class="matrix-rain"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationId = null

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  
  const resize = () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  }
  
  resize()
  window.addEventListener('resize', resize)
  
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/*-+='
  const charArray = chars.split('')
  
  const fontSize = 14
  const columns = Math.floor(canvas.value.width / fontSize)
  
  const drops = []
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100
  }
  
  const draw = () => {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    
    ctx.fillStyle = '#00ff41'
    ctx.font = `${fontSize}px JetBrains Mono, monospace`
    
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)]
      const x = i * fontSize
      const y = drops[i] * fontSize
      
      // Varying brightness for depth effect
      const brightness = Math.random()
      if (brightness > 0.98) {
        ctx.fillStyle = '#ffffff'
      } else if (brightness > 0.9) {
        ctx.fillStyle = '#00ff41'
      } else {
        ctx.fillStyle = 'rgba(0, 255, 65, 0.5)'
      }
      
      ctx.fillText(char, x, y)
      
      if (y > canvas.value.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      
      drops[i]++
    }
    
    animationId = requestAnimationFrame(draw)
  }
  
  draw()
  
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<style scoped>
.matrix-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}
</style>
