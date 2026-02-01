<template>
  <div class="about-view">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h1 class="page-title">
            <span class="prompt">➜</span> About Me
          </h1>
          
          <div class="bio-section">
            <p class="lead">{{ profile.bio }}</p>
            
            <div class="stats-grid">
              <div v-for="stat in profile.stats" :key="stat.label" class="stat-item">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
          
          <div class="experience-section mt-xl">
            <h3>Experience</h3>
            <div class="timeline">
              <div v-for="(exp, index) in experience" :key="index" class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <span class="period">{{ exp.period }}</span>
                  <h4 class="role">{{ exp.title }}</h4>
                  <div class="company">{{ exp.company }} — {{ exp.location }}</div>
                  <ul class="highlights">
                    <li v-for="(item, i) in exp.highlights" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="certifications-section mt-xl">
             <h3>Certifications</h3>
             <ul class="cert-list">
               <li v-for="cert in certifications" :key="cert.name" class="cert-item">
                 <span class="check">✓</span>
                 <span class="cert-name">{{ cert.name }}</span>
                 <span class="cert-provider">// {{ cert.provider }}</span>
               </li>
             </ul>
          </div>
          
          <div class="hobbies-section mt-xl">
             <h3>When I'm Not Coding</h3>
             <div class="hobbies-grid">
               <div v-for="hobby in profile.hobbies" :key="hobby" class="hobby-item">
                 <span class="hobby-icon">▸</span>
                 <span class="hobby-name">{{ hobby }}</span>
               </div>
             </div>
          </div>
        </div>
        
        <div class="sidebar">
          <div class="sticky-sidebar">
             <LazyCommonTerminal title="skills.json">
               <div class="skills-container">
                 <div v-for="(category, key) in skills" :key="key" class="skill-category">
                   <div class="skill-header">
                     <span class="skill-icon">{{ category.icon }}</span>
                     <span class="skill-title">{{ category.title }}</span>
                   </div>
                   <div class="skill-bars">
                     <div v-for="item in category.items" :key="item.name" class="skill-item">
                       <div class="skill-info">
                         <span class="skill-name">{{ item.name }}</span>
                         <span class="skill-level">{{ item.level }}%</span>
                       </div>
                       <div class="progress-bar">
                         <div class="progress-fill" :style="{ width: item.level + '%' }"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </LazyCommonTerminal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile, experience, certifications } from '~/data/profile'
import { skills } from '~/data/skills'
</script>

<style scoped>
.about-view {
  padding-top: var(--spacing-3xl);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-2xl);
}

.page-title {
  margin-bottom: var(--spacing-xl);
}

.prompt {
  color: var(--accent-green);
}

.lead {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.stat-item {
  background: var(--bg-card);
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-green);
  font-family: var(--font-mono);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline {
  margin-top: var(--spacing-lg);
  position: relative;
  padding-left: 20px;
  border-left: 1px solid var(--border-color);
}

.timeline-item {
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: -24px;
  top: 6px;
  width: 9px;
  height: 9px;
  background: var(--accent-green);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-green);
}

.period {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 0.85rem;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.role {
  color: var(--text-primary);
  margin-bottom: 2px;
}

.company {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.95rem;
}

.highlights {
  list-style-type: none;
  color: var(--text-muted);
}

.highlights li {
  margin-bottom: var(--spacing-sm);
  position: relative;
  padding-left: 1rem;
}

.highlights li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--accent-green);
}

.cert-list {
  list-style: none;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px dashed var(--border-color);
}

.check {
  color: var(--accent-green);
}

.cert-provider {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  margin-left: auto;
}

/* Skills Sidebar */
.sticky-sidebar {
  position: sticky;
  top: 100px;
}

.skill-category {
  margin-bottom: var(--spacing-lg);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--accent-cyan);
}

.skill-item {
  margin-bottom: var(--spacing-sm);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 2px;
}

.skill-level {
  color: var(--accent-green);
}

.progress-bar {
  height: 4px;
  background: var(--bg-secondary);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--accent-green);
  opacity: 0.8;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.hobby-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.hobby-item:hover {
  border-color: var(--accent-green);
  background: rgba(0, 255, 65, 0.1);
  transform: translateX(4px);
}

.hobby-icon {
  color: var(--accent-green);
  font-size: 0.8rem;
}

.hobby-name {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
