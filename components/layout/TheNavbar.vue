<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-bracket">[</span>
        <span class="logo-text">ZM</span>
        <span class="logo-bracket">]</span>
        <span class="logo-cursor">_</span>
      </router-link>
      
      <button class="mobile-toggle" @click="isOpen = !isOpen" :class="{ active: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="nav-links" :class="{ open: isOpen }">
        <li v-for="link in links" :key="link.path">
          <router-link 
            :to="link.path" 
            class="nav-link"
            @click="isOpen = false"
          >
            <span class="nav-prefix">~/</span>{{ link.name }}
          </router-link>
        </li>
        <li>
          <a 
            href="https://github.com/itxDeeni" 
            target="_blank" 
            rel="noopener" 
            class="nav-link nav-github"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' }
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-green);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-bracket {
  color: var(--text-secondary);
}

.logo-text {
  color: var(--accent-green);
}

.logo-cursor {
  animation: blink 1s infinite;
  color: var(--accent-green);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 4px;
}

.nav-prefix {
  color: var(--accent-cyan);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.nav-link:hover {
  color: var(--accent-green);
}

.nav-link:hover .nav-prefix {
  opacity: 1;
}

.nav-link.router-link-active {
  color: var(--accent-green);
  background: rgba(0, 255, 65, 0.1);
}

.nav-link.router-link-active .nav-prefix {
  opacity: 1;
}

.nav-github {
  display: flex;
  align-items: center;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.mobile-toggle span {
  width: 24px;
  height: 2px;
  background: var(--accent-green);
  transition: all var(--transition-fast);
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
    border-bottom: 1px solid var(--border-color);
  }
  
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: var(--spacing-md);
    width: 100%;
    text-align: center;
  }
}
</style>
