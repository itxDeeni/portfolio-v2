<template>
  <div class="audit-view">
    <div class="container audit-container">
      <div class="back-nav">
        <NuxtLink to="/services" class="back-link">
           <span class="prompt">➜</span> cd ..
        </NuxtLink>
      </div>

      <h1 class="page-title command-line mt-lg">
        <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">./execute --security-audit</span>
      </h1>
      
      <p class="lead">
        Identify vulnerabilities in your frontend, backend, and business logic before attackers do. 
        A rigorous teardown of your architecture and authorization flows.
      </p>

      <div class="pricing-grid mt-2xl">
        <div class="pricing-card card">
          <div class="card-header">
            <h3>API Audit</h3>
            <div class="price">$1,500</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> API endpoint testing</li>
              <li><span class="prompt">></span> Auth & access control validation</li>
              <li><span class="prompt">></span> IDOR & data exposure checks</li>
              <li><span class="prompt">></span> Report + fix recommendations</li>
            </ul>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> ./book-api-audit
            </a>
          </div>
        </div>

        <div class="pricing-card card highlight-card">
          <div class="card-header">
            <h3>Full System Audit</h3>
            <div class="price">$3,500</div>
            <div class="badge">RECOMMENDED</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> Frontend + backend code review</li>
              <li><span class="prompt">></span> Business logic analysis</li>
              <li><span class="prompt">></span> Security vulnerabilities search</li>
              <li><span class="prompt">></span> Architecture & scaling insights</li>
              <li><span class="prompt">></span> Infrastructure misconfiguration check</li>
            </ul>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary block-btn">
              <span class="prompt">➜</span> ./book-full-audit
            </a>
          </div>
        </div>
      </div>

      <div class="guarantee-section mt-2xl">
         <LazyCommonTerminal title="guarantee.md">
            <div class="terminal-content">
               <p class="highlight-text">// ZERO-RISK GUARANTEE</p>
               <p class="muted-text">If no critical issues are found, the audit scope will be extended at no additional cost until areas for optimization or hardening are identified.</p>
            </div>
         </LazyCommonTerminal>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Security Audit | Zahradeen Muazu',
  meta: [
    { name: 'description', content: 'Book a fullstack security audit or API teardown to find vulnerabilities before attackers do.' }
  ]
})
</script>

<style scoped>
.audit-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  min-height: 100vh;
}

.audit-container {
  max-width: 900px;
  margin: 0 auto;
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

.command-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--spacing-xl);
  font-family: var(--font-mono);
  font-size: 2rem;
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

.lead {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  border-left: 2px solid var(--accent-cyan);
  padding-left: var(--spacing-md);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.pricing-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xl);
  border: 1px solid rgba(0, 255, 65, 0.1);
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 255, 65, 0.1);
  border-color: rgba(0, 255, 65, 0.3);
}

.highlight-card {
  border-color: var(--accent-green);
  box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
  position: relative;
}

.highlight-card:hover {
  box-shadow: 0 15px 40px rgba(0, 255, 65, 0.25);
}

.card-header {
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  text-align: center;
  position: relative;
}

.card-header h3 {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-xs);
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent-green);
  font-family: var(--font-mono);
}

.badge {
  position: absolute;
  top: -30px;
  right: -10px;
  background: var(--accent-green);
  color: var(--bg-dark);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
}

.card-body {
  flex-grow: 1;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.card-footer {
  margin-top: var(--spacing-xl);
  display: flex;
  justify-content: center;
}

.block-btn {
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;
}

.block-btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
}

.btn-primary:hover {
  box-shadow: 0 0 25px rgba(0, 255, 65, 0.4);
}

.btn .prompt {
  margin-right: 8px;
}

.btn-primary:hover .prompt {
  color: var(--bg-dark);
}

.guarantee-section {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.terminal-content {
  padding: var(--spacing-md) 0;
  text-align: center;
}

.highlight-text {
  color: var(--accent-amber);
  font-family: var(--font-mono);
  font-weight: bold;
  margin-bottom: var(--spacing-sm);
}

.muted-text {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .command-line {
    font-size: 1.5rem;
  }
}
</style>
