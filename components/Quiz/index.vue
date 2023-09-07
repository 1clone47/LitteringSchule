<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl">
      Unser Quiz
    </p>
    <p class="mt-4 mb-8 font-mono text-lg lg:text-xl lg:mb-12 lg:mt-8">
      ~ Beantworte alle Fragen um herauszufinden, zu welcher Sorte Sie gehören ~
    </p>
    <!-- QUIZ OR RESULT -->
    <div v-if="!showResult" v-for="question in QUESTIONS" class="w-full select-none">
      <div v-if="currentQuestion === question.id" class="flex flex-col items-center w-full">
        <p class="mb-4 text-xl font-mono">{{ question.title }}</p>
        <!-- ANSWER BUTTONS  -->
        <ul class="flex flex-col items-center space-y-2 w-full">
          <li class="p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'A', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'A', 'bg-white': !showAnswer}" @click="checkInput('A', question.rightAnswer)">
            {{ question.questionA }}
          </li>
          <li class="p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'B', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'B', 'bg-white': !showAnswer}" @click="checkInput('B', question.rightAnswer)">
            {{ question.questionB }}
          </li>
          <li class="p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'C', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'C', 'bg-white': !showAnswer}" @click="checkInput('C', question.rightAnswer)">
            {{ question.questionC }}
          </li>
          <li class="p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'D', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'D', 'bg-white': !showAnswer}" @click="checkInput('D', question.rightAnswer)">
            {{ question.questionD }}
          </li>
        </ul>
        <p class="font-mono mt-4">~ Frage {{ currentQuestion }} / 10 ~</p>
      </div>
    </div>
    <div v-else class="w-full select-none flex flex-col items-center">
      <div v-if="points >= 10" class="flex-1 flex flex-col items-center">
        <p class="text-lg font-mono">Du bist ein</p>
        <p class="text-2xl font-mono">~ Allstar ~</p>
        <a href="https://giphy.com/gifs/animation-loop-pastoral-3o6ZtiWdaoag4JnMUo" target="_blank" class="text-sm font-mono mt-2 mb-2 hover:underline">
          Credit to: @jasonclarke on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/3o6ZtiWdaoag4JnMUo/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else-if="points > 7" class="flex-1 flex flex-col items-center">
        <p class="text-lg font-mono">Du bist ein</p>
        <p class="text-2xl font-mono">~ Allrounder ~</p>
        <a href="https://giphy.com/gifs/animation-loop-cartoon-3o7TKIyZgIr2SMOyEo" target="_blank" class="text-sm font-mono mt-2 mb-2 hover:underline">
          Credit to: @jasonclarke on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/3o7TKIyZgIr2SMOyEo/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else-if="points > 4" class="flex-1 flex flex-col items-center">
        <p class="text-lg font-mono">Du bist der</p>
        <p class="text-2xl font-mono">~ Durchschnitt ~</p>
        <a href="https://giphy.com/gifs/ugly-patlap-pat-lap-0LYFyMMIg292GYIOSN?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=" target="_blank" class="text-sm font-mono mt-2 mb-2 hover:underline">
          Credit to: @patlapofficial
        </a>
        <img src="https://media.giphy.com/media/0LYFyMMIg292GYIOSN/giphy-downsized-large.gif" class="rounded-lg shadow-xl" alt="">
      </div>
      <div v-else class="flex-1 flex flex-col items-center">
        <p class="text-lg font-mono">Du bist ein</p>
        <p class="text-2xl font-mono">~ Saubär ~</p>
        <a href="https://giphy.com/gifs/beastieboys-beastie-boys-triple-trouble-MaOzIpgonH8WsNr1gC" target="_blank" class="text-sm font-mono mt-2 mb-2 hover:underline">
          Credit to: @beastieboys on Giphy.com
        </a>
        <img src="https://media.giphy.com/media/MaOzIpgonH8WsNr1gC/giphy.gif" class="rounded-lg shadow-xl" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { QUESTIONS } from "~/components/Quiz/quiz-items"

const currentQuestion = ref(1)
const points = ref(0)
const showAnswer = ref(false)
const showResult = ref(false)

const checkInput = (input, correctAnswer) => {
  showAnswer.value = true
  if (input === correctAnswer) {
    points.value += 1
  }
  setTimeout(nextQuestion, 2000)
}

const nextQuestion = () => {
  currentQuestion.value += 1
  if (currentQuestion.value > 10) {
    showResult.value = true
  }
  showAnswer.value = false
}
</script>