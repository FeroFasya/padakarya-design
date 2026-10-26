<template>
  <section class="relative flex min-h-[92vh] items-end overflow-hidden bg-jungle">
    <img 
      src="/hero.png" 
      alt="Tropical villa with pool and timber roof by Padakarya Design" 
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-jungle via-jungle/50 to-jungle/20"></div>
    
    <div class="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
      <p class="hero-in mb-5 max-w-md text-sm text-white/80">
        Design &amp; build ecosystem · Bali
      </p>
      
      <!-- Headline: Menggunakan lorem/placeholder sementara sesuai request Fero, siap diganti nanti malam -->
      <h1 
        class="hero-in display max-w-4xl text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl" 
        style="animation-delay: 0.1s;"
      >
        {{ heroHeadline }}
      </h1>
      
      <div class="hero-in mt-9 flex flex-wrap gap-3" style="animation-delay: 0.25s;">
        <a 
          href="#projects" 
          class="focus-ring rounded-full bg-white px-7 py-3 text-sm font-medium text-jungle transition-colors hover:bg-stone"
        >
          See our projects
        </a>
        <a 
          href="#contact" 
          class="focus-ring rounded-full border border-white/50 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Talk to the team
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Sementara pakai placeholder Lorem Ipsum sesuai arahan Fero, nanti malam tinggal update string ini
const heroHeadline = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.")
</script>
