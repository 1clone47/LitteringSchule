<template>
  <div class="lg:mt-12 px-8 lg:px-32 flex flex-col items-center">
    <p class="font-bold text-3xl xl:text-[80px] lg:mb-3">
      Maßnahmen
    </p>
  </div>
  <div class="mt-6 bg-[#D9D9D9] px-24 text-2xl py-12">
    <p>
      Die erfolgreiche Bekämpfung von Littering erfordert eine Kombination dieser Maßnahmen und eine kontinuierliche Anstrengung auf individueller, gemeinschaftlicher und gesellschaftlicher Ebene. Die Sensibilisierung der Menschen für die Konsequenzen von Littering und die Förderung verantwortungsvollen Verhaltens sind Schlüsselaspekte im Kampf gegen dieses Umweltproblem.
    </p>
  </div>
  <div class="lg:mt-12 px-8 lg:px-32 py-8 flex flex-col items-center">
    <div v-for="item in MEASURES" class="flex flex-row mb-4 mt-4">
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
import { MEASURES } from "./measures-item";
</script>