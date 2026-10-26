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
        <div class="overflow-hidden rounded-2xl bg-stone shadow-sm">
          <transition 
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-98"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-98"
          >
            <div :key="activeIndex" class="relative aspect-[4/3] w-full overflow-hidden bg-stone/40">
              <img 
                :src="currentStage.image" 
                :alt="`${currentStage.name} stage`" 
                class="h-full w-full object-cover"
              >
              <div class="absolute bottom-4 left-4 rounded-lg bg-jungle/70 backdrop-blur-md px-3.5 py-1.5 text-xs text-white">
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
    description: 'We start with massing, roof form and how the site opens to garden and pool.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Drawings',
    description: 'Plans, sections and details that the construction team builds from directly.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Site',
    description: 'On-site progress from foundation to roof, handled by Padakarya Construction.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Interior',
    description: 'Timber, stone and lighting chosen together with the architecture.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Photo',
    description: 'The finished villa, photographed in daylight and at dusk.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Animation',
    description: 'Walkthroughs that let you move through the design before it is built.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  }
]

const currentStage = computed(() => stages[activeIndex.value])
</script>
