<template>
  <section id="projects" class="bg-stone py-20 md:py-28 overflow-hidden">
    <div class="mx-auto max-w-7xl px-5 md:px-8">
      <!-- Section Header with Title & Navigation Controls -->
      <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Portfolio</span>
          <h2 class="display max-w-xl text-4xl md:text-5xl text-ink">Selected projects</h2>
          <p class="mt-2 max-w-md text-ink/70">Villas and residences designed and built across Bali.</p>
        </div>

        <!-- Scroll Nav Controls -->
        <div class="flex items-center gap-3">
          <button 
            @click="scrollPrev"
            type="button"
            class="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-all hover:bg-jungle hover:text-bone hover:border-jungle active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            :disabled="isAtStart"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            @click="scrollNext"
            type="button"
            class="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-all hover:bg-jungle hover:text-bone hover:border-jungle active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            :disabled="isAtEnd"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Horizontal Scroll Carousel -->
    <div class="relative">
      <div 
        ref="sliderRef"
        @scroll="checkScrollPosition"
        @mousedown="startDrag"
        @mouseleave="stopDrag"
        @mouseup="stopDrag"
        @mousemove="onDrag"
        class="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-5 md:px-[calc((100vw-80rem)/2+2rem)] snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-6 select-none"
      >
        <article 
          v-for="(project, index) in projects" 
          :key="index"
          class="zoom group shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] snap-start"
        >
          <div class="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-md">
            <div class="relative aspect-[16/10] overflow-hidden bg-stone/50">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                draggable="false"
              >
              <div class="absolute top-4 left-4">
                <span class="rounded-full bg-jungle/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                  {{ project.tag }}
                </span>
              </div>
            </div>

            <div class="p-6 bg-white">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <h3 class="display text-2xl text-ink font-medium">{{ project.title }}</h3>
                <span class="text-xs uppercase tracking-wider text-pool font-semibold">{{ project.status }}</span>
              </div>
              <p class="mt-2 text-sm text-ink/70">{{ project.meta }}</p>
              <p class="mt-3 text-xs leading-relaxed text-ink/60 line-clamp-2">{{ project.desc }}</p>
            </div>
          </div>
        </article>
      </div>

      <!-- Subtle Scroll Progress Indicator -->
      <div class="mx-auto max-w-7xl px-5 md:px-8 mt-4">
        <div class="h-1 w-full max-w-xs bg-ink/10 rounded-full overflow-hidden">
          <div 
            class="h-full bg-jungle transition-all duration-150 rounded-full"
            :style="{ width: `${scrollProgress}%` }"
          ></div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-5 md:px-8 mt-10">
      <a 
        href="https://www.instagram.com/padakarya_design/" 
        target="_blank" 
        rel="noopener" 
        class="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-bone"
      >
        <span>Explore more on Instagram</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sliderRef = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)
const scrollProgress = ref(0)

// Drag-to-scroll state
let isDragging = false
let startX = 0
let scrollLeft = 0

// Proyek-proyek Padakarya Design dengan foto tropical aesthetic berkualitas tinggi (menunggu foto asli dari GDrive Mas Putu)
const projects = [
  {
    title: 'Villa Cepaka',
    tag: 'Design & Build',
    status: 'Completed',
    meta: '1 floor · 7 bedrooms · Bali',
    desc: 'Deep timber eaves, open pavilions with integrated infinity pool, and native lush gardens.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Abiantuwung Living',
    tag: 'Real Estate',
    status: 'In Progress',
    meta: 'Real estate · Tabanan, Bali',
    desc: 'Bespoke courtyard living combining Balinese stone craftsmanship with contemporary minimalism.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Villa Upada',
    tag: 'Architecture & Build',
    status: 'Completed',
    meta: 'Design & build · Canggu',
    desc: 'Distinctive timber pergola, warm ambient lighting, and intimate tropical sanctuary layout.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Ubud Pavilion Residence',
    tag: 'Private Villa',
    status: 'Design Phase',
    meta: '2 floors · 4 bedrooms · Ubud',
    desc: 'Cantilevered timber terraces overlooking tranquil river valleys and terraced greenery.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  }
]

const checkScrollPosition = () => {
  if (!sliderRef.value) return
  const el = sliderRef.value
  isAtStart.value = el.scrollLeft <= 10
  isAtEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
  
  const maxScroll = el.scrollWidth - el.clientWidth
  if (maxScroll > 0) {
    scrollProgress.value = Math.min(100, Math.max(10, (el.scrollLeft / maxScroll) * 100))
  }
}

const scrollPrev = () => {
  if (!sliderRef.value) return
  const cardWidth = sliderRef.value.querySelector('article')?.offsetWidth || 400
  sliderRef.value.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' })
}

const scrollNext = () => {
  if (!sliderRef.value) return
  const cardWidth = sliderRef.value.querySelector('article')?.offsetWidth || 400
  sliderRef.value.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
}

const startDrag = (e) => {
  isDragging = true
  startX = e.pageX - sliderRef.value.offsetLeft
  scrollLeft = sliderRef.value.scrollLeft
}

const stopDrag = () => {
  isDragging = false
}

const onDrag = (e) => {
  if (!isDragging) return
  e.preventDefault()
  const x = e.pageX - sliderRef.value.offsetLeft
  const walk = (x - startX) * 1.5
  sliderRef.value.scrollLeft = scrollLeft - walk
}

onMounted(() => {
  checkScrollPosition()
})
</script>
