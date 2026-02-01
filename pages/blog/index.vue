<template>
  <div class="blog-view">
    <div class="container">
      <header class="page-header">
        <h1>
          <span class="prompt">➜</span> /var/log/thoughts
        </h1>
        <p class="lead">Insights on backend engineering, security, and fintech.</p>
      </header>
      
      <div class="blog-grid">
         <article v-for="post in posts" :key="post._path" class="blog-post-card">
           <div class="post-meta">
             <span v-if="post.date" class="post-date">{{ formatDate(post.date) }}</span>
             <span v-if="post.readTime" class="post-read-time">{{ post.readTime }} read</span>
           </div>
           
           <NuxtLink :to="post._path" class="post-link">
             <h2 class="post-title">{{ post.title }}</h2>
           </NuxtLink>
           
           <p class="post-excerpt">{{ post.description }}</p>
           
           <div class="post-tags">
             <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
           </div>
           
           <NuxtLink :to="post._path" class="read-more">
             Read Article <span class="arrow">→</span>
           </NuxtLink>
         </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog', () => queryContent('/blog').sort({ date: -1 }).find())

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
.blog-view {
  padding-top: var(--spacing-3xl);
}

.page-header {
  margin-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-xl);
}

.blog-grid {
  display: grid;
  gap: var(--spacing-2xl);
  max-width: 800px;
}

.blog-post-card {
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px dashed var(--border-color);
}

.blog-post-card:last-child {
  border-bottom: none;
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: var(--spacing-sm);
  display: flex;
  gap: var(--spacing-md);
}

.post-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  transition: color var(--transition-fast);
}

.post-link:hover .post-title {
  color: var(--accent-green);
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.post-tags {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.tag {
  color: var(--accent-cyan);
  font-size: 0.85rem;
  font-family: var(--font-mono);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--accent-green);
}

.read-more:hover .arrow {
  transform: translateX(4px);
}

.arrow {
  transition: transform var(--transition-fast);
}
</style>
