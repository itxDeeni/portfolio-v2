<template>
  <div class="contact-view">
    <div class="container">
      <div class="contact-wrapper">
        <h1 class="page-title text-center">
          <span class="prompt">➜</span> Initialize_Comms
        </h1>
        
        <div class="open-to-work">
          <p class="contact-intro">I'm currently open to new opportunities and interesting projects.
          As a software engineer, I enjoy building scalable systems, designing clean APIs, and tackling real-world engineering problems.</p>
          <p class="contact-intro">Whether you have a project in mind, an opportunity, or just want to say hi, feel free to reach out — my inbox is always open.</p>
        </div>
        
        <div class="contact-card">
          <LazyCommonTerminal title="message.sh">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">const name =</label>
                <input type="text" id="name" v-model="form.name" class="form-control" placeholder='"John Doe"' required maxlength="100">
              </div>
              
              <div class="form-group">
                <label for="email">const email =</label>
                <input type="email" id="email" v-model="form.email" class="form-control" placeholder='"john@example.com"' required maxlength="150">
              </div>
              
              <div class="form-group">
                <label for="message">const message =</label>
                <textarea id="message" v-model="form.message" class="form-control" rows="5" placeholder='"Lets build something awesome..."' required maxlength="2000"></textarea>
              </div>
              
              <div class="form-action">
                <button type="submit" class="btn btn-primary" :disabled="sending">
                  {{ sending ? 'Sending...' : 'await sendMessage()' }}
                </button>
              </div>
              
              <div v-if="success" class="success-msg">
                <span class="icon">✓</span> Message sent successfully!
              </div>
              <div v-if="errorMessage" class="error-msg mt-sm">
                <span class="icon">✗</span> {{ errorMessage }}
              </div>
            </form>
          </LazyCommonTerminal>
        </div>
        
        <div class="contact-links">
           <a :href="'mailto:' + profile.email" class="contact-link">
             <span class="label">Email:</span> {{ profile.email }}
           </a>
           <a :href="`https://wa.me/${profile.whatsapp.replace(/\+/g, '')}`" target="_blank" class="contact-link whatsapp-link">
             <span class="label">WhatsApp:</span> {{ profile.whatsapp }}
           </a>
           <a :href="profile.linkedin" target="_blank" class="contact-link">
             <span class="label">LinkedIn:</span> /in/zahradeenmuazu
           </a>
           <a :href="profile.twitter" target="_blank" class="contact-link">
             <span class="label">X (Twitter):</span> @itxdeeni
           </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '~/data/profile'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sending = ref(false)
const success = ref(false)
const errorMessage = ref('')

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const submitForm = async () => {
  errorMessage.value = ''
  
  if (!form.value.name.trim() || form.value.name.length > 100) {
    errorMessage.value = 'Please enter a valid name (max 100 characters).'
    return
  }
  
  if (!validateEmail(form.value.email) || form.value.email.length > 150) {
    errorMessage.value = 'Please enter a valid email address.'
    return
  }
  
  if (!form.value.message.trim() || form.value.message.length > 2000) {
    errorMessage.value = 'Please enter a valid message (max 2000 characters).'
    return
  }

  sending.value = true
  
  // Create mailto link with form data
  const subject = encodeURIComponent(`Portfolio Contact from ${form.value.name}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )
  const mailtoLink = `mailto:${profile.email}?subject=${subject}&body=${body}`
  
  // Open email client
  window.location.href = mailtoLink
  
  // Show success message
  setTimeout(() => {
    sending.value = false
    success.value = true
    form.value = { name: '', email: '', message: '' }
    
    setTimeout(() => {
      success.value = false
    }, 5000)
  }, 500)
}
</script>

<style scoped>
.contact-view {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
}

.contact-wrapper {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.contact-card {
  margin: var(--spacing-xl) 0;
}

.lead {
  color: var(--text-secondary);
}

.open-to-work {
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.contact-intro {
  font-size: 0.97rem;
  color: #8b949e;
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: var(--spacing-sm);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
}

.form-control {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.form-control:focus {
  outline: none;
  border-color: var(--accent-green);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
}

.form-action {
  margin-top: var(--spacing-lg);
  display: flex;
  justify-content: flex-end;
}

.success-msg {
  margin-top: var(--spacing-md);
  color: var(--accent-green);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-align: center;
}

.error-msg {
  margin-top: var(--spacing-md);
  color: #ff3366;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-align: center;
}

.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.contact-link {
  color: var(--text-secondary);
  font-family: var(--font-mono);
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--accent-green);
}

.contact-link .label {
  color: var(--text-muted);
}

.whatsapp-link:hover {
  color: #25D366; /* WhatsApp green */
}
</style>
