<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl flex justify-center">
      Was können wir tun?
    </p>
    <p class="mt-4 mb-4 font-mono">
      Die erfolgreiche Bekämpfung von Littering erfordert eine Kombination dieser Maßnahmen und eine kontinuierliche Anstrengung auf individueller, gemeinschaftlicher und gesellschaftlicher Ebene. Die Sensibilisierung der Menschen für die Konsequenzen von Littering und die Förderung verantwortungsvollen Verhaltens sind Schlüsselaspekte im Kampf gegen dieses Umweltproblem.
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
import { REASONS } from '~/components/Consequences/consequences-item'

useSeoMeta({
  title: 'Maßnahmen | Littering'
})
</script>