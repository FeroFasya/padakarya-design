<template>
  <footer class="bg-ink text-white/70">
    <div class="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
      <div>
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="Padakarya Design logo" class="h-9 w-9 rounded-full bg-stone object-cover">
          <span class="display text-lg text-white">Padakarya Design</span>
        </div>
        <p class="mt-3 max-w-xs text-sm leading-relaxed">
          Design &amp; build ecosystem for tropical villas and homes in Bali.
        </p>
      </div>

      <nav class="flex flex-col gap-2.5 text-sm" aria-label="Footer">
        <a class="hover:text-white transition-colors" href="#about">About</a>
        <a class="hover:text-white transition-colors" href="#projects">Projects</a>
        <a class="hover:text-white transition-colors" href="#process">Process</a>
        <a class="hover:text-white transition-colors" href="#contact">Contact</a>
      </nav>

      <div class="flex flex-col gap-2.5 text-sm">
        <span class="text-xs uppercase tracking-wider text-white/40">Connect</span>
        <a class="hover:text-white transition-colors flex items-center gap-2" href="https://www.instagram.com/padakarya_design/" target="_blank" rel="noopener">
          <span>@padakarya_design</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </a>
        <a class="hover:text-white transition-colors flex items-center gap-2" href="https://www.instagram.com/padakarya_construction/" target="_blank" rel="noopener">
          <span>@padakarya_construction</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="border-t border-white/10 py-5 text-center text-xs">
      <p>© {{ currentYear }} Padakarya Design. All rights reserved.</p>
      <p class="mt-1 text-white/40">Crafted by Fero</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
