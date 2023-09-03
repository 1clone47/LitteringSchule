<template>
  <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
    <p class="header-font">
      Unser Quiz
    </p>
    <p class="text-2xl font-mono xl:mx-80 lg:mx-60 mt-12 mb-24">
      Beantworte alle Fragen um herauszufinden zu was wie einer Sorte von Verbraucher Sie gehören
    </p>
    <div v-for="question in QUESTIONS" class="select-none">
      <div v-if="shownQuestion === question.id" class="flex flex-col items-center justify-center xl:mx-80 lg:mx-60 space-y-4 space-x-4">
        <p class="text-3xl font-mono">{{ question.title }}</p>
        <div class="flex flex-col space-y-4 w-[1500px]">
          <div class="button items-center" @click="show('A')">
            <GlobeEuropeAfricaIcon v-if="showQuestion && selectedQuestion === 'A'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionA }}
            </p>
          </div>
          <div class="button items-center" @click="show('B')">
            <GlobeEuropeAfricaIcon v-if="showQuestion && selectedQuestion === 'B'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionB }}
            </p>
          </div>
          <div class="button items-center" @click="show('C')">
            <GlobeEuropeAfricaIcon v-if="showQuestion && selectedQuestion === 'C'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionC }}
            </p>
          </div>
          <div class="button items-center" @click="show('D')">
            <GlobeEuropeAfricaIcon v-if="showQuestion && selectedQuestion === 'D'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionD }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="items-end justify-end flex lg: xl:ml-[340px]">
      <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 mt-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 flex items-end justify-end mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Nächste Frage
      </button>
    </div>
  </div>

</template>

<script setup>
import { QUESTIONS } from "~/components/Quiz/quiz-items"
import {ArrowRightOnRectangleIcon, GlobeEuropeAfricaIcon, MinusIcon} from "@heroicons/vue/24/solid"

useSeoMeta({
  title: 'Quiz | Littering'
})

const showQuestion = ref(false)
const selectedQuestion = ref()
const shownQuestion = ref(1)
const show = (value) => {
  selectedQuestion.value = value
  showQuestion.value = true
  shownQuestion.value += 1
  setTimeout(selectedQuestion.value = null, 5000)
}
</script>