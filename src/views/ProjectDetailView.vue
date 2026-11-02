<template>
  <div v-if="project" class="min-h-screen bg-bone text-ink selection:bg-pool selection:text-white">
    <!-- Dedicated Project Header / Nav -->
    <header class="fixed inset-x-0 top-0 z-50 bg-jungle/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <router-link to="/#projects" class="focus-ring inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span class="font-medium">All Projects</span>
        </router-link>

        <router-link to="/" class="focus-ring flex items-center gap-2.5" aria-label="Padakarya Design">
          <img src="/logo.png" alt="Padakarya Logo" class="h-8 w-8 rounded-full bg-stone object-cover shadow-sm">
          <span class="display text-base text-white hidden sm:inline">Padakarya <span class="text-white/60">Design</span></span>
        </router-link>

        <a 
          :href="whatsappUrl" 
          target="_blank" 
          rel="noopener" 
          class="focus-ring rounded-full bg-white px-5 py-1.5 text-xs font-medium text-jungle transition-all hover:bg-stone shadow-sm"
        >
          Consult this Project
        </a>
      </div>
    </header>

    <main class="pt-24 pb-20">
      <!-- Project Hero & Metadata -->
      <section class="mx-auto max-w-7xl px-5 pt-8 md:px-8">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="rounded-full bg-jungle text-white px-3.5 py-1 text-xs font-medium tracking-wide">
            {{ project.tag }}
          </span>
          <span class="rounded-full bg-pool/15 text-pool px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            {{ project.status }}
          </span>
          <span class="text-xs text-ink/60 font-mono">{{ project.meta }}</span>
        </div>

        <h1 class="display text-4xl sm:text-6xl md:text-7xl font-normal text-ink leading-[1.05]">
          {{ project.title }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg sm:text-xl text-ink/75 leading-relaxed font-light">
          {{ project.subtitle }}
        </p>

        <!-- Project Hero Card: Thumbnail Asli ATAU Placeholder Abu -->
        <div class="mt-10 overflow-hidden rounded-3xl bg-[#D6D0C3] border border-ink/15 shadow-sm">
          <div v-if="project.thumbnail" class="relative aspect-[16/9] w-full overflow-hidden bg-stone">
            <img 
              :src="project.thumbnail" 
              :alt="project.title" 
              class="h-full w-full object-cover"
              @error="handleThumbnailError"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-jungle/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-white/70 block mb-1">Portfolio Showcase</span>
                <span class="display text-2xl sm:text-3xl font-medium">{{ project.title }}</span>
              </div>
            </div>
          </div>
          <div v-else class="relative aspect-[16/9] w-full flex flex-col items-center justify-center p-8 text-center bg-[#D6D0C3]">
            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/70 text-ink/60 shadow-sm mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <h3 class="display text-2xl sm:text-3xl text-ink font-medium">{{ project.title }}</h3>
            <span class="text-xs text-ink/50 mt-1 font-mono">Foto Utama Proyek (Siap tampil setelah upload)</span>
          </div>
        </div>

        <!-- Specifications Grid -->
        <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Location</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.location }}</span>
          </div>
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Category</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.tag }}</span>
          </div>
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Status</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.status }}</span>
          </div>
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Ecosystem</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-pool">Design &amp; Build</span>
          </div>
        </div>
      </section>

      <!-- Architectural Story & Scope -->
      <section class="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div class="grid gap-12 md:grid-cols-12">
          <div class="md:col-span-5">
            <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Architecture &amp; Detailing</span>
            <h2 class="display text-3xl sm:text-4xl leading-snug">
              Integrated vision from concept to completion.
            </h2>
            <div class="mt-6 rounded-2xl bg-jungle p-6 text-white shadow-sm">
              <span class="text-xs uppercase tracking-wider text-white/50 font-medium">Project Scope</span>
              <p class="mt-2 text-sm leading-relaxed text-white/80 font-light">
                {{ project.scope }}
              </p>
            </div>
          </div>

          <div class="md:col-span-7 md:pl-6 space-y-6">
            <!-- Official Quote Banner if Available (e.g. Villa Bali Interior) -->
            <div v-if="project.quote" class="rounded-2xl border-l-4 border-pool bg-white/90 p-6 shadow-sm backdrop-blur-sm">
              <span class="text-[10px] font-mono uppercase tracking-widest text-pool font-bold block mb-1.5">
                Precision &amp; Contractor Verification
              </span>
              <p class="display text-xl sm:text-2xl italic text-ink font-medium leading-snug">
                {{ project.quote }}
              </p>
              <span class="text-xs text-ink/60 mt-3 block font-medium">— Padakarya Design &amp; Construction Ecosystem</span>
            </div>

            <div v-else class="rounded-2xl border border-dashed border-ink/20 bg-white/40 p-5 text-xs text-ink/60 font-mono">
              [ Dokumentasi Resmi Padakarya: Detail rancang bangun dan spesifikasi teknis diawasi oleh Padakarya Design dan dicek oleh Padakarya Construction sebagai Kontraktor Pelaksana ]
            </div>

            <p class="text-lg leading-relaxed text-ink/80 whitespace-pre-line font-light">
              {{ project.story }}
            </p>
          </div>
        </div>
      </section>

      <!-- CASE STUDY DOCUMENTATION SECTION -->
      <section class="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Project Lifecycle Archive</span>
            <h2 class="display text-3xl sm:text-4xl text-ink">Project Documentation</h2>
            <p class="mt-1 text-sm text-ink/70">
              Dokumen gambar kerja teknis presisi, detail furnitur custom, dan arsip tahapan proyek.
            </p>
          </div>

          <!-- Main Category Filter Tabs -->
          <div class="flex flex-wrap gap-2">
            <button 
              @click="activeCategory = 'All'"
              type="button"
              class="focus-ring rounded-full border px-4 py-2 text-xs font-medium transition-all"
              :class="[activeCategory === 'All' ? 'bg-jungle text-white border-jungle shadow-sm' : 'border-ink/25 text-ink hover:border-ink']"
            >
              All Stages
            </button>
            <button 
              v-for="cat in project.categories"
              :key="cat"
              @click="activeCategory = cat"
              type="button"
              class="focus-ring rounded-full border px-4 py-2 text-xs font-medium transition-all"
              :class="[activeCategory === cat ? 'bg-jungle text-white border-jungle shadow-sm' : 'border-ink/25 text-ink hover:border-ink']"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- SPECIAL SUB-FILTER: Khusus Tab Drawings jika Proyek memiliki real drawings (Rumah Bengkel Gede) -->
        <div v-if="project.drawings && (activeCategory === 'Drawings' || activeCategory === 'All')" class="mb-8 p-4 rounded-2xl bg-white/80 border border-ink/15 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="flex h-2.5 w-2.5 rounded-full bg-pool"></span>
              <span class="text-xs uppercase tracking-wider font-semibold text-ink/70">Filter Kategori DED:</span>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <button
                @click="drawingFilter = 'all'"
                type="button"
                class="rounded-full px-3.5 py-1 text-xs font-medium transition-all"
                :class="[drawingFilter === 'all' ? 'bg-pool text-white shadow-sm' : 'bg-stone/50 text-ink/70 hover:bg-stone']"
              >
                Semua Gambar ({{ project.drawings.length }})
              </button>
              <button
                @click="drawingFilter = 'Arsitektur'"
                type="button"
                class="rounded-full px-3.5 py-1 text-xs font-medium transition-all"
                :class="[drawingFilter === 'Arsitektur' ? 'bg-pool text-white shadow-sm' : 'bg-stone/50 text-ink/70 hover:bg-stone']"
              >
                Arsitektur ({{ countCategory('Arsitektur') }})
              </button>
              <button
                @click="drawingFilter = 'Struktur'"
                type="button"
                class="rounded-full px-3.5 py-1 text-xs font-medium transition-all"
                :class="[drawingFilter === 'Struktur' ? 'bg-pool text-white shadow-sm' : 'bg-stone/50 text-ink/70 hover:bg-stone']"
              >
                Struktur ({{ countCategory('Struktur') }})
              </button>
              <button
                @click="drawingFilter = 'MEP'"
                type="button"
                class="rounded-full px-3.5 py-1 text-xs font-medium transition-all"
                :class="[drawingFilter === 'MEP' ? 'bg-pool text-white shadow-sm' : 'bg-stone/50 text-ink/70 hover:bg-stone']"
              >
                MEP ({{ countCategory('MEP') }})
              </button>
            </div>
          </div>
        </div>

        <!-- 1. REAL DRAWINGS GALLERY GRID (Untuk Proyek Bengkel Gede) -->
        <div v-if="project.drawings && (activeCategory === 'Drawings' || activeCategory === 'All')" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(drawing, idx) in filteredDrawings" 
            :key="drawing.id"
            @click="openLightbox(drawing, idx, 'drawings')"
            class="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-ink/15 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div class="relative aspect-[4/3] bg-stone/40 overflow-hidden flex items-center justify-center p-3 select-none">
              <img 
                :src="drawing.file" 
                :alt="drawing.title" 
                class="h-full w-full object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              >
              
              <!-- Clean Corner Badges -->
              <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between pointer-events-none">
                <span class="rounded-full bg-jungle/85 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white shadow-sm">
                  {{ drawing.category }}
                </span>
                <span class="text-[9px] font-mono bg-white/90 backdrop-blur-sm text-ink/80 px-2 py-0.5 rounded shadow-sm">
                  Padakarya Design
                </span>
              </div>

              <!-- Click to zoom indicator -->
              <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-jungle shadow-lg flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                  Perbesar Gambar
                </span>
              </div>
            </div>

            <div class="p-4 bg-white flex items-center justify-between">
              <div>
                <h4 class="display text-base text-ink font-medium">{{ drawing.title }}</h4>
                <p class="text-[11px] text-ink/60 font-mono mt-0.5">Disiplin: {{ drawing.category }}</p>
              </div>
              <span class="text-xs text-pool font-medium group-hover:translate-x-1 transition-transform">Lihat →</span>
            </div>
          </div>
        </div>

        <!-- 2. REAL INTERIOR GALLERY GRID (Untuk Proyek Villa Bali Interior) -->
        <div v-else-if="project.interiorGallery && (activeCategory === 'Interior' || activeCategory === 'All')" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(item, idx) in project.interiorGallery" 
            :key="item.id"
            @click="openLightbox(item, idx, 'interior')"
            class="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-ink/15 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div class="relative aspect-[4/3] bg-stone/30 overflow-hidden flex items-center justify-center select-none">
              <img 
                :src="item.file" 
                :alt="item.title" 
                class="h-full w-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                @error="handleImgFallback($event, item.title)"
              >
              
              <!-- Clean Corner Badges -->
              <div class="absolute inset-x-0 top-0 p-3 flex items-center justify-between pointer-events-none">
                <span class="rounded-full bg-pool/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white shadow-sm">
                  Interior &amp; Furniture
                </span>
                <span class="text-[9px] font-mono bg-white/90 backdrop-blur-sm text-ink/80 px-2 py-0.5 rounded shadow-sm">
                  Padakarya
                </span>
              </div>

              <!-- Click to zoom indicator -->
              <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-jungle shadow-lg flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                  Perbesar Visual
                </span>
              </div>
            </div>

            <div class="p-4 bg-white flex items-center justify-between">
              <div>
                <h4 class="display text-base text-ink font-medium">{{ item.title }}</h4>
                <p class="text-[11px] text-ink/60 font-mono mt-0.5">Detailing &amp; Finishing</p>
              </div>
              <span class="text-xs text-pool font-medium group-hover:translate-x-1 transition-transform">Lihat →</span>
            </div>
          </div>
        </div>

        <!-- 3. FALLBACK STANDARD PLACEHOLDERS (Untuk Kategori Lain atau Proyek Tanpa DED/Interior) -->
        <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(item, idx) in filteredStandardItems" 
            :key="idx"
            class="overflow-hidden rounded-2xl bg-white border border-ink/15 shadow-sm transition-all hover:shadow-md"
          >
            <div class="relative aspect-[4/3] bg-[#DDD8CC] flex flex-col items-center justify-center p-6 text-center border-b border-ink/10">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-ink/60 shadow-sm mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21 16-4-4-5 5-2-2-4 4"/>
                  <circle cx="9" cy="9" r="2"/>
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                </svg>
              </div>
              <span class="text-xs font-semibold text-ink/70">{{ item.stage }}</span>
              <span class="text-[11px] text-ink/50 font-mono mt-0.5">Placeholder Dokumen Proyek</span>

              <div class="absolute top-3 left-3">
                <span class="rounded-full bg-jungle/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-white">
                  {{ item.stage }}
                </span>
              </div>
            </div>

            <div class="p-5">
              <h4 class="display text-lg text-ink font-medium">{{ item.title }}</h4>
              <p class="mt-1 text-xs text-ink/65 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- LIGHTBOX FULLSCREEN MODAL (Zoom Detail Gambar & Interior) -->
      <teleport to="body">
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div 
            v-if="lightboxOpen" 
            class="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 md:p-8 select-none"
            @keydown.esc="closeLightbox"
          >
            <!-- Lightbox Top Bar -->
            <div class="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-pool font-semibold block">
                  {{ currentLightboxItem?.category || 'Interior & Detailing' }} · Lembar {{ currentLightboxIndex + 1 }} dari {{ activeLightboxList.length }}
                </span>
                <h3 class="display text-xl sm:text-2xl font-medium mt-0.5">
                  {{ currentLightboxItem?.title }}
                </h3>
              </div>

              <div class="flex items-center gap-3">
                <button 
                  @click="closeLightbox"
                  type="button"
                  class="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-jungle transition-all"
                  aria-label="Tutup preview"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Lightbox Main Image Preview with Watermark -->
            <div class="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <img 
                :src="currentLightboxItem?.file" 
                :alt="currentLightboxItem?.title"
                class="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl pointer-events-none select-none"
              >

              <!-- Subtle Watermark Stamp in Fullscreen (Tembus Pandang & Elegan) -->
              <div class="absolute inset-0 flex flex-col items-center justify-between p-6 pointer-events-none select-none">
                <!-- Watermark Diagonal Super Halus & Adaptif (Kontras di Kertas Putih & Foto Gelap) -->
                <div class="my-auto rotate-[-20deg] text-center select-none pointer-events-none">
                  <p class="text-2xl sm:text-4xl md:text-5xl font-mono font-black tracking-widest text-ink/35 uppercase drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                    PADAKARYA DESIGN
                  </p>
                  <p class="text-xs sm:text-sm font-mono font-semibold tracking-wider text-ink/40 mt-1.5 uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                    Official Architectural &amp; Interior Portfolio · Protected Preview
                  </p>
                </div>

                <!-- Floating Bottom Legal Badge -->
                <div class="rounded-full border border-white/25 bg-black/60 backdrop-blur-md px-5 py-2 text-center max-w-xl shadow-lg">
                  <p class="text-[10px] sm:text-xs font-mono text-white/90 leading-tight">
                    Full design to construction drawing, handle by Padakarya Design and checking by Padakarya Construction as a Contractor
                  </p>
                </div>
              </div>

              <!-- Previous Button -->
              <button 
                @click.stop="prevLightbox"
                type="button"
                class="focus-ring absolute left-2 md:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-jungle transition-all backdrop-blur-md shadow-lg"
                aria-label="Gambar sebelumnya"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <!-- Next Button -->
              <button 
                @click.stop="nextLightbox"
                type="button"
                class="focus-ring absolute right-2 md:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-jungle transition-all backdrop-blur-md shadow-lg"
                aria-label="Gambar selanjutnya"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <!-- Lightbox Bottom Bar -->
            <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 border-t border-white/10 pt-3 gap-2">
              <p>Gunakan tombol panah kiri / kanan untuk berpindah lembar.</p>
              <a 
                :href="whatsappUrl" 
                target="_blank" 
                rel="noopener" 
                class="text-pool hover:underline"
              >
                Konsultasikan Proyek Ini via WhatsApp →
              </a>
            </div>
          </div>
        </transition>
      </teleport>

      <!-- Direct Consultation Box -->
      <section class="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div class="rounded-3xl bg-jungle p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div class="max-w-xl">
            <span class="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 block">Inquiry &amp; Build</span>
            <h2 class="display text-3xl sm:text-4xl leading-tight">
              Ingin Mewujudkan Proyek Seperti {{ project.title }}?
            </h2>
            <p class="mt-3 text-sm text-white/75 leading-relaxed">
              Tim Padakarya mengawal dari konsep arsitektur, gambar kerja DED, custom furnitur interior, hingga konstruksi turnkey di Bali.
            </p>
          </div>
          <div class="shrink-0 flex flex-wrap gap-4">
            <a 
              :href="whatsappUrl" 
              target="_blank" 
              rel="noopener" 
              class="focus-ring inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-medium text-jungle transition-all hover:bg-stone active:scale-95 shadow-md"
            >
              <span>Chat via WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
            <router-link 
              to="/#contact" 
              class="focus-ring inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Contact Form
            </router-link>
          </div>
        </div>
      </section>

      <!-- Next / Prev Project Navigation -->
      <section class="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div class="border-t border-ink/15 pt-8 flex items-center justify-between">
          <router-link 
            :to="`/projects/${prevProject.slug}`" 
            class="focus-ring group flex flex-col text-left"
          >
            <span class="text-xs uppercase tracking-wider text-ink/50 group-hover:text-pool transition-colors">← Previous Project</span>
            <span class="display text-xl sm:text-2xl text-ink font-medium mt-1">{{ prevProject.title }}</span>
          </router-link>

          <router-link 
            :to="`/projects/${nextProject.slug}`" 
            class="focus-ring group flex flex-col text-right"
          >
            <span class="text-xs uppercase tracking-wider text-ink/50 group-hover:text-pool transition-colors">Next Project →</span>
            <span class="display text-xl sm:text-2xl text-ink font-medium mt-1">{{ nextProject.title }}</span>
          </router-link>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Floating WhatsApp Button -->
    <FloatingWhatsapp />
  </div>

  <div v-else class="min-h-screen flex items-center justify-center bg-bone text-center p-6">
    <div>
      <h2 class="display text-3xl mb-4">Project Not Found</h2>
      <router-link to="/#projects" class="rounded-full bg-jungle text-white px-6 py-2.5 text-sm font-medium">
        Back to All Projects
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import FooterSection from '../components/FooterSection.vue'
import FloatingWhatsapp from '../components/FloatingWhatsapp.vue'

