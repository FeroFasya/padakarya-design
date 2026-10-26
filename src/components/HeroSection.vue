<template>
  <section class="relative flex min-h-[92vh] items-end overflow-hidden bg-jungle">
    <!-- Parallax Hero Background Image Container -->
    <div 
      class="absolute inset-0 -top-[15%] h-[130%] w-full will-change-transform"
      :style="{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }"
    >
      <img 
        src="/hero.png" 
        alt="Tropical villa with pool and timber roof by Padakarya Design" 
        class="h-full w-full object-cover scale-105 transition-transform duration-1000 ease-out"
      >
    </div>

    <!-- Gradient Overlay for Contrast & Atmosphere -->
    <div class="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/55 to-jungle/25"></div>
    
    <div class="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
      <p class="hero-in mb-5 max-w-md text-sm text-white/80">
        Design &amp; build ecosystem · Bali
      </p>
      
      <!-- Headline: Pilihan resmi Mas Putu: "Integrated Design & Build Partner" -->
      <h1 
        class="hero-in display max-w-4xl text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl font-normal" 
        style="animation-delay: 0.1s;"
      >
        Integrated Design &amp; Build Partner.
      </h1>

      <p 
        class="hero-in mt-6 max-w-xl text-lg text-white/80 leading-relaxed font-light"
        style="animation-delay: 0.2s;"
      >
        Tropical homes, villas, and architectural spaces designed and built together under one vision in Bali.
      </p>
      
      <div class="hero-in mt-9 flex flex-wrap gap-3" style="animation-delay: 0.3s;">
        <a 
          href="#projects" 
          class="focus-ring rounded-full bg-white px-7 py-3 text-sm font-medium text-jungle transition-all hover:bg-stone active:scale-95 shadow-sm"
        >
          See our projects
        </a>
        <a 
          href="#contact" 
          class="focus-ring rounded-full border border-white/50 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-95"
        >
          Talk to the team
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxOffset = ref(0)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Parallax effect: image moves at 35% of scroll speed
      parallaxOffset.value = window.scrollY * 0.35
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
