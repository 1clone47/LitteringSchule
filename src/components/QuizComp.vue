<script>
export default {
  data () {
    return {
      showQuestionNumb: 1,
      showResult: false,
      resultMessage: '',
      resultImage: '',
      resultGif: '',
      enableEasterEgg: false,
      points: 0,
      question1Answered: false,
      question2Answered: false,
      question3Answered: false,
      question4Answered: false,
      question5Answered: false,
      question6Answered: false,
      question7Answered: false,
      question8Answered: false,
    }
  },
  computed: {
    showAnswer1Wrong() {
        return {
          'border-red-900': this.question1Answered,
          'bg-gradient-to-r': this.question1Answered,
          'from-red-500': this.question1Answered,
          'via-red-700': this.question1Answered,
          'to-red-500': this.question1Answered,
          'text-white': this.question1Answered
        }
      },
    showAnswer1Right() {
      return {
        'border-green-900': this.question1Answered,
        'bg-gradient-to-r': this.question1Answered,
        'from-green-600': this.question1Answered,
        'via-green-700': this.question1Answered,
        'to-green-600': this.question1Answered,
        'text-white': this.question1Answered
      }
    },

    showAnswer3Wrong() {
      return {
        'border-red-900': this.question3Answered,
        'bg-gradient-to-r': this.question3Answered,
        'from-red-500': this.question3Answered,
        'via-red-700': this.question3Answered,
        'to-red-500': this.question3Answered,
        'text-white': this.question3Answered
      }
    },
    showAnswer3Right() {
      return {
        'border-green-900': this.question3Answered,
        'bg-gradient-to-r': this.question3Answered,
        'from-green-600': this.question3Answered,
        'via-green-700': this.question3Answered,
        'to-green-600': this.question3Answered,
        'text-white': this.question3Answered
      }
    },

    showAnswer4Wrong() {
      return {
        'border-red-900': this.question4Answered,
        'bg-gradient-to-r': this.question4Answered,
        'from-red-500': this.question4Answered,
        'via-red-700': this.question4Answered,
        'to-red-500': this.question4Answered,
        'text-white': this.question4Answered
      }
    },
    showAnswer4Right() {
      return {
        'border-green-900': this.question4Answered,
        'bg-gradient-to-r': this.question4Answered,
        'from-green-600': this.question4Answered,
        'via-green-700': this.question4Answered,
        'to-green-600': this.question4Answered,
        'text-white': this.question4Answered
      }
    },

    showAnswer5Wrong() {
      return {
        'border-red-900': this.question5Answered,
        'bg-gradient-to-r': this.question5Answered,
        'from-red-500': this.question5Answered,
        'via-red-700': this.question5Answered,
        'to-red-500': this.question5Answered,
        'text-white': this.question5Answered
      }
    },
    showAnswer5Right() {
      return {
        'border-green-900': this.question5Answered,
        'bg-gradient-to-r': this.question5Answered,
        'from-green-600': this.question5Answered,
        'via-green-700': this.question5Answered,
        'to-green-600': this.question5Answered,
        'text-white': this.question5Answered
      }
    },
    showAnswer6Wrong() {
      return {
        'border-red-900': this.question6Answered,
        'bg-gradient-to-r': this.question6Answered,
        'from-red-500': this.question6Answered,
        'via-red-700': this.question6Answered,
        'to-red-500': this.question6Answered,
        'text-white': this.question6Answered
      }
    },
    showAnswer6Right() {
      return {
        'border-green-900': this.question6Answered,
        'bg-gradient-to-r': this.question6Answered,
        'from-green-600': this.question6Answered,
        'via-green-700': this.question6Answered,
        'to-green-600': this.question6Answered,
        'text-white': this.question6Answered
      }
    },
    showAnswer7Wrong() {
      return {
        'border-red-900': this.question7Answered,
        'bg-gradient-to-r': this.question7Answered,
        'from-red-500': this.question7Answered,
        'via-red-700': this.question7Answered,
        'to-red-500': this.question7Answered,
        'text-white': this.question7Answered
      }
    },
    showAnswer7Right() {
      return {
        'border-green-900': this.question7Answered,
        'bg-gradient-to-r': this.question7Answered,
        'from-green-600': this.question7Answered,
        'via-green-700': this.question7Answered,
        'to-green-600': this.question7Answered,
        'text-white': this.question7Answered
      }
    },
    showAnswer8Wrong() {
      return {
        'border-red-900': this.question8Answered,
        'bg-gradient-to-r': this.question8Answered,
        'from-red-500': this.question8Answered,
        'via-red-700': this.question8Answered,
        'to-red-500': this.question8Answered,
        'text-white': this.question8Answered
      }
    },
    showAnswer8Right() {
      return {
        'border-green-900': this.question8Answered,
        'bg-gradient-to-r': this.question8Answered,
        'from-green-600': this.question8Answered,
        'via-green-700': this.question8Answered,
        'to-green-600': this.question8Answered,
        'text-white': this.question8Answered
      }
    },
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async checkResults() {
      if (this.question1Answered && this.question2Answered && this.question3Answered && this.question4Answered && this.question5Answered && this.question6Answered && this.question7Answered && this.question8Answered){
        await this.sleep(2000)
        this.getResults()
      }
          },
    restartQuiz() {
      this.points = 0
      this.showResult = false
      this.question1Answered = false
      this.question2Answered = false
      this.question3Answered = false
      this.question4Answered = false
      this.question5Answered = false
      this.question6Answered = false
      this.question7Answered = false
      this.question8Answered = false
    },
    getResults () {
        if (this.points > 8) {
          this.resultMessage = 'Naturmensch'
          this.resultImage = 'https://media1.giphy.com/media/fC1HPbYpydrqM/giphy.gif?cid=ecf05e47uqneou0mpvtzit6cobk7b2pw5fj43ln1ujtdfjo2&rid=giphy.gif&ct=g'
          this.resultGif = '1'
        } else if (this.points > 4) {
          this.resultMessage = 'Durchschnitts Vermüller'
          this.resultImage = 'https://media1.giphy.com/media/HG05lYgPrD1Re/giphy.gif?cid=ecf05e474l3gm4uzpn2h2dabvyqr6etny0gcj1vqpmg6vc42&rid=giphy.gif&ct=g'
          this.resultGif = '2'
        } else {
          this.resultMessage = 'Saubär!'
          this.resultImage = 'https://media0.giphy.com/media/3o6ZtpRoYe9wbyfcBi/giphy.gif?cid=ecf05e47uqneou0mpvtzit6cobk7b2pw5fj43ln1ujtdfjo2&rid=giphy.gif&ct=g'
          this.resultGif = '3'
        }
        this.showResult = true
    },
    triggerEasterEgg () {
       // this.enableEasterEgg = !this.enableEasterEgg
    },
    async setShownQuestion(numb) {
      await this.sleep(1000)
      this.showQuestionNumb = numb
    },
    checkQuestion1 (answer) {
      if (!this.question1Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question1Answered = true
        this.setShownQuestion(2)
        this.checkResults()
      }
    },
    checkQuestion2 (answer) {
      if (!this.question2Answered) {
        if (answer === 'A') {
          this.points += 3
        } else if (answer === 'B') {
          this.points += 2
        } else if (answer === 'C') {
          this.points += 1
        } else {
          this.points += 0
        }
        this.question2Answered = true
        this.setShownQuestion(3)
        this.checkResults()
      }
    },
    checkQuestion3 (answer) {
      if (!this.question3Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question3Answered = true
        this.setShownQuestion(4)
        this.checkResults()
      }
    },
    checkQuestion4 (answer) {
      if (!this.question4Answered) {
        if (answer === 'C') {
          this.points += 1
        }
        this.question4Answered = true
        this.setShownQuestion(5)
        this.checkResults()
      }
    },
    checkQuestion5 (answer) {
      if (!this.question5Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question5Answered = true
        this.setShownQuestion(6)
        this.checkResults()
      }
    },
    checkQuestion6 (answer) {
      if (!this.question6Answered) {
        if (answer === 'B') {
          this.points += 1
        }
        this.question6Answered = true
        this.setShownQuestion(7)
        this.checkResults()
      }
    },
    checkQuestion7 (answer) {
      if (!this.question7Answered) {
        if (answer === 'C') {
          this.points += 1
        }
        this.question7Answered = true
        this.setShownQuestion(8)
        this.checkResults()
      }
    },
    checkQuestion8 (answer) {
      if (!this.question8Answered) {
        if (answer === 'D') {
          this.points += 1
        }
        this.question8Answered = true
        this.checkResults()
      }
    }
  }
}
</script>