const route = useRoute()
const activeCategory = ref('All')
const drawingFilter = ref('all')
const lightboxMode = ref('drawings') // 'drawings' or 'interior'

// Lightbox State
const lightboxOpen = ref(false)
const currentLightboxIndex = ref(0)

const currentIndex = computed(() => {
  return projects.findIndex(p => p.slug === route.params.slug)
})

const project = computed(() => {
  return projects[currentIndex.value] || projects[0]
})

const prevProject = computed(() => {
  const prevIdx = (currentIndex.value - 1 + projects.length) % projects.length
  return projects[prevIdx]
})

const nextProject = computed(() => {
  const nextIdx = (currentIndex.value + 1) % projects.length
  return projects[nextIdx]
})

const countCategory = (cat) => {
  if (!project.value?.drawings) return 0
  return project.value.drawings.filter(d => d.category === cat).length
}

const filteredDrawings = computed(() => {
  if (!project.value?.drawings) return []
  if (drawingFilter.value === 'all') {
    return project.value.drawings
  }
  return project.value.drawings.filter(d => d.category === drawingFilter.value)
})

const activeLightboxList = computed(() => {
  if (lightboxMode.value === 'interior' && project.value?.interiorGallery) {
    return project.value.interiorGallery
  }
  return filteredDrawings.value
})

