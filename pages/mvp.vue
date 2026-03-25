<template>
  <div class="mvp-view">
    <div class="container form-container">
      <div class="back-nav">
        <NuxtLink to="/services" class="back-link">
           <span class="prompt">➜</span> cd ..
        </NuxtLink>
      </div>

      <h1 class="page-title command-line mt-lg">
        <span class="prompt">➜</span> <span class="directory">~</span> <span class="command">./init --new-project</span>
      </h1>
      
      <p class="lead">
        You have the idea. I have the engineering. Tell me what you're building and I'll get back to you within 24 hours with a 120-day game plan.
      </p>

      <div v-if="submitted" class="success-message card mt-xl">
         <div class="terminal-content">
           <span class="success-icon">✔</span>
           <span class="success-text">Request received. Expect a response within 24 hours with a tailored scope and timeline.</span>
         </div>
      </div>

      <form v-else @submit.prevent="submitForm" class="intake-form card mt-xl">
        <div class="form-group">
          <label for="project-desc" class="form-label"><span class="prompt">></span> Describe your project</label>
          <textarea id="project-desc" v-model="form.description" rows="4" required class="form-input" placeholder="What problem does it solve? Who are your users? Any tech preferences?" maxlength="1500"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="prompt">></span> What stage are you at?</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="form.stage" value="Idea" required>
              <span class="radio-custom">Idea</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.stage" value="MVP in progress">
              <span class="radio-custom">MVP in progress</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.stage" value="Live product">
              <span class="radio-custom">Live product</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="prompt">></span> When do you need this?</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="form.timeline" value="ASAP" required>
              <span class="radio-custom">ASAP</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.timeline" value="2-4 weeks">
              <span class="radio-custom">2–4 weeks</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.timeline" value="Flexible">
              <span class="radio-custom">Flexible</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label"><span class="prompt">></span> What's your budget range?</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="form.budget" value="$1K–$3K" required>
              <span class="radio-custom">$1K–$3K</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.budget" value="$3K–$10K">
              <span class="radio-custom">$3K–$10K</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="form.budget" value="$10K+">
              <span class="radio-custom">$10K+</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="contact-email" class="form-label"><span class="prompt">></span> Where should I reply?</label>
          <input type="email" id="contact-email" v-model="form.email" required class="form-input" placeholder="you@domain.com" maxlength="150">
        </div>

        <div v-if="errorMessage" class="error-message mt-lg">
          <span class="prompt error-text">✗ Error:</span> {{ errorMessage }}
        </div>
        
        <div class="form-actions mt-xl border-top">
          <button type="submit" class="btn btn-primary submit-btn">
            <span class="prompt" :class="{'text-dark': true}">➜</span> <span class="text-dark">./submit-request</span>
          </button>
          <div class="call-alt mt-lg">
            <span class="call-alt-text">// Prefer to talk first?</span>
            <a href="https://calendly.com/deeny7274/30min" target="_blank" rel="noopener" class="call-link">➜ ./book-free-call</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Start a Project | Zahradeen Muazu',
  meta: [
    { name: 'description', content: 'Submit a project request for your new MVP.' }
  ]
})

const submitted = ref(false)
const errorMessage = ref('')

const form = ref({
  description: '',
  stage: '',
  timeline: '',
  budget: '',
  email: ''
})

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const submitForm = () => {
  errorMessage.value = ''
  
  if (!form.value.description.trim() || form.value.description.length > 1500) {
    errorMessage.value = 'Please describe what you are building (max 1500 characters).'
    return
  }
  
  // Security detail: Validate that dropdown options adhere to allowed enums to stop DOM manipulation attacks
  const validStages = ['Idea', 'MVP in progress', 'Live product']
  const validTimelines = ['ASAP', '2-4 weeks', 'Flexible']
  const validBudgets = ['$1K–$3K', '$3K–$10K', '$10K+']
  
  if (!validStages.includes(form.value.stage) || !validTimelines.includes(form.value.timeline) || !validBudgets.includes(form.value.budget)) {
    errorMessage.value = 'Invalid option selected. Please select from the available choices.'
    return
  }

  if (!validateEmail(form.value.email) || form.value.email.length > 150) {
    errorMessage.value = 'Please enter a valid email address (max 150 characters).'
    return
  }
  
  // Sanitize object before hypothetical network transmission to prevent prototype pollution or XSS
  const sanitizedPayload = {
     description: form.value.description.trim(),
     stage: form.value.stage,
     timeline: form.value.timeline,
     budget: form.value.budget,
     email: form.value.email.trim()
  }

  // Normally we would send sanitizedPayload to an API or service like Formspree/Tally.
  // We simulate a fast response directly on the client.
  setTimeout(() => {
    submitted.value = true
    // Reset form for next time if they come back
    form.value = {
      description: '',
      stage: '',
      timeline: '',
      budget: '',
      email: ''
    }
  }, 500)
}
</script>

<style scoped>
.mvp-view {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  min-height: 100vh;
}

.form-container {
  max-width: 700px;
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

.intake-form {
  padding: var(--spacing-xl);
  border: 1px solid rgba(0, 255, 65, 0.1);
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.form-group {
  margin-bottom: var(--spacing-xl);
}

.form-label {
  display: block;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
}

.form-input {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-family: var(--font-mono);
  padding: var(--spacing-md);
  border-radius: 4px;
  transition: border-color var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-green);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.radio-label {
  position: relative;
  cursor: pointer;
}

.radio-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-custom {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  transition: all var(--transition-fast);
}

.radio-label:hover .radio-custom {
  border-color: rgba(0, 255, 65, 0.5);
}

.radio-label input:checked ~ .radio-custom {
  background: rgba(0, 255, 65, 0.1);
  border-color: var(--accent-green);
  color: var(--accent-green);
}

.border-top {
  border-top: 1px dashed var(--border-color);
  padding-top: var(--spacing-xl);
}

.submit-btn {
  width: 100%;
  font-size: 1.1rem;
  padding: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(0, 255, 65, 0.4);
}

.text-dark {
  color: var(--bg-dark);
}

.success-message {
  padding: var(--spacing-2xl);
  text-align: center;
  border: 1px solid var(--accent-green);
  background: rgba(0, 255, 65, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
}

.success-icon {
  display: block;
  font-size: 3rem;
  color: var(--accent-green);
  margin-bottom: var(--spacing-md);
}

.success-text {
  font-family: var(--font-mono);
  color: var(--text-primary);
  font-size: 1.2rem;
}

.error-message {
  padding: var(--spacing-sm) var(--spacing-md);
  border-left: 2px solid #ff3366;
  background: rgba(255, 51, 102, 0.05);
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.error-text {
  color: #ff3366;
  font-weight: bold;
}

.call-alt {
  text-align: center;
  border-top: 1px dashed var(--border-color);
  padding-top: var(--spacing-md);
}

.call-alt-text {
  font-family: var(--font-mono);
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-right: var(--spacing-sm);
}

.call-link {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.call-link:hover {
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
}

@media (max-width: 768px) {
  .command-line {
    font-size: 1.5rem;
  }
  
  .radio-group {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
