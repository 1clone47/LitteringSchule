<template>
  <div class="min-h-screen bg-[url('~/assets/images/background.png')] bg-cover bg-center flex flex-col">
    <Navbar />
    <div class="flex flex-col text-white items-center mt-28 mb-24">
      <p class="text-[100px] font-bold">LITTERING</p>
      <p class="text-3xl">Die neue Bedrohung?</p>
    </div>
    <div class="text-white flex-col flex items-center mt-24">
      <p>Scroll um mehr zu erfahren</p>
      <ChevronDownIcon class="w-28 h-28 text-white animate-bounce p-2" />
    </div>
  </div>
  <div class="min-h-screen bg-[#E7EBF0] flex flex-col py-4 px-8">
    <div class="flex flex-row space-x-8">
      <div class="flex flex-col justify-center space-y-3">
        <p class="font-bold text-4xl">Was ist Littering?</p>
        <p class="text-2xl">Littering bezieht sich auf das unachtsame Wegwerfen von Abfall oder Müll auf öffentlichen Plätzen oder in der Natur. Dies kann zum Beispiel Zigarettenstummel, Plastikflaschen, Papierverpackungen oder Essensreste umfassen. Littering ist ein weit verbreitetes Problem in vielen Städten und Gemeinden, da es nicht nur unansehnlich ist, sondern auch Umweltprobleme verursacht.</p>
      </div>
      <img src="~/assets/images/Home-Img1.png" class="w-[450px] h-[450px]" alt="">
    </div>
    <div class="flex flex-row space-x-8">
      <img src="~/assets/images/Home-Img2.png" class="w-[450px] h-[450px]" alt="">
      <div class="flex flex-col justify-center space-y-3">
        <p class="font-bold text-4xl">Warum eine Gefahr?</p>
        <p class="text-2xl">Wenn Abfälle auf öffentlichen Plätzen liegen gelassen werden, können sie zum Beispiel in Flüsse und Ozeane gelangen, wo sie die Tierwelt und die Umwelt schädigen können. Littering ist auch eine Form von Umweltverschmutzung und kann dazu beitragen, dass sich Krankheiten und Infektionen ausbreiten, wenn Abfall in der Nähe von Wohngebieten oder öffentlichen Einrichtungen aufbewahrt wird. Es ist wichtig, dass jeder Verantwortung übernimmt und Müll ordnungsgemäß entsorgt, um Littering und seine negativen Auswirkungen auf unsere Umwelt zu reduzieren.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import Navbar from '~/components/Navbar/home-index.vue'
</script>