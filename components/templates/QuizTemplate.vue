<template>
  <div class="bg-light-wallpaper dark:bg-dark-wallpaper bg-cover bg-fixed items-center space-y-4 scrollbar-hide py-4" id="quiz-container">
    <div  class="text-center text-5xl font-sans border-2 mx-32 xs:mx-2 xs:text-2xl rounded-full font-semibold py-2 text-white backdrop-blur-md">QUIZ</div>
    <div v-if="!showResult" class="flex flex-row space-x-4 mx-2 xs:mx-2 border-4 rounded-md border-white backdrop-blur-md text-white items-center justify-center text-center">
      <div class="text-center justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
        </svg>
      </div>
      <div class="text-left mt-4">
        <p class="xl:text-3xl xs:text-xs">Beantworte alle Fragen um herauszufinden was wie eine Sorte von Verbraucher du bist.</p>
      </div>
    </div>
    <div v-if="showResult" class="w-full h-full text-center items-center  text-white mt-50 mb-80">
      <div class="flex flex-col items-center border-4 mx-2 rounded-md backdrop-blur-md py-2 px-2">
        <p class="text-3xl">DU BIST EIN</p>
        <img class="rounded-md h-1/3 w-1/3 xs:w-4/5 xs:h-4/5 mt-8 xs:mb-16 xs:m-16" :src="resultImage" alt="">
        <p class="text-3xl font-bold mt-8 animate-bounce">{{ resultMessage }}</p>
        <p class="w-auto mt-4 text-xs"><a :href="resultImage" target="_blank">CREDIT TO:<br /> {{ resultImage }}</a></p>
        <button class="border-4 py-4 px-4 mt-4 space-y-2 border-blue-900 bg-blue-900 text-xl rounded-md" @click="restartQuiz">NOCH EINMAL?</button>
      </div>
      
    </div>
    <div v-else class="h-auto w-full flex-col" id="question">
      <div class="flex-1 flex flex-col text-center space-y-4 mx-auto xs:mx-2 sm:mx-2 md:mx-2 shadow-2xl xl:mx-2 h-full w-auto xxs:scroll-px-px sm:mt-80 xs:mt-16 xs:mb-24 sm:mb-72">
        <div v-if="showQuestionNumb === 1" id="Frage 1" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl xs:text-lg">Was bedeutet "Littering"?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 xl:h-12 xs:h-auto xs:text-sm">
            <button :class="showAnswer1Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️</button>
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 xl:h-12 xs:h-auto xs:text-sm">
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 2" id="Frage 2" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Sotierst du deinen Müll?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="{'bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('A')">A: Ja</button>
            <button :class="{'bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-400 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('B')">B: Gelegentlich</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="{'bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('C')">C: Vielleicht 😇</button>
            <button :class="{'bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('D')">D: Nein</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 3" id="Frage 3" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Ist Littering legal?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer3Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('A')">A: Nein</button>
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('B')">B: Bestimmt</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('C')">C: Keine Ahnung</button>
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('D')">D: Ja</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 4" id="Frage 4" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Wie hoch können die Geldstrafen ausfallen?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('A')">A: 60€</button>
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('B')">B: 200€ - 350€</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer4Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('C')">C: 400€ - 15.000€</button>
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('D')">D: 5€ - 10€</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 5" id="Frage 5" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Welchem Biom schadet Littering besonders?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer5Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('A')">A: Ozeane</button>
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('B')">B: Wälder</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('C')">C: Wüste</button>
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('D')">D: Gletscher</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 6" id="Frage 6" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Wie viel Grundwasser verschmutzt ein Zigarettenstummel?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('A')">A: 5l - 10l</button>
            <button :class="showAnswer6Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('B')">B: 40l - 60l</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('C')">C: 30l - 50l</button>
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('D')">D: 42,56l - 61,91l</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 7" id="Frage 7" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('A')">A: München</button>
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('B')">B: Berlin</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer7Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('C')">C: Baden-Baden</button>
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('D')">D: Friesland</button>
          </div>
        </div>
        <div v-else-if="showQuestionNumb === 8" id="Frage 8" class="border-4 backdrop-blur-md text-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
          <p class="text-xl">Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('A')">A: ~60 Jahre</button>
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('B')">B: ~100 Jahre</button>
          </div>
          <div class="flex-1 flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('C')">C: ~250 Jahre</button>
            <button :class="showAnswer8Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('D')">D: ~400 Jahre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
 import { computed, ref } from 'vue'

 // data
 const resultImage = ref('')
 const resultMessage = ref('')
 const resultGif = ref('')

 const showQuestionNumb = ref(1)
 const showResult = ref(false)

 const points = ref(0)

 const question1Answered = ref(false)
 const question2Answered = ref(false)
 const question3Answered = ref(false)
 const question4Answered = ref(false)
 const question5Answered = ref(false)
 const question6Answered = ref(false)
 const question7Answered = ref(false)
 const question8Answered = ref(false)

 // methods
 const sleep = ((ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
 })

 async function checkResults() {
    if (question1Answered.value && question2Answered.value && question3Answered.value && question4Answered.value && question5Answered.value && question6Answered.value && question7Answered.value && question8Answered.value) {
        await sleep(2000)
        getResults()
    }
 }

 function getResults() {
    if (points.value > 8) {
        resultMessage.value = 'Naturmensch'
        resultImage.value = 'https://media1.giphy.com/media/fC1HPbYpydrqM/giphy.gif?cid=ecf05e47uqneou0mpvtzit6cobk7b2pw5fj43ln1ujtdfjo2&rid=giphy.gif&ct=g'
        resultGif.value = '1'
    } else if (points.value > 4) {
        resultMessage.value = 'Durchschnitts Vermüller'
        resultImage.value = 'https://media1.giphy.com/media/HG05lYgPrD1Re/giphy.gif?cid=ecf05e474l3gm4uzpn2h2dabvyqr6etny0gcj1vqpmg6vc42&rid=giphy.gif&ct=g'
        resultGif.value = "2"
    } else {
        resultMessage.value = 'Saubär!'
        resultImage.value = 'https://media0.giphy.com/media/3o6ZtpRoYe9wbyfcBi/giphy.gif?cid=ecf05e47uqneou0mpvtzit6cobk7b2pw5fj43ln1ujtdfjo2&rid=giphy.gif&ct=g'
        resultGif.value = '3'
    }
    showResult.value = true 
 }

 async function setShownQuestion(numb) {
    await sleep(1000)
    showQuestionNumb.value = numb
 }

 function restartQuiz() {
    points.value = 0
    showResult.value = false
    question1Answered.value = false
    question2Answered.value = false
    question3Answered.value = false
    question4Answered.value = false
    question5Answered.value = false
    question6Answered.value = false
    question7Answered.value = false
    question8Answered.value = false
 }

 function checkQuestion1(answer) {
    if (!question1Answered.value) {
        if (answer === 'A') {
            points.value += 1
        }
        question1Answered.value = true
        setShownQuestion(2)
        checkResults()
    }
 }

 function checkQuestion2(answer) {
    if (!question2Answered.value) {
        if (answer === 'A') {
            points.value += 3
        }
        if (answer === 'B') {
            points.value += 2
        }
        if (answer === 'C') {
            points.value += 1
        }
        question2Answered.value = true
        setShownQuestion(3)
        checkResults()
    }
 }

 function checkQuestion3(answer) {
    if (!question3Answered.value) {
        if (answer === 'A') {
            points.value += 1
        }
        question3Answered.value = true
        setShownQuestion(4)
        checkResults()
    }
 }

 function checkQuestion4(answer) {
    if (!question4Answered.value) {
        if (answer === 'C') {
            points.value += 1
        }
        question4Answered.value = true
        setShownQuestion(5)
        checkResults()
    }
 }

 function checkQuestion5(answer) {
    if (!question5Answered.value) {
        if (answer === 'A') {
            points.value += 1
        }
        question5Answered.value = true
        setShownQuestion(6)
        checkResults()
    }
 }
 function checkQuestion6(answer) {
    if (!question6Answered.value) {
        if (answer === 'B') {
            points.value += 1
        }
        question6Answered.value = true
        setShownQuestion(7)
        checkResults()
    }
 }
 function checkQuestion7(answer) {
    if (!question7Answered.value) {
        if (answer === 'C') {
            points.value += 1
        }
        question7Answered.value = true
        setShownQuestion(8)
        checkResults()
    }
 }
 function checkQuestion8(answer) {
    if (!question8Answered.value) {
        if (answer === 'D') {
            points.value += 1
        }
        question8Answered.value = true
        checkResults()
    }
 }

 // computed
 const showAnswer1Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question1Answered.value
    }
 })
 const showAnswer3Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question3Answered.value
    }
 })
 const showAnswer4Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question4Answered.value
    }
 })
 const showAnswer5Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question5Answered.value
    }
 })
 const showAnswer6Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question6Answered.value
    }
 })
 const showAnswer7Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question7Answered.value
    }
 })
 const showAnswer8Right = computed(() => {
    return {
        'border-green-900 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white' : question8Answered.value
    }
 })

 const showAnswer1Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question1Answered.value
    }
 })
 const showAnswer3Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question3Answered.value
    } 
 })
 const showAnswer4Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question4Answered.value
    }
 })
 const showAnswer5Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question5Answered.value
    }
 })
 const showAnswer6Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question6Answered.value
    } 
 })
 const showAnswer7Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question7Answered.value
    } 
 })
 const showAnswer8Wrong = computed(() => {
    return {
        'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white' : question8Answered.value
    }
 })
</script>

<style scoped>
#quiz-container {
  height: 83vh; 
  width: 100%;
}
#question {
  margin-top: 80px;
}

</style>