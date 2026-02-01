<template>
  <div class="terminal-window" :class="{ 'minimized': isMinimized }">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control red" @click="$emit('close')"></span>
        <span class="control yellow" @click="isMinimized = !isMinimized"></span>
        <span class="control green" @click="$emit('maximize')"></span>
      </div>
      <div class="terminal-title">{{ title || 'zahradeen@portfolio:~' }}</div>
    </div>
    <div class="terminal-body" v-show="!isMinimized">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const isMinimized = ref(false)
</script>

<style scoped>
.terminal-window {
  background: rgba(12, 12, 12, 0.95);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
}

.terminal-header {
  background: var(--bg-secondary);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.control.red { background: #ff5f56; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #27c93f; }

.terminal-title {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
  pointer-events: none;
}

.terminal-body {
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  overflow-y: auto;
  max-height: 600px;
}
</style>
