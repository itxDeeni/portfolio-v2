<template>
  <div class="businesses-view">
    <div class="container">
      <!-- Hero -->
      <h1 class="page-title command-line">
        <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">./deploy --business-website</span>
      </h1>

      <p class="lead">
        Your Instagram looks great. Your business deserves better. I build fast, premium
        websites that turn visitors into <span class="highlight">WhatsApp inquiries, bookings, and orders</span> — not just likes.
        For real estate, restaurants, hotels, clinics, schools, and service businesses — anywhere in the world.
      </p>

      <div class="proof-bar mt-lg">
        <span class="proof-label">Recent builds:</span>
        <a href="https://outputgalaxy.com" target="_blank" rel="noopener" class="proof-link">Output Galaxy — Real Estate, Abuja</a>
        <span class="proof-sep">·</span>
        <span class="proof-link muted">Suya.com.ng — Restaurant, Lafia</span>
      </div>

      <!-- Packages -->
      <div class="pricing-grid mt-2xl">
        <div class="pricing-card card">
          <div class="card-header">
            <h3>Single Page</h3>
            <div class="price">$250</div>
            <div class="price-naira">≈ {{ packages[0].naira.value }}</div>
            <div class="price-sub">1 page · 2 days</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> One beautiful landing page</li>
              <li><span class="prompt">></span> WhatsApp click-to-chat</li>
              <li><span class="prompt">></span> Google Maps + contact info</li>
              <li><span class="prompt">></span> Mobile-first, SEO basics</li>
              <li><span class="prompt">></span> Deployed to your domain</li>
            </ul>
            <p class="best-for">Best for: businesses that just need a clean web presence fast.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=single" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> ./order-single
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card">
          <div class="card-header">
            <h3>Starter</h3>
            <div class="price">$400</div>
            <div class="price-naira">≈ {{ packages[1].naira.value }}</div>
            <div class="price-sub">3 pages · 3 days</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> 3 responsive pages (Home, About, Contact)</li>
              <li><span class="prompt">></span> WhatsApp click-to-chat</li>
              <li><span class="prompt">></span> Google Maps + contact info</li>
              <li><span class="prompt">></span> Mobile-first, SEO basics</li>
              <li><span class="prompt">></span> Deployed to your domain</li>
            </ul>
            <p class="best-for">Best for: new businesses, no website, or broken site.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=starter" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> ./order-starter
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card highlight-card">
          <div class="card-header">
            <h3>Business</h3>
            <div class="price">$900</div>
            <div class="price-naira">≈ {{ packages[2].naira.value }}</div>
            <div class="price-sub">5–8 pages · 5 days</div>
            <div class="badge">MOST POPULAR</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> Everything in Starter, plus:</li>
              <li><span class="prompt">></span> Gallery, services/menu pages</li>
              <li><span class="prompt">></span> Inquiry / booking form</li>
              <li><span class="prompt">></span> Search & filtering (properties, menu)</li>
              <li><span class="prompt">></span> Analytics + sitemap + Open Graph</li>
              <li><span class="prompt">></span> Google Business profile link</li>
            </ul>
            <p class="best-for">Best for: businesses that need to look credible and capture leads.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=business" class="btn btn-primary block-btn">
              <span class="prompt">➜</span> ./order-business
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card">
          <div class="card-header">
            <h3>Premium</h3>
            <div class="price">$1,800</div>
            <div class="price-naira">≈ {{ packages[3].naira.value }}</div>
            <div class="price-sub">8–12 pages · 10 days</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> Everything in Business, plus:</li>
              <li><span class="prompt">></span> Listings / menu CMS (edit without code)</li>
              <li><span class="prompt">></span> Advanced lead routing & automation</li>
              <li><span class="prompt">></span> Performance + SEO optimization</li>
              <li><span class="prompt">></span> Multi-location / multi-language ready</li>
              <li><span class="prompt">></span> CRM / notification integration</li>
            </ul>
            <p class="best-for">Best for: real platforms with inventory or locations.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=premium" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> ./order-premium
            </NuxtLink>
          </div>
        </div>
      </div>

      <p class="pricing-note mt-lg">All packages: 50% deposit to start · Fixed scope · No hourly billing</p>

      <!-- What you get -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> Every site ships with</h2>
        <div class="deliverables-grid">
          <div class="deliverable"><span class="prompt">></span> WhatsApp-first contact — 1-tap inquiries from any page</div>
          <div class="deliverable"><span class="prompt">></span> Mobile-first design — built for phones, not just desktops</div>
          <div class="deliverable"><span class="prompt">></span> SEO + Open Graph + sitemap — found on Google, pretty on share</div>
          <div class="deliverable"><span class="prompt">></span> Fast by default — Next.js/Nuxt, image optimization, static generation</div>
          <div class="deliverable"><span class="prompt">></span> Content you can own — clear data file, no lock-in</div>
          <div class="deliverable"><span class="prompt">></span> Deployment included — domain connection + SSL</div>
        </div>
      </div>

      <!-- Process -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> How it works — 3 to 10 days</h2>
        <div class="process-grid">
          <div class="process-step card">
            <div class="step-num">01</div>
            <h4>Deposit & Brief</h4>
            <p>You pick a package, pay 50%, send logo/photos/content. I confirm scope in writing.</p>
          </div>
          <div class="process-step card">
            <div class="step-num">02</div>
            <h4>Build</h4>
            <p>I build, you get Loom walkthroughs. Two revision rounds included.</p>
          </div>
          <div class="process-step card">
            <div class="step-num">03</div>
            <h4>Launch</h4>
            <p>Domain connected, SSL live, analytics on. You pay balance. I stay for 14-day fix window.</p>
          </div>
        </div>
      </div>

      <!-- Portfolio proof -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> Proof</h2>
        <div class="proof-grid">
          <div class="proof-card card">
            <h4>Output Galaxy — outputgalaxy.com</h4>
            <p class="proof-desc">Premium real-estate platform for Output Galaxy, Abuja. Property listings, search & filtering, inquiry flow, team, investment sections. Next.js 15, Tailwind, deployed.</p>
            <div class="proof-meta"><span class="label">Stack:</span> Next.js · Tailwind · Vercel/Cloudflare</div>
            <a href="https://outputgalaxy.com" target="_blank" rel="noopener" class="proof-cta">Visit live <span class="prompt">→</span></a>
          </div>
          <div class="proof-card card">
            <h4>Suya.com.ng — Restaurant</h4>
            <p class="proof-desc">Premium Suya & grill spot, Lafia. Menu, gallery, WhatsApp ordering, Google Maps, founder story. Nuxt 3.</p>
            <div class="proof-meta"><span class="label">Stack:</span> Nuxt 3 · Vue · Custom CSS</div>
            <span class="proof-cta muted">Live preview on request</span>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> FAQ</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>Do you handle hosting & domain?</h4>
            <p>Yes. I connect your domain, set up SSL, and deploy. Hosting is included in first year for Business/Premium via Vercel/Cloudflare.</p>
          </div>
          <div class="faq-item">
            <h4>What do you need from me?</h4>
            <p>Logo, photos, services/menu list, contact info, and a 30-min brief. I handle copy if you don't have it.</p>
          </div>
          <div class="faq-item">
            <h4>Can you do e-commerce / bookings?</h4>
            <p>WhatsApp ordering and inquiry flows are standard. Full Stripe/Paystack checkout is Premium scope — we scope it in the brief.</p>
          </div>
          <div class="faq-item">
            <h4>What about maintenance?</h4>
            <p>$50–$150/mo: content updates, fixes, hosting, monthly SEO check. Optional, never forced. First 14 days after launch are free.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-section mt-2xl">
        <h2 class="cta-title">Ready to make your business look as good as it is?</h2>
        <p class="cta-sub">Pick a package or just tell me what you do — I'll propose the right scope in 24 hours.</p>
        <div class="cta-actions">
          <NuxtLink to="/mvp?package=business" class="btn btn-primary btn-lg">
            <span class="prompt">➜</span> ./start-business-website
          </NuxtLink>
          <a href="https://calendly.com/deeny7274/30min" target="_blank" rel="noopener" class="btn btn-call">
            <span class="prompt">➜</span> ./book-free-call
          </a>
        </div>
        <p class="call-hint">30-min call · No commitment · 50% deposit to start</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

