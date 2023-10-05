<template>
  <div class="lg:mt-12 px-8 lg:px-32 flex flex-col items-center">
    <p class="font-bold text-3xl xl:text-[80px] lg:mb-3">
      Folgen
    </p>
  </div>
  <div class="mt-6 bg-[#D9D9D9] px-24 text-2xl py-12">
    <p>
      Die Konsequenzen von Littering sind vielfältig und weitreichend. Sie beeinflussen die Umwelt, die Gesundheit, die Wirtschaft und das soziale Gefüge einer Gesellschaft. Daher ist es entscheidend, das Bewusstsein für diese Konsequenzen zu schärfen und Maßnahmen zu ergreifen, um Littering zu verhindern und zu reduzieren.
    </p>
  </div>
  <div class="lg:mt-12 px-8 lg:px-32 py-8 flex flex-col items-center">
    <div v-for="item in CONSEQUENCES" class="flex flex-row mb-4 mt-4">
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
import { CONSEQUENCES } from './consequences-item'
</script>