<template>
  <section id="projects" class="bg-stone py-20 md:py-28 overflow-hidden">
    <div class="mx-auto max-w-7xl px-5 md:px-8">
      <!-- Section Header with Title & Navigation Controls -->
      <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Portfolio</span>
          <h2 class="display max-w-xl text-4xl md:text-5xl text-ink">Selected projects</h2>
          <p class="mt-2 max-w-md text-ink/70">Villas and residences designed and built across Bali. Click any project to view its case study.</p>
        </div>

        <!-- Scroll Nav Controls -->
        <div class="flex items-center gap-3">
          <button 
            @click="scrollPrev"
            type="button"
            class="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-all hover:bg-jungle hover:text-bone hover:border-jungle active:scale-95"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            @click="scrollNext"
            type="button"
            class="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-all hover:bg-jungle hover:text-bone hover:border-jungle active:scale-95"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Horizontal Infinite Auto-Scroll Carousel -->
    <div 
      class="relative"
      @mouseenter="isPaused = true"
      @mouseleave="handleMouseLeave"
      @touchstart.passive="isPaused = true"
      @touchend.passive="resumeAfterTouch"
    >
      <div 
        ref="sliderRef"
        @scroll.passive="checkScrollPosition"
        @mousedown="startDrag"
        @mouseup="stopDrag"
        @mousemove="onDrag"
        class="no-scrollbar flex gap-6 overflow-x-auto px-5 md:px-[calc((100vw-80rem)/2+2rem)] cursor-grab active:cursor-grabbing pb-6 select-none"
      >
        <router-link 
          v-for="(project, idx) in loopedProjects" 
          :key="`${project.id}-${idx}`"
          :to="`/projects/${project.slug}`"
          @click.capture="handleCardClick"
          draggable="false"
          class="zoom group shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] block text-left"
        >
          <div class="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg border border-ink/10">
            <!-- Real Thumbnail Image OR Clean Neutral Gray Placeholder -->
            <div class="relative aspect-[16/10] overflow-hidden bg-[#DDD8CC] flex flex-col items-center justify-center text-center border-b border-ink/10 select-none">
              <template v-if="project.thumbnail">
                <img 
                  :src="project.thumbnail" 
                  :alt="project.title" 
                  class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-jungle/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </template>
              <template v-else>
                <div class="p-6 flex flex-col items-center justify-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-ink/60 shadow-sm mb-3 transition-transform group-hover:scale-110 duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                  </div>
                  <span class="text-xs font-semibold uppercase tracking-wider text-ink/70">{{ project.title }}</span>
                  <span class="text-[11px] text-ink/50 mt-1 font-mono">Placeholder Foto Proyek</span>
                </div>
              </template>

              <div class="absolute top-4 left-4">
                <span class="rounded-full bg-jungle/85 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-sm">
                  {{ project.tag }}
                </span>
              </div>
            </div>

            <div class="p-6 bg-white">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <h3 class="display text-2xl text-ink font-medium group-hover:text-pool transition-colors">{{ project.title }}</h3>
                <span class="text-xs uppercase tracking-wider text-pool font-semibold">{{ project.status }}</span>
              </div>
              <p class="mt-2 text-sm text-ink/70">{{ project.meta }}</p>
              <p class="mt-3 text-xs leading-relaxed text-ink/60 line-clamp-2">{{ project.desc }}</p>

              <!-- Subtle Action Cue -->
              <div class="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-medium text-ink/80 group-hover:text-pool transition-colors">
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </router-link>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects } from '../data/projects'

// Gandakan array proyek agar bisa looping tanpa putus (infinite seamless loop)
const loopedProjects = computed(() => [...projects, ...projects])

const sliderRef = ref(null)
const scrollProgress = ref(8)
const isPaused = ref(false)

// Drag & Auto-scroll state
let isDragging = false
let hasDragged = false
let startX = 0
let scrollLeft = 0
let rafId = null
let lastTime = 0
let subPixelCarry = 0
let buttonCooldownTimer = null
let touchResumeTimer = null