useHead({
  title: 'Business Websites | Zahradeen Muazu — Websites That Convert',
  meta: [
    { name: 'description', content: 'Premium business websites for real estate, restaurants, hotels, clinics, schools. WhatsApp inquiries, gallery, menu/listings, SEO. From $400. Ships in 3–10 days. Global delivery.' }
  ]
})

const { data: rateData } = await useFetch('https://open.er-api.com/v6/latest/USD', {
  key: 'usd-ngn-rate',
  getCachedData: (key, nuxtApp) => nuxtApp.payload[key] || nuxtApp.static[key],
  transform: (data) => data.rates?.NGN || 1330
})

const rate = computed(() => rateData.value || 1330)
const fmt = (n) => '₦' + n.toLocaleString('en-NG')

const packages = [
  { usd: 250, naira: computed(() => fmt(Math.round(250 * rate.value))) },
  { usd: 400, naira: computed(() => fmt(Math.round(400 * rate.value))) },
  { usd: 900, naira: computed(() => fmt(Math.round(900 * rate.value))) },
  { usd: 1800, naira: computed(() => fmt(Math.round(1800 * rate.value))) }
]
</script>

<style scoped>
.businesses-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  min-height: 100vh;
}
.command-line {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: var(--spacing-xl);
  font-family: var(--font-mono); font-size: 2rem;
}
.prompt { color: var(--accent-green); font-weight: bold; }
.directory { color: var(--accent-cyan); font-weight: bold; }
.command { color: var(--text-primary); }
.bracket { color: var(--accent-cyan); }
.lead {
  font-size: 1.15rem; color: var(--text-secondary); line-height: 1.8;
  margin-bottom: var(--spacing-sm);
  border-left: 2px solid var(--accent-cyan); padding-left: var(--spacing-md);
}
.lead .highlight { color: var(--accent-green); font-weight: 600; }
.proof-bar {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  font-family: var(--font-mono); font-size: 0.85rem;
}
.proof-label { color: var(--text-muted); }
.proof-link { color: var(--accent-cyan); text-decoration: none; }
.proof-link:hover { text-decoration: underline; }
.proof-link.muted { color: var(--text-muted); }
.proof-sep { color: var(--text-muted); }
.pricing-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-xl);
}
.pricing-card {
  display: flex; flex-direction: column;
  padding: var(--spacing-xl);
  border: 1px solid rgba(0, 255, 65, 0.1);
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px); border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.pricing-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,255,65,0.1); border-color: rgba(0,255,65,0.3); }
.highlight-card { border-color: var(--accent-green); box-shadow: 0 0 25px rgba(0,255,65,0.15); position: relative; }
.highlight-card:hover { box-shadow: 0 15px 40px rgba(0,255,65,0.25); }
.card-header { border-bottom: 1px dashed var(--border-color); padding-bottom: var(--spacing-md); margin-bottom: var(--spacing-md); text-align: center; position: relative; }
.card-header h3 { color: var(--text-primary); font-family: var(--font-mono); font-size: 1.3rem; margin-bottom: var(--spacing-xs); }
.price { font-size: 2.5rem; font-weight: bold; color: var(--accent-green); font-family: var(--font-mono); }
.price-naira { font-family: var(--font-mono); font-size: 0.95rem; color: var(--accent-cyan); opacity: 0.8; margin-top: 2px; }
.price-sub { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); }
.badge {
  position: absolute; top: -30px; right: -10px;
  background: var(--accent-green); color: var(--bg-dark);
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: bold;
  padding: 4px 8px; border-radius: 4px;
}
.card-body { flex-grow: 1; }
.feature-list { list-style: none; }
.feature-list li { margin-bottom: var(--spacing-sm); color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; font-size: 0.92rem; line-height: 1.5; }
.best-for { margin-top: var(--spacing-md); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); font-style: italic; border-top: 1px dashed var(--border-color); padding-top: var(--spacing-sm); }
.card-footer { margin-top: var(--spacing-lg); }
.block-btn { width: 100%; text-align: center; }
.pricing-note { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-align: center; }
.section-title { font-family: var(--font-mono); font-size: 1.2rem; color: var(--text-primary); margin-bottom: var(--spacing-lg); }
.deliverables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); }
.deliverable { font-family: var(--font-mono); font-size: 0.88rem; color: var(--text-secondary); background: rgba(10,10,10,0.4); border: 1px solid rgba(0,255,65,0.06); padding: var(--spacing-sm) var(--spacing-md); border-radius: 6px; }
.process-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--spacing-lg); }
.process-step { padding: var(--spacing-lg); text-align: center; border: 1px solid rgba(0,255,65,0.08); background: rgba(10,10,10,0.5); border-radius: 8px; }
.step-num { font-family: var(--font-mono); font-size: 2rem; font-weight: bold; color: var(--accent-cyan); margin-bottom: var(--spacing-sm); }
.process-step h4 { font-family: var(--font-mono); color: var(--text-primary); margin-bottom: var(--spacing-xs); }
.process-step p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
.proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
.proof-card { padding: var(--spacing-lg); border: 1px solid rgba(0,255,65,0.08); background: rgba(10,10,10,0.5); border-radius: 8px; }
.proof-card h4 { font-family: var(--font-mono); color: var(--text-primary); margin-bottom: var(--spacing-sm); }
.proof-desc { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: var(--spacing-sm); }
.proof-meta { font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-amber); margin-bottom: var(--spacing-sm); }
.proof-meta .label { color: var(--text-primary); }
.proof-cta { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); text-decoration: none; }
.proof-cta:hover { text-decoration: underline; }
.proof-cta.muted { color: var(--text-muted); }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
.faq-item { background: rgba(10,10,10,0.4); border: 1px solid rgba(0,255,65,0.06); padding: var(--spacing-md); border-radius: 6px; }
.faq-item h4 { font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-primary); margin-bottom: var(--spacing-xs); }
.faq-item p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; }
.cta-section { text-align: center; background: rgba(0,255,65,0.04); border: 1px solid rgba(0,255,65,0.12); border-radius: 12px; padding: var(--spacing-2xl); }
.cta-title { font-family: var(--font-mono); font-size: 1.4rem; color: var(--text-primary); margin-bottom: var(--spacing-sm); }
.cta-sub { color: var(--text-secondary); margin-bottom: var(--spacing-lg); }
.cta-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
.btn-lg { padding: 12px 28px; font-size: 1.05rem; }
.btn-call {
  font-family: var(--font-mono); background: transparent; border: 1px solid var(--accent-cyan);
  color: var(--accent-cyan); padding: 10px 28px; border-radius: 4px; text-decoration: none; transition: all 0.3s ease;
}
.btn-call:hover { background: rgba(0,212,255,0.1); box-shadow: 0 0 15px rgba(0,212,255,0.2); transform: translateY(-2px); }
.call-hint { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: var(--spacing-sm); }
@media (max-width: 900px) {
  .pricing-grid, .proof-grid, .faq-grid, .process-grid, .deliverables-grid { grid-template-columns: 1fr; }
  .command-line { font-size: 1.5rem; }
}
</style>
