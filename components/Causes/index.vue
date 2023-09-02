<template>
  <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
    <p class="header-font">
      Was sind die Ursachen?
    </p>
    <p class="text-2xl font-mono xl:mx-80 lg:mx-40 mt-12">
      Die Bekämpfung von Littering erfordert eine umfassende Herangehensweise, die Bildung, Bewusstseinsbildung, angemessene Infrastruktur, rechtliche Durchsetzung und kulturelle Veränderungen umfasst. Nur wenn diese Ursachen angegangen werden, kann eine langfristige Verringerung von Littering erreicht werden.
    </p>
    <div v-for="reason in REASONS" class="flex lg:flex-col xl:flex-row items-center justify-center xl:mx-80 lg:mx-40 space-y-4 space-x-4 mt-12">
      <img :src="reason.image" alt="" class="lg:w-full xl:w-[450px] h-[450px] rounded-lg shadow-2xl ">
      <div class="flex flex-col items-center justify-center py-4">
        <p class="text-xl font-semibold">{{ reason.title }}</p>
        <p class="text-lg font-mono mt-2">{{ reason.content }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { REASONS } from "~/components/Causes/causes-items"

useSeoMeta({
  title: 'Ursachen | Littering'
})
</script>