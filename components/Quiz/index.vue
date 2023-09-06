<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl">
      Unser Quiz
    </p>
    <p class="mt-4 mb-8 font-mono text-lg lg:text-xl lg:mb-12 lg:mt-8">
      ~ Beantworte alle Fragen um herauszufinden, zu welcher Sorte Sie gehören ~
    </p>
    <!-- QUIZ -->
    <div v-for="question in QUESTIONS" class="w-full">
      <div v-if="currentQuestion === question.id" class="flex flex-col items-center w-full">
        <p class="mb-4 text-xl font-mono">{{ question.title }}</p>
        <!-- ANSWER BUTTONS  -->
        <ul class="flex flex-col items-center space-y-2 w-full">
          <li class="p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'A', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'A', 'bg-white': !showAnswer}" @click="checkInput('A', question.rightAnswer)">
            {{ question.questionA }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'B', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'B', 'bg-white': !showAnswer}" @click="checkInput('B', question.rightAnswer)">
            {{ question.questionB }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'C', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'C', 'bg-white': !showAnswer}" @click="checkInput('C', question.rightAnswer)">
            {{ question.questionC }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center" :class="{'bg-green-700 text-white': showAnswer && question.rightAnswer === 'D', 'bg-red-700 text-white': showAnswer && question.rightAnswer !== 'D', 'bg-white': !showAnswer}" @click="checkInput('D', question.rightAnswer)">
            {{ question.questionD }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QUESTIONS } from "~/components/Quiz/quiz-items"

const currentQuestion = ref(1)
const points = ref(0)
const showAnswer = ref(false)

const checkInput = (input, correctAnswer) => {
  showAnswer.value = true
  if (input === correctAnswer) {
    points.value += 1
  }
  setTimeout(nextQuestion, 3000)
}

const nextQuestion = () => {
  showAnswer.value = false
  currentQuestion.value += 1
}
</script>