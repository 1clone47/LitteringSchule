<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl">
      Was sind die Ursachen?
    </p>
    <p class="mt-4 mb-4 font-mono">
      Die Bekämpfung von Littering erfordert eine umfassende Herangehensweise, die Bildung, Bewusstseinsbildung, angemessene Infrastruktur, rechtliche Durchsetzung und kulturelle Veränderungen umfasst. Nur wenn diese Ursachen angegangen werden, kann eine langfristige Verringerung von Littering erreicht werden.
    </p>
    <div v-for="reason in REASONS" class="mt-8 flex lg:flex-row flex-col">
      <img :src="reason.image" class="rounded-lg shadow-xl lg:h-[450px] lg:w-[450px] h-[250px] w-full mb-4" alt="">
      <div class="flex flex-col items-center justify-center px-4">
        <p class="text-xl font-semibold">
          {{ reason.title }}
        </p>
        <p class="font-mono mt-2">
          {{ reason.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { REASONS } from '~/components/Causes/causes-items'

useSeoMeta({
  title: 'Ursachen | Littering'
})
</script>