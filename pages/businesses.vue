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

      <p class="roi-line">
        If your website helps you close just <span class="highlight">one additional customer</span>, could it pay for itself?
      </p>

      <div class="proof-bar mt-lg">
        <span class="proof-label">Recent builds:</span>
        <a href="https://outputgalaxy.com" target="_blank" rel="noopener" class="proof-link">Output Galaxy — Real Estate, Abuja</a>
        <span class="proof-sep">·</span>
        <span class="proof-link muted">Suya.com.ng — Restaurant, Lafia</span>
      </div>

      <!-- Not sure banner -->
      <div class="not-sure-banner mt-2xl">
        <p>
          <strong>Not sure which package you need?</strong>
          Most established businesses choose <span class="highlight">Business Growth</span> because it combines a professional website with the tools needed to attract and convert customers.
        </p>
        <NuxtLink to="/mvp?package=business" class="not-sure-cta">
          <span class="prompt">➜</span> Tell me about your business
        </NuxtLink>
      </div>

      <!-- Packages -->
      <div class="pricing-grid mt-2xl">
        <div class="pricing-card card">
          <div class="card-header">
            <h3>Starter</h3>
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
            <NuxtLink to="/mvp?package=starter" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> Tell me about your business
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card">
          <div class="card-header">
            <h3>Standard</h3>
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
            <NuxtLink to="/mvp?package=standard" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> Tell me about your business
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card highlight-card">
          <div class="card-header">
            <h3>Business Growth</h3>
            <div class="price">$900</div>
            <div class="price-naira">≈ {{ packages[2].naira.value }}</div>
            <div class="price-sub">2–3 weeks delivery</div>
            <div class="badge">BEST VALUE</div>
          </div>
          <div class="card-body">
            <p class="card-tagline">A professional website built to turn visitors into customers.</p>
            <p class="card-audience">For businesses that have outgrown Instagram, WhatsApp, or a basic brochure site.</p>
            <ul class="feature-list">
              <li><span class="check">✓</span> <strong>Get discovered</strong> — Google-ready structure and local SEO</li>
              <li><span class="check">✓</span> <strong>Capture enquiries</strong> — WhatsApp, forms, calls and booking flows</li>
              <li><span class="check">✓</span> <strong>Build trust</strong> — professional design, testimonials, services, portfolio</li>
              <li><span class="check">✓</span> <strong>Measure what works</strong> — analytics and conversion tracking</li>
            </ul>
            <div class="delivery-timeline">
              <div class="timeline-step"><span class="tl-label">Week 1</span> Strategy &amp; content</div>
              <div class="timeline-step"><span class="tl-label">Week 2</span> Design &amp; build</div>
              <div class="timeline-step"><span class="tl-label">Week 3</span> Review &amp; launch</div>
            </div>
            <p class="best-for">Best for: businesses where one new customer covers the cost.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=business" class="btn btn-primary block-btn">
              <span class="prompt">➜</span> Tell me about your business
            </NuxtLink>
          </div>
        </div>

        <div class="pricing-card card">
          <div class="card-header">
            <h3>Premium</h3>
            <div class="price">$1,800</div>
            <div class="price-naira">≈ {{ packages[3].naira.value }}</div>
            <div class="price-sub">4–6 weeks delivery</div>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li><span class="prompt">></span> Everything in Business Growth, plus:</li>
              <li><span class="prompt">></span> Listings / menu CMS (edit without code)</li>
              <li><span class="prompt">></span> Advanced lead routing &amp; automation</li>
              <li><span class="prompt">></span> Performance + SEO optimization</li>
              <li><span class="prompt">></span> Multi-location / multi-language ready</li>
              <li><span class="prompt">></span> CRM / notification integration</li>
            </ul>
            <p class="best-for">Best for: real platforms with inventory or locations.</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/mvp?package=premium" class="btn btn-outline block-btn">
              <span class="prompt">➜</span> Tell me about your business
            </NuxtLink>
          </div>
        </div>
      </div>

      <p class="pricing-note mt-lg">All packages: 50% deposit to start · Fixed scope · No hourly billing</p>

      <!-- Is this for you? -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> Is Business Growth for you?</h2>
        <div class="yesno-grid">
          <div class="yes-card card">
            <h4 class="yes-label">Yes, if:</h4>
            <ul class="yesno-list">
              <li><span class="check">✓</span> Your business already has customers but your online presence doesn't reflect your quality.</li>
              <li><span class="check">✓</span> Most of your leads come through WhatsApp, Instagram or referrals.</li>
              <li><span class="check">✓</span> You want Google to become another way customers discover you.</li>
              <li><span class="check">✓</span> You need more than a simple landing page.</li>
              <li><span class="check">✓</span> A single new customer could cover the cost of the website.</li>
            </ul>
          </div>
          <div class="no-card card">
            <h4 class="no-label">Probably not, if:</h4>
            <ul class="yesno-list">
              <li><span class="prompt">></span> You only need a simple landing page.</li>
              <li><span class="prompt">></span> You're looking for the cheapest possible website.</li>
              <li><span class="prompt">></span> You don't have an established business yet.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- What you get -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> Every site ships with</h2>
        <div class="deliverables-grid">
          <div class="deliverable"><span class="prompt">></span> WhatsApp-first contact — 1-tap inquiries from any page</div>
          <div class="deliverable"><span class="prompt">></span> Mobile-first design — built for phones, not just desktops</div>
          <div class="deliverable"><span class="prompt">></span> SEO + Open Graph + sitemap — found on Google, pretty on share</div>
          <div class="deliverable"><span class="prompt">></span> Fast by default — image optimization, static generation</div>
          <div class="deliverable"><span class="prompt">></span> Content you can own — no lock-in</div>
          <div class="deliverable"><span class="prompt">></span> Deployment included — domain connection + SSL</div>
        </div>
      </div>

      <!-- Case Study -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> Built for Output Galaxy</h2>
        <div class="case-study card">
          <div class="case-grid">
            <div class="case-content">
              <div class="case-block">
                <h4 class="case-label">Challenge</h4>
                <p>Needed a professional property website to showcase available properties and generate enquiries from buyers and investors.</p>
              </div>
              <div class="case-block">
                <h4 class="case-label">Built</h4>
                <p>Custom responsive website with property listings, search &amp; filtering, enquiry flow, WhatsApp integration, team section, and investment pages.</p>
              </div>
              <div class="case-block">
                <h4 class="case-label">Result</h4>
                <p>Visitors can discover available properties and contact the business directly. Professional online presence that matches the quality of the business.</p>
              </div>
              <a href="https://outputgalaxy.com" target="_blank" rel="noopener" class="case-cta">
                <span class="prompt">➜</span> Visit live website
              </a>
            </div>
            <div class="case-meta">
              <div class="meta-item"><span class="meta-label">Client</span> Output Galaxy, Abuja</div>
              <div class="meta-item"><span class="meta-label">Type</span> Real Estate Platform</div>
              <div class="meta-item"><span class="meta-label">Stack</span> Next.js · Tailwind · Cloudflare</div>
              <div class="meta-item"><span class="meta-label">Pages</span> 10+</div>
              <div class="meta-item"><span class="meta-label">Features</span> Listings, Search, Enquiry, WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> How it works</h2>
        <div class="process-grid">
          <div class="process-step card">
            <div class="step-num">01</div>
            <h4>Tell me about your business</h4>
            <p>Free 15-minute call. I'll tell you which package actually makes sense for your business.</p>
          </div>
          <div class="process-step card">
            <div class="step-num">02</div>
            <h4>Deposit &amp; build</h4>
            <p>50% deposit, send logo/photos/content. I build and share Loom walkthroughs. Two revision rounds.</p>
          </div>
          <div class="process-step card">
            <div class="step-num">03</div>
            <h4>Launch &amp; grow</h4>
            <p>Domain connected, SSL live, analytics on. Pay balance. 14-day fix window included.</p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="section mt-2xl">
        <h2 class="section-title"><span class="prompt">#</span> FAQ</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>Do you handle hosting &amp; domain?</h4>
            <p>Yes. I connect your domain, set up SSL, and deploy. Hosting is included in first year for Business Growth/Premium via Vercel/Cloudflare.</p>
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
        <p class="cta-sub">Free 15-minute consultation. I'll tell you which package actually makes sense for your business.</p>
        <div class="cta-actions">
          <NuxtLink to="/mvp?package=business" class="btn btn-primary btn-lg">
            <span class="prompt">➜</span> Tell me about your business
          </NuxtLink>
          <a href="https://calendly.com/deeny7274/30min" target="_blank" rel="noopener" class="btn btn-call">
            <span class="prompt">➜</span> Book a free call
          </a>
        </div>
        <p class="call-hint">15-min call · No commitment · 50% deposit to start</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

