<template>
  <div class="services-view">
    <div class="container">
      <div class="services-grid">
        <div class="services-content">
          <h1 class="page-title command-line">
            <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">./execute --make-money</span>
          </h1>
          
          <p class="lead">
            Most dev agencies take 6 months and blow your budget. I ship production-ready products in 4 months — flat rate, fixed scope, no surprises. Fintech-grade backends, reactive frontends, and infrastructure that actually scales.
          </p>
          
          <div class="service-block card mt-xl">
            <div class="service-header">
              <h3><span class="bracket">[</span>01<span class="bracket">]</span> From Idea to Launch</h3>
              <span class="service-tag">Launch</span>
            </div>
            <p class="service-desc">
              From database schema to deployment pipeline — I architect and build the entire product. Auth, payments, core workflows, responsive UI. You focus on your users. I handle the engineering.
            </p>
            <div class="tech-stack">
              <span class="label">Stack:</span> [Go, Java, Node.js, Vue, Nuxt, PostgreSQL]
            </div>
            <div class="service-action">
              <NuxtLink to="/mvp" class="btn btn-primary">
                <span class="prompt">➜</span> ./initiate-project
              </NuxtLink>
            </div>
          </div>

          <div class="service-block card mt-lg">
            <div class="service-header">
              <h3><span class="bracket">[</span>02<span class="bracket">]</span> Fix & Scale</h3>
              <span class="service-tag">Fix</span>
            </div>
            <p class="service-desc">
              Your app is live but something's breaking. Slow queries, crashing endpoints, spaghetti auth logic. I come in, diagnose the root cause, and ship the fix — not a band-aid.
            </p>
            <div class="service-action">
              <NuxtLink to="/mvp" class="btn btn-outline">
                <span class="prompt">➜</span> ./get-help
              </NuxtLink>
            </div>
          </div>

          <div class="service-block card mt-lg">
            <div class="service-header">
              <h3><span class="bracket">[</span>03<span class="bracket">]</span> Security Audit & Teardown</h3>
              <span class="service-tag highlight">Secure</span>
            </div>
            <p class="service-desc">
              I treat your codebase like an attacker would. IDOR checks, broken access control, business logic abuse, API misconfigurations — the vulnerabilities that automated scanners miss but hackers don't.
            </p>
            <ul class="deliverables">
               <li><span class="prompt">></span> Actionable vulnerability report with severity ratings</li>
               <li><span class="prompt">></span> Architecture hardening roadmap</li>
            </ul>
            <div class="service-action">
              <NuxtLink to="/audit" class="btn btn-primary">
                <span class="prompt">➜</span> ./book-audit
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <div class="sidebar">
          <div class="sticky-sidebar">
             <LazyCommonTerminal title="why-me.txt">
               <div class="terminal-content">
                  <ul class="feature-list">
                    <li>Engineered fintech systems processing real loan decisions</li>
                    <li>Built credit scoring engines and risk analysis pipelines</li>
                    <li>Bug bounty hunter — found IDORs, broken auth, and API flaws in production apps</li>
                    <li>Fullstack across Vue, Node.js, Go, and Java</li>
                    <li>Every line of code is written for performance, scale, and security</li>
                  </ul>
               </div>
             </LazyCommonTerminal>
             
             <LazyCommonTerminal title="./run case-study --idor" class="terminal-mt">
               <div class="terminal-content">
                  <ul class="feature-list">
                    <li>Found an IDOR that leaked user PII through a predictable API endpoint</li>
                    <li>Uncovered broken access control allowing horizontal privilege escalation</li>
                    <li>Tested production apps for business logic abuse and authorization bypass</li>
                  </ul>
               </div>
             </LazyCommonTerminal>

             <div class="call-cta mt-lg">
                <a href="https://calendly.com/deeny7274/30min" target="_blank" rel="noopener" class="btn btn-call block-btn">
                  <span class="prompt">➜</span> ./book-free-call
                </a>
                <p class="call-hint">30-min intro call • No commitment</p>
             </div>

             <div class="scarcity-card mt-lg">
                <p class="scarcity-text">// Timezone-proof workflow. Async updates, Loom walkthroughs, and clear milestones — no meetings unless you want them.</p>
                <p class="scarcity-text highlight-text">// Limited to 2–3 engagements per month. First come, first served.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Services | Zahradeen Muazu — Fullstack Engineer & Security Consultant',
  meta: [
    { name: 'description', content: 'Ship your MVP in 4 months. Fix broken systems. Audit your security. Premium fullstack engineering and security consulting by Zahradeen Muazu.' }
  ]
})
</script>

<style scoped>
.services-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  min-height: 100vh;
}

.services-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-2xl);
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

.bracket {
  color: var(--accent-cyan);
}

.lead {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  border-left: 2px solid var(--accent-cyan);
  padding-left: var(--spacing-md);
}

.service-block {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 65, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-radius: 8px;
}

.service-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 255, 65, 0.08);
  border-color: rgba(0, 255, 65, 0.3);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: var(--spacing-sm);
}

.service-header h3 {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 1.3rem;
}

.service-tag {
  font-family: var(--font-mono);
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-cyan);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.service-tag.highlight {
  background: rgba(255, 51, 102, 0.1);
  color: #ff3366;
}

.service-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.tech-stack {
  font-family: var(--font-mono);
  color: var(--accent-amber);
  margin-bottom: var(--spacing-md);
  font-size: 0.9rem;
}

.tech-stack .label {
  color: var(--text-primary);
}

.deliverables {
  list-style: none;
  margin-bottom: var(--spacing-md);
}

.deliverables li {
  margin-bottom: var(--spacing-xs);
  color: var(--text-muted);
}

.service-action {
  margin-top: auto;
  padding-top: var(--spacing-md);
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
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

.sticky-sidebar {
  position: sticky;
  top: 100px;
}

.terminal-content {
  padding: var(--spacing-sm) 0;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  margin-bottom: var(--spacing-sm);
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
  padding-left: 1.2rem;
  position: relative;
}

.feature-list li::before {
  content: '-';
  position: absolute;
  left: 0;
  color: var(--accent-cyan);
}

.terminal-mt {
  margin-top: var(--spacing-lg);
}

.scarcity-card {
  background: rgba(255, 193, 7, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px dashed var(--accent-amber);
  padding: var(--spacing-md);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.scarcity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.1);
}

.scarcity-text {
  font-family: var(--font-mono);
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

.highlight-text {
  color: var(--accent-amber);
  margin-top: var(--spacing-sm);
}

.call-cta {
  text-align: center;
}

.btn-call {
  font-family: var(--font-mono);
  background: transparent;
  border: 1px solid var(--accent-cyan);
  color: var(--accent-cyan);
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  margin-bottom: var(--spacing-xs);
}

.btn-call:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}

.block-btn {
  width: 100%;
  text-align: center;
}

.call-hint {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: var(--spacing-xs);
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .command-line {
    font-size: 1.5rem;
  }
  
  .service-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
