<template>
  <div class="project-detail-view" v-if="project">
    <div class="container">
      <div class="back-nav">
        <NuxtLink to="/projects" class="back-link">
           <span class="prompt">➜</span> cd ..
        </NuxtLink>
      </div>

      <header class="project-header">
        <div class="header-content">
          <h1 class="title">{{ project.title }}</h1>
          <div class="type-badge">{{ project.type }}</div>
        </div>
        <div class="actions">
           <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-outline">
             <span class="icon">gh</span> GitHub
           </a>
           <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-primary">
             Live Demo
           </a>
        </div>
      </header>

      <div class="grid grid-3">
        <div class="main-info col-span-2">
          <div class="description-card card">
            <h3>Description</h3>
            <p>{{ project.description }}</p>
          </div>

          <div class="features-card card mt-lg">
            <h3>Key Features</h3>
            <ul class="feature-list">
              <li v-for="feature in project.features" :key="feature">
                <span class="bullet">➜</span> {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebar">
          <div class="tech-card card">
            <h3>Tech Stack</h3>
            <div class="tags">
               <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="not-found container">
     <h1>404 - Project Not Found</h1>
     <NuxtLink to="/projects">Return to Projects</NuxtLink>
  </div>
</template>

<script setup>
import projectsData from '~/content/projects.json'

const route = useRoute()
const projectId = route.params.id

// Combine all projects to search
const allProjects = [
    ...projectsData.featured,
    ...projectsData.github.security,
    ...projectsData.github.backend,
    ...projectsData.github.fullstack,
    ...projectsData.github.other
]

const project = computed(() => {
    return allProjects.find(p => (p.id || p.name) === projectId)
})
</script>

<style scoped>
.project-detail-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
}

.back-nav {
  margin-bottom: var(--spacing-lg);
}

.back-link {
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.back-link:hover {
  color: var(--accent-green);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-lg);
}

.title {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.type-badge {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  background: rgba(0, 212, 255, 0.1);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
}

.actions {
  display: flex;
  gap: var(--spacing-md);
}

.col-span-2 {
  grid-column: span 2;
}

.card h3 {
  color: var(--accent-green);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: 1.1rem;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  margin-bottom: var(--spacing-sm);
  display: flex;
  gap: var(--spacing-sm);
}

.bullet {
  color: var(--accent-green);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-lg);
  }
  
  .col-span-2 {
    grid-column: span 1;
  }
}
</style>
