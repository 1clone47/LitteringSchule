<template>
  <div class="flex flex-col items-center bg-[#E7EBF0] py-24">
    <p class="header-font">
      Unser Quiz
    </p>
    <p class="text-2xl font-mono xl:mx-80 lg:mx-60 mt-12 mb-24">
      Beantworte alle Fragen um herauszufinden zu was wie einer Sorte von Verbraucher Sie gehören
    </p>
    <div v-if="!showResult" v-for="question in QUESTIONS" class="select-none">
      <div v-if="shownQuestion === question.id" class="flex flex-col items-center justify-center xl:mx-80 lg:mx-60 space-y-4 space-x-4">
        <p class="text-3xl font-mono mb-4">{{ question.title }}</p>
        <div class="flex flex-col space-y-4 w-[1500px]">
          <div class="button items-center" :class="{ 'bg-green-500 border-green-500' : showSolution && question.rightAnswer === 'A', 'bg-red-500 border-red-500' : showSolution && question.rightAnswer !== 'A', 'bg-white border-white shadow-lg' : !showSolution }" @click="resolveInput('A', question.rightAnswer)">
            <CheckIcon v-if="showSolution && question.rightAnswer === 'A'" class="w-6 h-6" />
            <XMarkIcon v-else-if="showSolution && question.rightAnswer !== 'A'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionA }}
            </p>
          </div>
          <div class="button items-center" :class="{ 'bg-green-500 border-green-500' : showSolution && question.rightAnswer === 'B', 'bg-red-500 border-red-500' : showSolution && question.rightAnswer !== 'B', 'bg-white border-white shadow-lg' : !showSolution }" @click="resolveInput('B', question.rightAnswer)">
            <CheckIcon v-if="showSolution && question.rightAnswer === 'B'" class="w-6 h-6" />
            <XMarkIcon v-else-if="showSolution && question.rightAnswer !== 'B'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionB }}
            </p>
          </div>
          <div class="button items-center" :class="{ 'bg-green-500 border-green-500' : showSolution && question.rightAnswer === 'C', 'bg-red-500 border-red-500' : showSolution && question.rightAnswer !== 'C', 'bg-white border-white shadow-lg' : !showSolution }" @click="resolveInput('C', question.rightAnswer)">
            <CheckIcon v-if="showSolution && question.rightAnswer === 'C'" class="w-6 h-6" />
            <XMarkIcon v-else-if="showSolution && question.rightAnswer !== 'C'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionC }}
            </p>
          </div>
          <div class="button items-center" :class="{ 'bg-green-500 border-green-500' : showSolution && question.rightAnswer === 'D', 'bg-red-500 border-red-500' : showSolution && question.rightAnswer !== 'D', 'bg-white border-white shadow-lg' : !showSolution }" @click="resolveInput('D', question.rightAnswer)">
            <CheckIcon v-if="showSolution && question.rightAnswer === 'D'" class="w-6 h-6" />
            <XMarkIcon v-else-if="showSolution && question.rightAnswer !== 'D'" class="w-6 h-6" />
            <MinusIcon v-else class="w-6 h-6" />
            <p class="flex-1 flex items-center justify-center">
              {{ question.questionD }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="select-none flex flex-col items-center justify-center xl:mx-80 lg:mx-60 font-mono text-2xl">
      <div v-if="points >= 10" class="flex flex-col items-center">
        <p class="mb-4">
          ~ Allstar ~
        </p>
        <a href="https://giphy.com/gifs/animation-loop-pastoral-3o6ZtiWdaoag4JnMUo" target="_blank" class="text-sm mb-2 hover:underline">
          Credit to: @jasonclarke on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/3o6ZtiWdaoag4JnMUo/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else-if="points >= 7" class="flex flex-col items-center">
        <p class="mb-4">
          ~ Allrounder ~
        </p>
        <a href="https://giphy.com/gifs/animation-loop-cartoon-3o7TKIyZgIr2SMOyEo" target="_blank" class="text-sm mb-2 hover:underline">
          Credit to: @jasonclarke on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/3o7TKIyZgIr2SMOyEo/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else-if="points >= 4" class="flex flex-col items-center">
        <p class="mb-4">
          ~ Durschnittlicher Vermüller ~
        </p>
        <a href="https://giphy.com/gifs/ugly-patlap-pat-lap-0LYFyMMIg292GYIOSN?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=" target="_blank" class="text-sm mb-2 hover:underline">
          Credit to: @patlapofficial
        </a>
        <img src="https://media.giphy.com/media/0LYFyMMIg292GYIOSN/giphy-downsized-large.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else class="flex flex-col items-center">
        <p class="mb-4">
          ~ Saubär ~
        </p>
        <a href="https://giphy.com/gifs/beastieboys-beastie-boys-triple-trouble-MaOzIpgonH8WsNr1gC" target="_blank" class="text-sm mb-2 hover:underline">
          Credit to: @beastieboys on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/MaOzIpgonH8WsNr1gC/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
    </div>
    <p v-if="!showResult" class="font-mono mt-4">~ Frage {{ currentQuestion }} / 10 ~</p>
    <p v-else class="font-mono mt-4">~ Ergebnis ~</p>
  </div>

</template>

<script setup>
import { QUESTIONS } from "~/components/Quiz/quiz-items"
import { CheckIcon, XMarkIcon, MinusIcon } from "@heroicons/vue/24/solid"

useSeoMeta({
  title: 'Quiz | Littering'
})

const showSolution = ref(false)
const points = ref(10)
const shownQuestion = ref(1)
const currentQuestion = ref(1)
const showResult = ref(true)

const resolveInput = (value, correctAnswer) => {
  showSolution.value = true
  if (value === correctAnswer) {
    points.value += 1
  }
  setTimeout(nextQuestion, 1000)
}

const nextQuestion = () => {
  currentQuestion.value += 1
  showSolution.value = false
  shownQuestion.value += 1
  if (currentQuestion.value > 10) {
    showResult.value = true
  }
}
</script>