const currentLightboxItem = computed(() => {
  return activeLightboxList.value[currentLightboxIndex.value] || null
})

const openLightbox = (item, idx, mode = 'drawings') => {
  lightboxMode.value = mode
  currentLightboxIndex.value = idx
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextLightbox = () => {
  if (activeLightboxList.value.length === 0) return
  currentLightboxIndex.value = (currentLightboxIndex.value + 1) % activeLightboxList.value.length
}

const prevLightbox = () => {
  if (activeLightboxList.value.length === 0) return
  currentLightboxIndex.value = (currentLightboxIndex.value - 1 + activeLightboxList.value.length) % activeLightboxList.value.length
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextLightbox()
  if (e.key === 'ArrowLeft') prevLightbox()
}

const handleThumbnailError = (e) => {
  e.target.style.display = 'none'
}

const handleImgFallback = (e, title) => {
  // If file doesn't exist yet, show nice SVG placeholder
  e.target.style.display = 'none'
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const waNumber = '6285155203224'
const whatsappUrl = computed(() => {
  const msg = `Hello Padakarya Design, I am interested in discussing a project inspired by ${project.value?.title || 'your portfolio'}.`
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`
})

// Lifecycle stage standard placeholders for other categories
const standardItems = computed(() => {
  if (!project.value) return []
  return [
    { stage: 'Concept', title: 'Sketsa Konsep & Massa Bangunan', description: 'Pratinjau visual tahap perancangan awal dan orientasi tapak.' },
    { stage: 'Site', title: 'Dokumentasi Progress Lapangan', description: 'Dokumentasi fisik pekerjaan struktur dan pelaksanaan oleh tim konstruksi.' },
    { stage: 'Photo', title: 'Dokumentasi Bangunan Selesai', description: 'Foto arsitektur hasil serah terima proyek.' },
    { stage: 'Animation', title: 'Visualisasi 3D / Walkthrough', description: 'Render animasi interaktif dan walkthrough digital.' }
  ]
})

const filteredStandardItems = computed(() => {
  if (activeCategory.value === 'All') {
    return standardItems.value
  }
  return standardItems.value.filter(item => item.stage === activeCategory.value)
})
</script>
