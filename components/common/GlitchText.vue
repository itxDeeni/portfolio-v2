<template>
  <div class="glitch-wrapper">
    <component 
      :is="tag" 
      class="glitch" 
      :data-text="text"
      :class="{ 'paused': !active }"
    >
      {{ text }}
    </component>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'div'
  },
  active: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.glitch-wrapper {
  display: inline-block;
}

.glitch {
  position: relative;
  color: var(--text-primary);
  display: inline-block; 
}

/* Glitch animation is defined in main.css global styles */
.glitch.paused {
  animation: none;
}
.glitch.paused::before,
.glitch.paused::after {
  content: none;
  animation: none;
}
</style>
