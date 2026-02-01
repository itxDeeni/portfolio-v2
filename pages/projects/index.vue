<template>
  <div class="projects-view">
    <div class="container">
      <header class="page-header">
        <h1>Projects</h1>
        <p class="lead">Open source tools, APIs, and experiments.</p>
      </header>
      
      <div class="filters">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          class="filter-btn"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </div>

      <div class="projects-grid grid grid-3">
        <div v-for="project in filteredProjects" :key="project.name || project.id" class="project-wrapper">
          <div class="card project-card">
            <div class="card-header">
              <h3 class="project-title">{{ project.title || project.name }}</h3>
              <div class="project-icons">
                 <span v-if="project.favorite || project.featured" class="icon-star">★</span>
              </div>
            </div>
            
            <p class="project-desc">{{ project.description }}</p>
            
            <div class="project-tech">
              <span v-for="tag in project.tags" :key="tag" class="tag" :class="getTagClass(tag)">
                {{ tag }}
              </span>
            </div>
            
            <div class="card-footer">
              <NuxtLink v-if="project.id" :to="'/projects/' + project.id" class="link-details">
                ./details
              </NuxtLink>
              <span v-else></span>
              
              <a v-if="project.github" :href="project.github" target="_blank" class="link-github">
                <span class="icon-gh">gh</span>source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import projectsData from '~/content/projects.json'

const activeCategory = ref('all')

// Flatten all projects into one list with categories
const allProjects = [
    ...projectsData.featured,
    ...projectsData.github.security.map(p => ({ ...p, category: 'security' })),
    ...projectsData.github.backend.map(p => ({ ...p, category: 'backend' })),
    ...projectsData.github.fullstack.map(p => ({ ...p, category: 'fullstack' })),
    ...projectsData.github.other.map(p => ({ ...p, category: 'other' }))
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'security', name: 'Security' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Fullstack' },
  { id: 'other', name: 'Misc' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return allProjects
  }
  return allProjects.filter(p => p.category === activeCategory.value)
})

const getTagClass = (tag) => {
  const lower = tag.toLowerCase()
  if (['go', 'java', 'python'].includes(lower)) return 'tag-cyan'
  if (['vue.js', 'react', 'javascript'].includes(lower)) return 'tag-green'
  return ''
}
</script>

<style scoped>
.projects-view {
  padding-top: var(--spacing-3xl);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.page-header h1 {
  margin-bottom: var(--spacing-sm);
}

.lead {
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.filters {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-mono);
  transition: all var(--transition-fast);
}

.filter-btn:hover, .filter-btn.active {
  border-color: var(--accent-green);
  color: var(--accent-green);
  box-shadow: var(--shadow-glow);
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.project-title {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.icon-star {
  color: var(--accent-amber);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--spacing-lg);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.link-details {
  color: var(--accent-cyan);
}

.link-github {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);
}

.link-github:hover {
  color: var(--text-primary);
}

.icon-gh {
  font-weight: bold;
}
</style>