const getSingleSetWidth = () => {
  const el = sliderRef.value
  if (!el) return 0
  const cards = el.querySelectorAll('a')
  if (cards.length <= projects.length) return 0
  return cards[projects.length].offsetLeft - cards[0].offsetLeft
}

const normalizeLoopScroll = () => {
  const el = sliderRef.value
  if (!el) return 0
  const setWidth = getSingleSetWidth()
  if (setWidth <= 0) return 0

  if (el.scrollLeft >= setWidth) {
    el.scrollLeft -= setWidth
  }
  return setWidth
}

const checkScrollPosition = () => {
  const el = sliderRef.value
  if (!el) return
  const setWidth = normalizeLoopScroll()
  if (setWidth > 0) {
    const progress = ((el.scrollLeft % setWidth) / setWidth) * 100
    scrollProgress.value = Math.min(100, Math.max(6, progress))
  }
}

const autoScrollStep = (timestamp) => {
  if (!lastTime) lastTime = timestamp
  const dt = Math.min(50, timestamp - lastTime)
  lastTime = timestamp

  if (!isPaused.value && !isDragging && sliderRef.value) {
    // Kecepatan halus ~48px per detik
    subPixelCarry += (dt / 1000) * 48
    const wholePixels = Math.trunc(subPixelCarry)
    if (wholePixels >= 1) {
      sliderRef.value.scrollLeft += wholePixels
      subPixelCarry -= wholePixels
      checkScrollPosition()
    }
  }

  rafId = window.requestAnimationFrame(autoScrollStep)
}

const pauseTemporarily = (ms = 1200) => {
  isPaused.value = true
  if (buttonCooldownTimer) clearTimeout(buttonCooldownTimer)
  buttonCooldownTimer = setTimeout(() => {
    isPaused.value = false
  }, ms)
}

const scrollPrev = () => {
  const el = sliderRef.value
  if (!el) return
  pauseTemporarily(1400)
  const setWidth = getSingleSetWidth()
  const cardWidth = el.querySelector('a')?.offsetWidth || 420
  if (setWidth > 0 && el.scrollLeft < cardWidth + 24) {
    el.scrollLeft += setWidth
  }
  el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' })
}

const scrollNext = () => {
  const el = sliderRef.value
  if (!el) return
  pauseTemporarily(1400)
  normalizeLoopScroll()
  const cardWidth = el.querySelector('a')?.offsetWidth || 420
  el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
}

const startDrag = (e) => {
  if (!sliderRef.value) return
  isDragging = true
  hasDragged = false
  startX = e.pageX - sliderRef.value.offsetLeft
  scrollLeft = sliderRef.value.scrollLeft
}

const stopDrag = () => {
  isDragging = false
}

const handleMouseLeave = () => {
  isDragging = false
  isPaused.value = false
}

const resumeAfterTouch = () => {
  if (touchResumeTimer) clearTimeout(touchResumeTimer)
  touchResumeTimer = setTimeout(() => {
    isPaused.value = false
  }, 1200)
}

const onDrag = (e) => {
  if (!isDragging || !sliderRef.value) return
  const x = e.pageX - sliderRef.value.offsetLeft
  if (Math.abs(x - startX) > 6) {
    hasDragged = true
  }
  e.preventDefault()
  const walk = (x - startX) * 1.4
  const setWidth = getSingleSetWidth()
  let nextScroll = scrollLeft - walk
  if (setWidth > 0) {
    if (nextScroll < 0) nextScroll += setWidth
    if (nextScroll >= setWidth) nextScroll -= setWidth
  }
  sliderRef.value.scrollLeft = nextScroll
}

const handleCardClick = (e) => {
  if (hasDragged) {
    e.preventDefault()
    e.stopPropagation()
    hasDragged = false
  }
}

onMounted(() => {
  checkScrollPosition()
  rafId = window.requestAnimationFrame(autoScrollStep)
})

onUnmounted(() => {
  if (rafId) window.cancelAnimationFrame(rafId)
  if (buttonCooldownTimer) clearTimeout(buttonCooldownTimer)
  if (touchResumeTimer) clearTimeout(touchResumeTimer)
})
</script>
