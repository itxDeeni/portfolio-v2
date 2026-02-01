<template>
  <div class="blog-post-view">
    <div class="container">
      <ContentDoc v-slot="{ doc }">
        <article class="article">
          <header class="article-header">
            <div class="back-link-wrapper">
              <NuxtLink to="/blog" class="back-link">
                <span class="prompt">➜</span> cd ..
              </NuxtLink>
            </div>
            
            <h1 class="article-title">{{ doc.title }}</h1>
            
            <div class="article-meta">
              <span v-if="doc.date" class="date">{{ formatDate(doc.date) }}</span>
              <span class="separator">//</span>
              <div class="tags">
                <span v-for="tag in doc.tags" :key="tag" class="tag">#{{ tag }}</span>
              </div>
            </div>
          </header>
          
          <div class="article-content">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
const formatDate = (dateString) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch (e) {
    return dateString
  }
}
</script>

<style scoped>
.blog-post-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
}

.back-link-wrapper {
  margin-bottom: var(--spacing-lg);
}

.back-link {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 0.9rem;
}

.back-link:hover {
  color: var(--accent-green);
  text-decoration: underline;
}

.article-header {
  margin-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-lg);
}

.article-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  line-height: 1.2;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.separator {
  color: var(--border-color);
}

.tags {
  display: flex;
  gap: var(--spacing-sm);
}

.tag {
  color: var(--accent-cyan);
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-primary);
  max-width: 800px;
}

/* Nuxt Content Styles */
:deep(.article-content h2) {
  font-size: 1.8rem;
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
  color: var(--accent-green);
}

:deep(.article-content h3) {
  font-size: 1.4rem;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  color: var(--accent-cyan);
}

:deep(.article-content p) {
  margin-bottom: var(--spacing-md);
}

:deep(.article-content ul), :deep(.article-content ol) {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
}

:deep(.article-content li) {
  margin-bottom: var(--spacing-sm);
}

:deep(.article-content code) {
  color: var(--accent-amber);
  background: rgba(255, 165, 0, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

:deep(.article-content pre) {
  background: var(--bg-terminal);
  padding: var(--spacing-md);
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  margin-bottom: var(--spacing-lg);
}

:deep(.article-content pre code) {
  color: inherit;
  background: transparent;
  padding: 0;
}

:deep(.article-content a) {
  color: var(--accent-cyan);
  text-decoration: underline;
}

:deep(.article-content blockquote) {
  border-left: 4px solid var(--accent-cyan);
  padding-left: var(--spacing-md);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }
}
</style>
