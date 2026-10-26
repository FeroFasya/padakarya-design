<template>
  <a 
    :href="`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Padakarya Design, I would like to discuss a project.')}`" 
    target="_blank" 
    rel="noopener" 
    aria-label="Chat on WhatsApp" 
    class="focus-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
  >
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.3L4 29l8-2.1c1.2.6 2.600.9 4 .9 6.600 0 12-5.300 12-11.900C28 8.300 22.600 3 16 3zm0 21.700c-1.300 0-2.500-.3-3.600-.9l-.5-.3-4.700 1.200 1.300-4.600-.3-.5a9 9 0 0 1-1.400-4.800C6.800 9.800 10.900 5.800 16 5.800s9.200 4 9.200 9-4.100 9.900-9.200 9.900zm5-6.700c-.3-.1-1.600-.8-1.900-.9-.3-.1-.5-.1-.7.1l-.9 1.100c-.2.200-.3.200-.6.100-1.600-.8-2.700-1.400-3.700-3.200-.3-.5.300-.5.800-1.500.1-.2 0-.4 0-.5l-.9-2.100c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.3.300-1 1-1 2.400s1 2.800 1.200 3c.1.200 2 3.100 4.900 4.300 1.800.8 2.500.8 3.400.7.600-.1 1.600-.7 1.900-1.300.2-.6.200-1.100.2-1.300-.1-.1-.3-.2-.6-.3z"/>
    </svg>
  </a>
</template>

<script setup>
// Nomor resmi Mas Putu
const waNumber = '6285155203224'
</script>
