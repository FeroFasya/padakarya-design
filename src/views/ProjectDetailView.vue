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
          Consult this Villa
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
          <span class="text-xs text-ink/60 font-mono">{{ project.year }} · {{ project.location }}</span>
        </div>

        <h1 class="display text-4xl sm:text-6xl md:text-7xl font-normal text-ink leading-[1.05]">
          {{ project.title }}
        </h1>
        <p class="mt-4 max-w-2xl text-lg sm:text-xl text-ink/75 leading-relaxed font-light">
          {{ project.subtitle }}
        </p>

        <!-- Project Hero Card (Placeholder Abu Estetik) -->
        <div class="mt-10 overflow-hidden rounded-3xl bg-[#D6D0C3] border border-ink/15 shadow-sm">
          <div class="relative aspect-[16/9] w-full flex flex-col items-center justify-center p-8 text-center bg-[#D6D0C3]">
            <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/70 text-ink/60 shadow-sm mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <h3 class="display text-2xl sm:text-3xl text-ink font-medium">{{ project.title }} Hero Visual</h3>
            <span class="text-xs text-ink/50 mt-1 font-mono">Foto resolusi tinggi dari tim Padakarya Design akan ditampilkan di sini</span>
          </div>
        </div>

        <!-- Specifications Grid -->
        <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Location</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.location }}</span>
          </div>
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Land / Built</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.landSize }} / {{ project.buildingSize }}</span>
          </div>
          <div class="rounded-2xl border border-ink/15 bg-white/60 p-5 backdrop-blur-sm">
            <span class="block text-xs uppercase tracking-wider text-ink/50 font-semibold">Configuration</span>
            <span class="display mt-1.5 block text-lg sm:text-xl text-ink">{{ project.bedrooms }}</span>
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
            <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Architecture Philosophy</span>
            <h2 class="display text-3xl sm:text-4xl leading-snug">
              From climate responsive sketch to physical realization.
            </h2>
            <div class="mt-6 rounded-2xl bg-jungle p-6 text-white shadow-sm">
              <span class="text-xs uppercase tracking-wider text-white/50 font-medium">Project Scope</span>
              <p class="mt-2 text-sm leading-relaxed text-white/80 font-light">
                {{ project.scope }}
              </p>
            </div>
          </div>

          <div class="md:col-span-7 md:pl-6 space-y-6">
            <p class="text-lg leading-relaxed text-ink/80 whitespace-pre-line font-light">
              {{ project.story }}
            </p>

            <div class="mt-8 border-t border-ink/15 pt-6">
              <h3 class="display text-xl text-ink font-medium mb-4">Design &amp; Craftsmanship Highlights:</h3>
              <ul class="space-y-3">
                <li v-for="(feat, idx) in project.features" :key="idx" class="flex items-start gap-3 text-sm text-ink/80">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pool text-white text-xs mt-0.5">✓</span>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Study Stage Gallery Filter (The 6 Instagram Categories!) -->
      <section class="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Full Lifecycle Gallery</span>
            <h2 class="display text-3xl sm:text-4xl text-ink">Project lifecycle stages</h2>
            <p class="mt-1 text-sm text-ink/70">Explore technical drawings, site execution, and final visuals.</p>
          </div>

          <!-- Category Filter Tabs -->
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

        <!-- Filtered Cards Grid -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(item, idx) in filteredGalleryItems" 
            :key="idx"
            class="overflow-hidden rounded-2xl bg-white border border-ink/15 shadow-sm transition-all hover:shadow-md"
          >
            <!-- Neutral Image Placeholder -->
            <div class="relative aspect-[4/3] bg-[#DDD8CC] flex flex-col items-center justify-center p-6 text-center border-b border-ink/10">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-ink/60 shadow-sm mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21 16-4-4-5 5-2-2-4 4"/>
                  <circle cx="9" cy="9" r="2"/>
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                </svg>
              </div>
              <span class="text-xs font-semibold text-ink/70">{{ item.stage }} Visual</span>
              <span class="text-[11px] text-ink/50 font-mono mt-0.5">Asset #{{ idx + 1 }}</span>

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

      <!-- Direct Consultation Box -->
      <section class="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div class="rounded-3xl bg-jungle p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div class="max-w-xl">
            <span class="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 block">Inquiry &amp; Build</span>
            <h2 class="display text-3xl sm:text-4xl leading-tight">
              Planning a villa inspired by {{ project.title }}?
            </h2>
            <p class="mt-3 text-sm text-white/75 leading-relaxed">
              We guide your investment from land contour assessment, architectural drawings, cost planning, to turnkey handover in Bali.
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import FooterSection from '../components/FooterSection.vue'
import FloatingWhatsapp from '../components/FloatingWhatsapp.vue'

const route = useRoute()
const activeCategory = ref('All')

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

const waNumber = '6285155203224'
const whatsappUrl = computed(() => {
  const msg = `Hello Padakarya Design, I am interested in discussing a villa project inspired by ${project.value?.title || 'your portfolio'}.`
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`
})

// Lifecycle stage gallery mock items for demonstration
const galleryItems = computed(() => {
  if (!project.value) return []
  return [
    { stage: 'Concept', title: 'Solar Path & Wind Massing Study', description: 'Sun path simulation and natural cross-ventilation volume planning.' },
    { stage: 'Concept', title: 'Landscape & Infinity Pool Orientation', description: 'Harmonious relationship between indoor pavilion and private tropical gardens.' },
    { stage: 'Drawings', title: 'Architectural Working Drawings & Sections', description: 'Comprehensive construction drawings approved for physical execution.' },
    { stage: 'Drawings', title: 'Structural Timber Framing Details', description: 'Precise joinery engineering for heavy timber columns and exposed rafters.' },
    { stage: 'Site', title: 'Foundation & Reinforced Concrete Works', description: 'Deep bored piling and reinforced concrete ground beam installation.' },
    { stage: 'Site', title: 'Timber Erection & Roof Framing', description: 'On-site craftsman assembly by Padakarya Construction specialists.' },
    { stage: 'Interior', title: 'Custom Teak Cabinetry & Lighting', description: 'Handcrafted natural teak wood carpentry paired with warm ambient sconces.' },
    { stage: 'Photo', title: 'Daylight Architectural Photography', description: 'Showcasing deep shadows, natural ventilation, and material warmth.' },
    { stage: 'Photo', title: 'Twilight Dusk Atmosphere', description: 'Warm reflections off the Sukabumi stone pool during evening hours.' },
    { stage: 'Animation', title: '3D Cinematic Architectural Walkthrough', description: 'Photorealistic digital walkthrough moving from main gate to garden pavilion.' }
  ]
})

const filteredGalleryItems = computed(() => {
  if (activeCategory.value === 'All') {
    return galleryItems.value
  }
  return galleryItems.value.filter(item => item.stage === activeCategory.value)
})
</script>
