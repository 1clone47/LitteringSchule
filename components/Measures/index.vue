<template>
  <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
    <p class="header-font">
      Wie können wir gegensteuern?
    </p>
    <p class="text-2xl font-mono xl:mx-80 lg:mx-60 mt-12">
      Die erfolgreiche Bekämpfung von Littering erfordert eine Kombination dieser Maßnahmen und eine kontinuierliche Anstrengung auf individueller, gemeinschaftlicher und gesellschaftlicher Ebene. Die Sensibilisierung der Menschen für die Konsequenzen von Littering und die Förderung verantwortungsvollen Verhaltens sind Schlüsselaspekte im Kampf gegen dieses Umweltproblem.
    </p>
    <div v-for="measure in MEASURES" class="flex md:flex-col lg:flex-row items-center justify-center xl:mx-80 lg:mx-60 space-y-4 space-x-4 mt-12">
      <img :src="measure.image" alt="" class="lg:w-full xl:w-[450px] h-[450px] rounded-lg shadow-2xl">
      <div class="flex flex-col items-center justify-center py-4">
        <p class="text-xl font-semibold">{{ measure.title }}</p>
        <p class="text-lg font-mono mt-2">{{ measure.content }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { MEASURES } from "~/components/Measures/measures-item"

useSeoMeta({
  title: 'Maßnahmen | Littering'
})
</script>