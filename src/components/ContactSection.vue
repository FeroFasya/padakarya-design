<template>
  <section id="contact" class="bg-jungle py-20 text-white md:py-28">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
      <div class="md:col-span-6">
        <h2 class="display text-4xl leading-tight md:text-6xl">
          Planning a villa or home in Bali?
        </h2>
        <p class="mt-5 max-w-md text-white/75 leading-relaxed">
          Tell us about your land and what you want to build. We reply with next steps for architectural design and construction.
        </p>
        
        <div class="mt-8">
          <a 
            :href="`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Padakarya Design, I would like to discuss a project in Bali.')}`" 
            target="_blank" 
            rel="noopener" 
            class="focus-ring inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-jungle transition-all hover:bg-stone active:scale-95 shadow-sm"
          >
            <span>Chat on WhatsApp</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </div>
      </div>

      <form 
        @submit.prevent="handleSubmit" 
        class="space-y-4 md:col-span-5 md:col-start-8" 
        novalidate
      >
        <div>
          <label for="name" class="mb-1 block text-sm text-white/80">Name</label>
          <input 
            id="name" 
            v-model="form.name"
            type="text"
            required 
            class="focus-ring w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-pool" 
            placeholder="Your name"
          >
        </div>

        <div>
          <label for="loc" class="mb-1 block text-sm text-white/80">Project location</label>
          <input 
            id="loc" 
            v-model="form.location"
            type="text"
            class="focus-ring w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-pool" 
            placeholder="e.g. Canggu, Ubud, Tabanan, Uluwatu"
          >
        </div>

        <div>
          <label for="msg" class="mb-1 block text-sm text-white/80">About the project</label>
          <textarea 
            id="msg" 
            v-model="form.message"
            rows="3" 
            class="focus-ring w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-pool" 
            placeholder="Land size, number of bedrooms, target timeline"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="focus-ring w-full rounded-full bg-pool px-7 py-3.5 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-[0.99] shadow-sm"
        >
          Send via WhatsApp
        </button>

        <p v-if="error" class="text-sm text-red-300" role="alert">
          Please enter your name first.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Nomor resmi Mas Putu
const waNumber = '6285155203224'

const form = reactive({
  name: '',
  location: '',
  message: ''
})

const error = ref(false)

const handleSubmit = () => {
  if (!form.name.trim()) {
    error.value = true
    return
  }
  error.value = false

  let text = `Hello Padakarya Design, I'm ${form.name.trim()}.`
  if (form.location.trim()) {
    text += ` Project location: ${form.location.trim()}.`
  }
  if (form.message.trim()) {
    text += ` ${form.message.trim()}`
  }

  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener')
}
</script>