useHead({
  title: 'Business Websites | Zahradeen Muazu — Websites That Convert',
  meta: [
    { name: 'description', content: 'Premium business websites for real estate, restaurants, hotels, clinics, schools. WhatsApp inquiries, gallery, menu/listings, SEO. From $250. Ships in 2–6 weeks. Global delivery.' }
  ]
})

const { data: rateData } = await useFetch('https://open.er-api.com/v6/latest/USD', {
  key: 'usd-ngn-rate',
  getCachedData: (key, nuxtApp) => nuxtApp.payload[key] || nuxtApp.static[key],
  transform: (data) => data.rates?.NGN || 1330
})

const rate = computed(() => rateData.value || 1330)
const fmt = (n) => '\u20A6' + n.toLocaleString('en-NG')

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
.roi-line {
  font-family: var(--font-mono); font-size: 1.05rem; color: var(--text-secondary);
  margin-top: var(--spacing-md); padding-left: var(--spacing-md);
  border-left: 2px solid var(--accent-amber);
}
.roi-line .highlight { color: var(--accent-green); font-weight: 600; }
.proof-bar {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  font-family: var(--font-mono); font-size: 0.85rem;
}
.proof-label { color: var(--text-muted); }
.proof-link { color: var(--accent-cyan); text-decoration: none; }
.proof-link:hover { text-decoration: underline; }
.proof-link.muted { color: var(--text-muted); }
.proof-sep { color: var(--text-muted); }
.not-sure-banner {
  background: rgba(0, 255, 65, 0.04); border: 1px solid rgba(0, 255, 65, 0.15);
  border-radius: 8px; padding: var(--spacing-lg) var(--spacing-xl);
  display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-lg); flex-wrap: wrap;
}
.not-sure-banner p { margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }
.not-sure-banner .highlight { color: var(--accent-green); font-weight: 600; }
.not-sure-cta {
  font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-green);
  text-decoration: none; white-space: nowrap; transition: all 0.3s ease;
  border: 1px solid var(--accent-green); padding: 8px 16px; border-radius: 4px;
}
.not-sure-cta:hover { background: rgba(0,255,65,0.1); box-shadow: 0 0 15px rgba(0,255,65,0.2); }
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
.card-tagline { font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-primary); margin-bottom: var(--spacing-xs); font-weight: 600; }
.card-audience { font-size: 0.85rem; color: var(--text-muted); margin-bottom: var(--spacing-md); line-height: 1.5; }
.feature-list { list-style: none; }
.feature-list li { margin-bottom: var(--spacing-sm); color: var(--text-secondary); display: flex; align-items: flex-start; gap: 8px; font-size: 0.92rem; line-height: 1.5; }
.check { color: var(--accent-green); font-weight: bold; flex-shrink: 0; }
.delivery-timeline {
  margin-top: var(--spacing-md); padding-top: var(--spacing-md);
  border-top: 1px dashed var(--border-color);
}
.timeline-step {
  font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);
  margin-bottom: 4px; display: flex; align-items: center; gap: 8px;
}
.tl-label { color: var(--accent-cyan); font-weight: bold; min-width: 60px; }
.best-for { margin-top: var(--spacing-md); font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); font-style: italic; border-top: 1px dashed var(--border-color); padding-top: var(--spacing-sm); }
.card-footer { margin-top: var(--spacing-lg); }
.block-btn { width: 100%; text-align: center; }
.pricing-note { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-align: center; }
.section-title { font-family: var(--font-mono); font-size: 1.2rem; color: var(--text-primary); margin-bottom: var(--spacing-lg); }
.yesno-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
.yes-card, .no-card { padding: var(--spacing-lg); border-radius: 8px; border: 1px solid rgba(0,255,65,0.08); background: rgba(10,10,10,0.5); }
.yes-label { color: var(--accent-green); font-family: var(--font-mono); margin-bottom: var(--spacing-md); }
.no-label { color: var(--accent-amber); font-family: var(--font-mono); margin-bottom: var(--spacing-md); }
.yesno-list { list-style: none; }
.yesno-list li { margin-bottom: var(--spacing-sm); color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; display: flex; align-items: flex-start; gap: 8px; }
.deliverables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); }
.deliverable { font-family: var(--font-mono); font-size: 0.88rem; color: var(--text-secondary); background: rgba(10,10,10,0.4); border: 1px solid rgba(0,255,65,0.06); padding: var(--spacing-sm) var(--spacing-md); border-radius: 6px; }
.case-study { padding: var(--spacing-xl); border: 1px solid rgba(0,255,65,0.1); background: rgba(10,10,10,0.5); border-radius: 8px; }
.case-grid { display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-xl); }
.case-block { margin-bottom: var(--spacing-md); }
.case-label { font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: var(--spacing-xs); }
.case-block p { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; }
.case-cta {
  display: inline-block; margin-top: var(--spacing-sm);
  font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-green);
  text-decoration: none; border: 1px solid var(--accent-green); padding: 8px 16px;
  border-radius: 4px; transition: all 0.3s ease;
}
.case-cta:hover { background: rgba(0,255,65,0.1); box-shadow: 0 0 15px rgba(0,255,65,0.2); }
.case-meta { display: flex; flex-direction: column; gap: var(--spacing-sm); }
.meta-item { font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); }
.meta-label { color: var(--text-primary); font-weight: bold; }
.process-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--spacing-lg); }
.process-step { padding: var(--spacing-lg); text-align: center; border: 1px solid rgba(0,255,65,0.08); background: rgba(10,10,10,0.5); border-radius: 8px; }
.step-num { font-family: var(--font-mono); font-size: 2rem; font-weight: bold; color: var(--accent-cyan); margin-bottom: var(--spacing-sm); }
.process-step h4 { font-family: var(--font-mono); color: var(--text-primary); margin-bottom: var(--spacing-xs); }
.process-step p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
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
  .pricing-grid, .yesno-grid, .faq-grid, .process-grid, .deliverables-grid, .case-grid { grid-template-columns: 1fr; }
  .command-line { font-size: 1.5rem; }
  .not-sure-banner { flex-direction: column; text-align: center; }
}
</style>
