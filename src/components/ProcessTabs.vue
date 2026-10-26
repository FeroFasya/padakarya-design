<template>
  <section id="process" class="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-14">
      <div class="md:col-span-5">
        <span class="text-xs uppercase tracking-widest text-ink/60 font-semibold mb-2 block">Workflow</span>
        <h2 class="display text-4xl leading-tight md:text-5xl">
          See the project before it exists.
        </h2>
        <p class="mt-5 max-w-md leading-relaxed text-ink/75 min-h-[4rem]">
          {{ currentStage.description }}
        </p>

        <!-- Tab List -->
        <div role="tablist" aria-label="Project stages" class="mt-8 flex flex-wrap gap-2">
          <button
            v-for="(stage, idx) in stages"
            :key="stage.name"
            @click="activeIndex = idx"
            type="button"
            role="tab"
            :aria-selected="activeIndex === idx"
            class="tab focus-ring rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-all hover:border-ink"
            :class="[
              activeIndex === idx 
                ? 'bg-jungle text-bone border-jungle shadow-sm' 
                : 'bg-transparent text-ink hover:bg-stone/50'
            ]"
          >
            {{ stage.name }}
          </button>
        </div>
      </div>

      <div class="md:col-span-7">
        <div class="overflow-hidden rounded-2xl bg-[#D8D2C5] shadow-sm border border-ink/10">
          <transition 
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-98"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-98"
          >
            <!-- Clean Neutral Placeholder for Process Stages -->
            <div :key="activeIndex" class="relative aspect-[4/3] w-full flex flex-col items-center justify-center p-8 text-center bg-[#D8D2C5]">
              <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/50 text-ink/70 shadow-inner mb-4">
                <!-- Dynamic Stage Icon -->
                <svg v-if="currentStage.name === 'Concept'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <svg v-else-if="currentStage.name === 'Drawings'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m18 2 4 4-12 12H6v-4L18 2z"/>
                  <path d="m14 6 4 4"/>
                </svg>
                <svg v-else-if="currentStage.name === 'Site'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 20h20M5 20V8l7-5 7 5v12M9 13h6M9 17h6"/>
                </svg>
                <svg v-else-if="currentStage.name === 'Interior'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 18v3M20 18v3M2 14h20M4 14V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"/>
                </svg>
                <svg v-else-if="currentStage.name === 'Photo'" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <svg v-else width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>

              <h4 class="display text-2xl text-ink font-medium">{{ currentStage.name }} Stage</h4>
              <p class="text-xs text-ink/60 mt-1.5 max-w-sm">Dokumen &amp; visualisasi resmi akan ditampilkan di sini</p>

              <div class="absolute bottom-4 left-4 rounded-lg bg-jungle/80 backdrop-blur-md px-3.5 py-1.5 text-xs text-white">
                Stage 0{{ activeIndex + 1 }} · {{ currentStage.name }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref(0)

const stages = [
  {
    name: 'Concept',
    description: 'We start with massing, roof form and how the site opens to garden and pool.'
  },
  {
    name: 'Drawings',
    description: 'Plans, sections and details that the construction team builds from directly.'
  },
  {
    name: 'Site',
    description: 'On-site progress from foundation to roof, handled by Padakarya Construction.'
  },
  {
    name: 'Interior',
    description: 'Timber, stone and lighting chosen together with the architecture.'
  },
  {
    name: 'Photo',
    description: 'The finished villa, photographed in daylight and at dusk.'
  },
  {
    name: 'Animation',
    description: 'Walkthroughs that let you move through the design before it is built.'
  }
]

const currentStage = computed(() => stages[activeIndex.value])
</script>
