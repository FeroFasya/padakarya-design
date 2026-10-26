<template>
  <div class="min-h-screen bg-bone text-ink selection:bg-pool selection:text-white">
    <!-- Header / Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Projects Section (Horizontal Scroll Slider) -->
      <ProjectsSlider />

      <!-- Process Stages (Interactive Tabs) -->
      <ProcessTabs />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Floating WhatsApp Action Button -->
    <FloatingWhatsapp />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSlider from './components/ProjectsSlider.vue'
import ProcessTabs from './components/ProcessTabs.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingWhatsapp from './components/FloatingWhatsapp.vue'
</script>
