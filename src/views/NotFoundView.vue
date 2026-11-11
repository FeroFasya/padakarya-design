<template>
  <div class="min-h-screen bg-bone text-ink flex flex-col justify-between selection:bg-pool selection:text-white">
    <!-- Mini Header -->
    <header class="bg-jungle py-4 px-6 border-b border-white/10">
      <div class="mx-auto max-w-7xl flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3">
          <img src="/official.webp" alt="Padakarya Design Logo" class="h-9 w-9 rounded-full bg-stone object-cover">
          <span class="display text-lg text-white">Padakarya <span class="text-white/60">Design</span></span>
        </router-link>
        <router-link to="/" class="rounded-full bg-white px-5 py-2 text-xs font-medium text-jungle hover:bg-stone transition-all">
          Back to Home
        </router-link>
      </div>
    </header>

    <!-- 404 Hero -->
    <main class="mx-auto max-w-3xl px-6 py-24 text-center my-auto">
      <span class="inline-block rounded-full bg-pool/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-pool mb-4">
        Page Not Found · 404
      </span>
      <h1 class="display text-5xl sm:text-7xl font-normal leading-tight text-ink mb-6">
        Halaman tidak ditemukan.
      </h1>
      <p class="text-base sm:text-lg text-ink/70 leading-relaxed max-w-xl mx-auto mb-10">
        Tautan yang Anda tuju mungkin telah dipindahkan atau belum tersedia. Silakan kembali ke beranda untuk menjelajahi portofolio desain &amp; bangun kami di Bali.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <router-link to="/" class="focus-ring rounded-full bg-jungle px-8 py-3.5 text-sm font-medium text-white hover:bg-moss transition-all shadow-md">
          Kembali ke Beranda
        </router-link>
        <router-link to="/#projects" class="focus-ring rounded-full border border-ink/30 px-8 py-3.5 text-sm font-medium text-ink hover:bg-ink hover:text-bone transition-all">
          Lihat Portofolio Proyek
        </router-link>
      </div>
    </main>

    <!-- Footer Simple -->
    <footer class="border-t border-ink/10 py-6 text-center text-xs text-ink/50 bg-stone/40">
      © {{ new Date().getFullYear() }} Padakarya Design · CV Pada Karya (Est. 2013)
    </footer>
  </div>
</template>

<script setup>
</script>
