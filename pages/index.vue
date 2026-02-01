<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="terminal-wrapper">
            <LazyCommonTerminal title="zahradeen@portfolio:~">
              <div class="terminal-intro">
                <div class="command-line">
                  <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">whoami</span>
                </div>
                <div class="output">
                  <h1 class="name">
                    <LazyCommonGlitchText text="Zahradeen Muazu" tag="span" />
                  </h1>
                  <h2 class="title">Backend Engineer</h2>
                  <p class="bio">
                    Building <span class="highlight">scalable</span>, <span class="highlight">secure</span> systems in fintech.
                  </p>
                  <p class="stack-line">
                    <span class="label">Stack:</span> [Go, Java, Python, TypeScript, Docker]
                  </p>
                </div>
                
                <div class="command-line mt-lg">
                  <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">./show-work.sh --featured</span>
                </div>
                <div class="output">
                  <div class="cta-group">
                    <NuxtLink to="/projects" class="btn btn-primary">
                      View Projects
                    </NuxtLink>
                    <NuxtLink to="/contact" class="btn">
                      Contact Me
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </LazyCommonTerminal>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h3>
            <span class="prompt">➜</span> Featured Projects
          </h3>
          <div class="divider"></div>
        </div>
        
        <div class="projects-grid grid grid-2">
          <div v-for="project in featured" :key="project.id" class="project-card-wrapper">
             <div class="card project-card">
               <div class="card-header">
                 <h4 class="project-title">{{ project.title }}</h4>
                 <span class="project-type">{{ project.type }}</span>
               </div>
               <p class="project-desc">{{ project.description }}</p>
               <div class="project-tags">
                 <span v-for="tag in project.tags.slice(0, 4)" :key="tag" class="tag">{{ tag }}</span>
               </div>
               <div class="card-actions">
                 <NuxtLink :to="'/projects/' + project.id" class="btn-text">
                   Details
                 </NuxtLink>
                 <a v-if="project.github" :href="project.github" target="_blank" class="btn-text">
                   GitHub
                 </a>
               </div>
             </div>
          </div>
        </div>
        
        <div class="view-all-wrapper">
          <NuxtLink to="/projects" class="view-all-link">
            // View all projects
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import projectsData from '~/content/projects.json'

const featured = computed(() => projectsData.featured.slice(0, 4))
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.terminal-wrapper {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.command-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-mono);
}

.prompt {
  color: var(--accent-green);
  font-weight: bold;
}

.directory {
  color: var(--accent-cyan);
  font-weight: bold;
}

.command {
  color: var(--text-primary);
}

.output {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-md);
  border-left: 2px solid var(--border-color);
}

.name {
  font-size: 3rem;
  margin-bottom: var(--spacing-xs);
  color: var(--accent-green);
}

.title {
  font-size: 1.5rem;
  color: var(--accent-cyan);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-mono);
}

.bio {
  font-size: 1.1rem;
  max-width: 600px;
  color: var(--text-secondary);
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.stack-line {
  margin-top: var(--spacing-md);
  font-family: var(--font-mono);
  color: var(--accent-amber);
}

.cta-group {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.divider {
  flex: 1;
  height: 1px;
  background: var(--border-color);
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
}

.project-title {
  font-size: 1.2rem;
  color: var(--accent-green);
}

.project-type {
  font-size: 0.8rem;
  color: var(--accent-cyan);
  font-family: var(--font-mono);
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-md);
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.card-actions {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
}

.btn-text {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.btn-text:hover {
  color: var(--accent-green);
}

.view-all-wrapper {
  margin-top: var(--spacing-xl);
  text-align: center;
}

.view-all-link {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 1.1rem;
}

.view-all-link:hover {
  color: var(--accent-green);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .name {
    font-size: 2rem;
  }
  
  .title {
    font-size: 1.2rem;
  }
}
</style>
