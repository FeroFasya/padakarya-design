<template>
  <header 
    id="top" 
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-jungle shadow-lg py-3' : 'bg-transparent py-4']"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
      <a href="#top" class="focus-ring flex items-center gap-3" aria-label="Padakarya Design home">
        <img src="/logo.png" alt="Padakarya Design logo" class="h-10 w-10 rounded-full bg-stone object-cover">
        <span class="display text-lg text-white">Padakarya <span class="text-white/60">Design</span></span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-8 text-sm text-white/90 md:flex" aria-label="Main">
        <a class="hover:text-white transition-colors focus-ring" href="#about">About</a>
        <a class="hover:text-white transition-colors focus-ring" href="#projects">Projects</a>
        <a class="hover:text-white transition-colors focus-ring" href="#process">Process</a>
        <a class="rounded-full bg-white px-5 py-2 font-medium text-jungle transition-all hover:bg-stone focus-ring" href="#contact">
          Start a project
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="focus-ring rounded-md p-2 text-white md:hidden" 
        :aria-expanded="isMobileMenuOpen" 
        aria-label="Toggle menu"
      >
        <svg v-if="!isMobileMenuOpen" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
        <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="bg-jungle px-5 pb-6 pt-2 md:hidden border-t border-white/10">
        <nav class="flex flex-col gap-1 text-white" aria-label="Mobile">
          <a @click="isMobileMenuOpen = false" class="py-3 text-lg display" href="#about">About</a>
          <a @click="isMobileMenuOpen = false" class="py-3 text-lg display" href="#projects">Projects</a>
          <a @click="isMobileMenuOpen = false" class="py-3 text-lg display" href="#process">Process</a>
          <a @click="isMobileMenuOpen = false" class="mt-3 rounded-full bg-white py-3 text-center font-medium text-jungle" href="#contact">
            Start a project
          </a>
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
