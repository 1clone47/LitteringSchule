<template>
  <div class="py-24 px-8 lg:px-32 xl:px-64 flex flex-col items-center">
    <p class="font-bold text-3xl">
      Unser Quiz
    </p>
    <p class="mt-4 mb-4 font-mono text-lg lg:text-xl lg:mb-8 lg:mt-8">
      ~ Beantworte alle Fragen um herauszufinden, zu welcher Sorte Sie gehören ~
    </p>
    <!-- QUIZ -->
    <div v-for="question in QUESTIONS" class="w-full">
      <div v-if="" class="flex flex-col items-center w-full">
        <p class="mb-4 text-xl font-mono">{{ question.title }}</p>
        <!-- ANSWER BUTTONS  -->
        <ul class="flex flex-col items-center space-y-2 w-full">
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center">
            {{ question.questionA }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center">
            {{ question.questionB }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center">
            {{ question.questionC }}
          </li>
          <li class="bg-white p-4 rounded-lg shadow-lg w-full flex justify-center">
            {{ question.questionD }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QUESTIONS } from "~/components/Quiz/quiz-items"
</script>