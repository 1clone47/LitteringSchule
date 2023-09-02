<template>
<div class="py-24">
  <p class="header-font flex justify-center">
    Was ist Littering?
  </p>
  <div class="flex flex-col mx-80 items-center space-y-4 justify-center mt-12 text-2xl font-mono">
    <p>Probiere das Quiz aus um herauszufinden was wie ein Verbraucher Sie sind.</p>
    <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      <ArrowRightOnRectangleIcon class="w-8 h-8" />
    </button>
  </div>
  <div class="flex flex-col items-center mt-12 mx-80">
    <div>
      <GlobeEuropeAfricaIcon class="xl:w-[400px] xl:h-[400px]" />
    </div>
    <p class="flex-1 mt-4 flex items-center xl:text-2xl lg:text-sm font-mono">
      Littering bezieht sich auf das unachtsame Wegwerfen von Abfall oder Müll auf öffentlichen Plätzen oder in der Natur.
      <br />
      Dies kann zum Beispiel Zigarettenstummel, Plastikflaschen, Papierverpackungen oder Essensreste umfassen.
      <br />
      Littering ist ein weit verbreitetes Problem in vielen Städten und Gemeinden, da es nicht nur unansehnlich ist, sondern auch Umweltprobleme verursacht.
      <br />
      Wenn Abfälle auf öffentlichen Plätzen liegen gelassen werden, können sie zum Beispiel in Flüsse und Ozeane gelangen, wo sie die Tierwelt und die Umwelt schädigen können.
      <br />
      Littering ist auch eine Form von Umweltverschmutzung und kann dazu beitragen, dass sich Krankheiten und Infektionen ausbreiten, wenn Abfall in der Nähe von Wohngebieten oder öffentlichen Einrichtungen aufbewahrt wird.
      <br />
      Es ist wichtig, dass jeder Verantwortung übernimmt und Müll ordnungsgemäß entsorgt, um Littering und seine negativen Auswirkungen auf unsere Umwelt zu reduzieren.
    </p>
  </div>
</div>
</template>

<script setup>
import { GlobeEuropeAfricaIcon, ArrowRightOnRectangleIcon } from "@heroicons/vue/24/solid";
</script>