<template>
<div id="container">
  
  <div id="transparent-background" class="flex flex-row rounded-md mx-4 items-center text-center justify-center mt-8">
    <div class="items-start">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-28 h-28 xs:w-20 xs:h-20 animate-pulse">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </div>
    <div class="ml-4">
      <p class="text-4xl font-bold xs:text-xl mr-2">Unser Quiz</p>
      <p class="text-3xl xl:font-semibold xs:text-sm mr-2">Welcher Typ von Verbraucher bist du?</p>
    </div>
  </div>

  <div id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Was versteht man unter dem Begriff Littering?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md" @click="checkQuestion1('A')">
        Unangemessene Entsorgen von Abfällen
      </button>
      <button id="quiz-question" class="flex-1 rounded-md" @click="checkQuestion1('B')">
        Einmaliges benutzen von Mehrwegprodukten
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md" @click="checkQuestion1('C')">
        Entsorgen von Abfällen neben Autobahnen
      </button>
      <button id="quiz-question" class="flex-1 rounded-md" @click="checkQuestion1('D')">
        Achtlos Müll aus dem Autofenster bei voller Fahrt werfen
      </button>
    </div>
  </div>

  <div v-if="question1Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
  <p class="text-3xl xs:text-base font-semibold">Sotierst du deinen Müll?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md" @click="checkQuestion2">
        Ja
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Nein
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Vielleicht
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Gelegentlich
      </button>
    </div>
  </div>

  <div v-else-if="question2Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Ist Littering strafbar?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Nein
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Bestimmt
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Keine Ahnung
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Ja
      </button>
    </div>
  </div>

  <div v-else-if="question3Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Wie hoch können die Geldstrafen ausfallen?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        60,- €
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        200,- € bis 350,- € 
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        400,- € bis 15.000,- €
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        5,- € bis 10,- €
      </button>
    </div>
  </div>

  <div v-else-if="question4Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Welchem Biom schadet Littering besonders?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Ozeane
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Wälder
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Wüste
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Gletscher
      </button>
    </div>
  </div>

  <div v-else-if="question5Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Wie viel Grundwasser verschmutzt ein Zigarettenstummel?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        5l bis 10l
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        40l bis 60l
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        30l bis 50l
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        42.56l bis 61.91l
      </button>
    </div>
  </div>

  <div v-else-if="question6Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        München
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Berlin
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        Baden-Baden
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        Friesland
      </button>
    </div>
  </div>

  <div v-else-if="question7Answered" id="transparent-background-quiz-container" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm">
    <p class="text-3xl xs:text-base font-semibold">Wie lange braucht eine Plastikflasche bis es zerfällt</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        ~60 Jahre
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        ~100 Jahre
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button id="quiz-question" class="flex-1 rounded-md">
        ~250 Jahre
      </button>
      <button id="quiz-question" class="flex-1 rounded-md">
        ~400 Jahre
      </button>
    </div>
  </div>
</div>
</template>

<style>
#quiz-questions {
 margin-top: 80px;
}

#container {
  width: 100%;
  height: 80vh;
}

#transparent-background {
  height: 15%;
  color: white;
  background: transparent;
  border: 4px solid white;
  backdrop-filter: blur(1.5rem);
  padding: 4px;
}

#transparent-background-quiz-container {
  height: 40%;
  color: white;
  background: transparent;
  border: 4px solid white;
  backdrop-filter: blur(1.5rem);
  padding: 4px;
}

#quiz-question {
  border: 2px solid white;
}
</style>