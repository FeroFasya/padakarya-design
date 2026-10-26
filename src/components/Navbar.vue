<template>
  <header 
    id="top" 
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[isScrolled || isMobileMenuOpen ? 'bg-jungle/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4']"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
      <a href="#top" class="focus-ring flex items-center gap-3" aria-label="Padakarya Design home">
        <img src="/logo.png" alt="Padakarya Design logo" class="h-10 w-10 rounded-full bg-stone object-cover shadow-sm">
        <span class="display text-lg text-white">Padakarya <span class="text-white/60">Design</span></span>
      </a>

      <!-- Desktop Nav (Tetap sama seperti desain awal) -->
      <nav class="hidden items-center gap-8 text-sm text-white/90 md:flex" aria-label="Main">
        <a class="hover:text-white transition-colors focus-ring" href="#about">About</a>
        <a class="hover:text-white transition-colors focus-ring" href="#projects">Projects</a>
        <a class="hover:text-white transition-colors focus-ring" href="#process">Process</a>
        <a class="rounded-full bg-white px-5 py-2 font-medium text-jungle transition-all hover:bg-stone focus-ring" href="#contact">
          Start a project
        </a>
      </nav>

      <!-- Animated Hamburger Button (Mobile) -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="focus-ring relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-95 md:hidden" 
        :aria-expanded="isMobileMenuOpen" 
        aria-label="Toggle navigation menu"
      >
        <span 
          class="h-0.5 w-5 rounded-full bg-white transition-all duration-300 ease-in-out"
          :class="isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''"
        ></span>
        <span 
          class="h-0.5 w-5 rounded-full bg-white transition-all duration-200 ease-in-out"
          :class="isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'"
        ></span>
        <span 
          class="h-0.5 w-5 rounded-full bg-white transition-all duration-300 ease-in-out"
          :class="isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''"
        ></span>
      </button>
    </div>

    <!-- Luxury Mobile Menu Drawer -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4 max-h-0"
      enter-to-class="opacity-100 translate-y-0 max-h-[85vh]"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 max-h-[85vh]"
      leave-to-class="opacity-0 -translate-y-4 max-h-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="overflow-hidden bg-jungle/95 backdrop-blur-xl border-t border-white/10 px-6 pt-5 pb-8 shadow-2xl md:hidden"
      >
        <nav class="flex flex-col gap-2" aria-label="Mobile">
          <a 
            @click="isMobileMenuOpen = false" 
            class="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg display text-white/90 transition-colors hover:bg-white/10 hover:text-white" 
            href="#about"
          >
            <span>About</span>
            <span class="text-xs font-mono text-white/40">01</span>
          </a>

          <a 
            @click="isMobileMenuOpen = false" 
            class="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg display text-white/90 transition-colors hover:bg-white/10 hover:text-white" 
            href="#projects"
          >
            <span>Projects</span>
            <span class="text-xs font-mono text-white/40">02</span>
          </a>

          <a 
            @click="isMobileMenuOpen = false" 
            class="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg display text-white/90 transition-colors hover:bg-white/10 hover:text-white" 
            href="#process"
          >
            <span>Process</span>
            <span class="text-xs font-mono text-white/40">03</span>
          </a>

          <div class="mt-4 pt-4 border-t border-white/10">
            <a 
              @click="isMobileMenuOpen = false" 
              class="block w-full rounded-full bg-white py-3.5 text-center text-sm font-medium text-jungle shadow-md transition-all hover:bg-stone active:scale-[0.99]" 
              href="#contact"
            >
              Start a project
            </a>

            <!-- Quick Contact Links on Mobile -->
            <div class="mt-6 flex items-center justify-between px-2 text-xs text-white/60">
              <a 
                href="https://wa.me/6285155203224" 
                target="_blank" 
                rel="noopener" 
                class="hover:text-white transition-colors"
              >
                WhatsApp Inquiry
              </a>
              <span>·</span>
              <a 
                href="https://www.instagram.com/padakarya_design/" 
                target="_blank" 
                rel="noopener" 
                class="hover:text-white transition-colors"
              >
                @padakarya_design
              </a>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
