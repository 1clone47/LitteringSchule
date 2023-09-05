<template>
    <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
      <p class="header-font">
        Was sind die Folgen?
      </p>
      <p class="text-2xl font-mono 2xl:mx-80 xl:mx-40 mt-12">
        Die Konsequenzen von Littering sind vielfältig und weitreichend. Sie beeinflussen die Umwelt, die Gesundheit, die Wirtschaft und das soziale Gefüge einer Gesellschaft. Daher ist es entscheidend, das Bewusstsein für diese Konsequenzen zu schärfen und Maßnahmen zu ergreifen, um Littering zu verhindern und zu reduzieren.
      </p>
      <div v-for="reason in REASONS" class="flex md:flex-col lg:flex-row items-center justify-center 2xl:mx-80 xl:mx-40 space-y-4 space-x-4 mt-12">
        <img :src="reason.image" alt="" class="lg:w-full xl:w-[450px] h-[450px] rounded-lg shadow-2xl">
        <div class="flex flex-col items-center justify-center py-4">
          <p class="text-xl font-semibold">{{ reason.title }}</p>
          <p class="text-lg font-mono mt-2">{{ reason.content }}</p>
        </div>
      </div>
    </div>
  
  </template>
  
  <script setup>
  import { REASONS } from '~/components/Consequences/consequences-item'
  
  useSeoMeta({
    title: 'Folgen | Littering'
  })
  </script>
