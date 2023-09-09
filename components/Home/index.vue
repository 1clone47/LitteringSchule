<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl">
      Was ist Littering?
    </p>
    <label for="quiz-button" class="mt-4 mb-4 font-mono text-lg lg:text-xl lg:mb-8 lg:mt-8">
      ~ Probier unser Quiz aus ~
    </label>
    <NuxtLink to="/quiz" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      START
    </NuxtLink>
    <div class="flex flex-col lg:flex-row mt-4 lg:mt-8">
      <div class="flex-1 flex items-center">
        <img src="~/assets/images/home-image.jpg" class="rounded-lg lg:rotate-90 xl:rotate-0 shadow-xl xs:w-full xs:h-[350px]" alt="">
      </div>
      <p class="flex-1 py-2 px-4 flex font-mono items-center">
        Littering bezieht sich auf das unachtsame Wegwerfen von Abfall oder Müll auf öffentlichen Plätzen oder in der Natur.
        Dies kann zum Beispiel Zigarettenstummel, Plastikflaschen, Papierverpackungen oder Essensreste umfassen.
        Littering ist ein weit verbreitetes Problem in vielen Städten und Gemeinden, da es nicht nur unansehnlich ist, sondern auch Umweltprobleme verursacht.
        Wenn Abfälle auf öffentlichen Plätzen liegen gelassen werden, können sie zum Beispiel in Flüsse und Ozeane gelangen, wo sie die Tierwelt und die Umwelt schädigen können.
        Littering ist auch eine Form von Umweltverschmutzung und kann dazu beitragen, dass sich Krankheiten und Infektionen ausbreiten, wenn Abfall in der Nähe von Wohngebieten oder öffentlichen Einrichtungen aufbewahrt wird.
        Es ist wichtig, dass jeder Verantwortung übernimmt und Müll ordnungsgemäß entsorgt, um Littering und seine negativen Auswirkungen auf unsere Umwelt zu reduzieren.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightOnRectangleIcon } from "@heroicons/vue/24/solid";
</script>