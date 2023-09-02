<template>
  <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
    <p class="header-font">
      Was sind die Ursachen?
    </p>
    <div v-for="reason in REASONS" class="flex flex-row items-center justify-center mx-80 space-y-4 space-x-4 mt-8">
      <img :src="reason.image" alt="" class="w-[400px] h-[400px] rounded-lg shadow-2xl ">
      <div class="flex flex-col items-center justify-center">
        <p class="text-xl font-semibold">{{ reason.title }}</p>
        <p class="text-lg font-mono mt-2">{{ reason.content }}</p>
      </div>
    </div>
    <p class="text-2xl font-mono mx-80 mt-12">
      Die Bekämpfung von Littering erfordert eine umfassende Herangehensweise, die Bildung, Bewusstseinsbildung, angemessene Infrastruktur, rechtliche Durchsetzung und kulturelle Veränderungen umfasst. Nur wenn diese Ursachen angegangen werden, kann eine langfristige Verringerung von Littering erreicht werden.
    </p>
  </div>

</template>

<script setup>
import { REASONS } from "~/components/Causes/causes-items"

useSeoMeta({
  title: 'Ursachen | Littering'
})
</script>