<template>
  <div class="lg:mt-12 px-8 lg:px-32 flex flex-col items-center">
    <p class="font-bold text-3xl xl:text-[80px] lg:mb-3">
      Ursachen
    </p>
  </div>
  <div class="mt-6 bg-[#D9D9D9] px-24 text-2xl py-12">
    <p>
      Die Bekämpfung von Littering erfordert eine umfassende Herangehensweise, die Bildung, Bewusstseinsbildung, angemessene Infrastruktur, rechtliche Durchsetzung und kulturelle Veränderungen umfasst. Nur wenn diese Ursachen angegangen werden, kann eine langfristige Verringerung von Littering erreicht werden.
    </p>
  </div>
  <div class="lg:mt-12 px-8 lg:px-32 py-8 flex flex-col items-center">
    <div v-for="item in REASONS" class="flex flex-row mb-4 mt-4">
      <div class="flex-1">
        <img :src="item.image" alt="" class="rounded-lg shadow-lg">
      </div>
      <div class="flex flex-col flex-1 justify-center px-4">
        <p class="text-[30px] font-semibold">{{ item.title }}</p>
        <p class="text-lg">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { REASONS } from './causes-items'
</script>