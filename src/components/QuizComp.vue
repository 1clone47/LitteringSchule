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
  <div class="w-full h-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 items-center space-y-4">
    <div  class="text-center mt-4 text-5xl font-sans border-2 mx-32 xs:mx-2 xs:text-2xl rounded-full font-semibold py-2 text-white">QUIZ</div>
    <div v-if="!showResult" class="flex flex-row space-x-4 mx-2 xs:mx-2 border-4 rounded-md border-white bg-white items-center justify-center text-center">
      <div class="text-center justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
        </svg>
      </div>
      <div class="text-left mt-4">
        <p class="xl:text-3xl xs:text-xs">Beantworte alle Fragen um herauszufinden was wie eine Sorte von Verbraucher du bist.</p>
      </div>
    </div>
    <div v-if="showResult" class="w-full h-full text-center items-center flex flex-col text-white space-y-4 mt-80 mb-80">
      <img class="flex-1 rounded-md h-1/3 w-1/3 xs:w-4/5 xs:h-4/5 mt-32 mb-28 xs:mb-16 xs:mt-16" :src="resultImage" alt="">
      <p class="flex-1 text-3xl">DU BIST EIN</p>
      <p class="text-3xl font-bold animate-bounce">{{ this.resultMessage }}</p>
      <p class="w-auto mx-4 text-xs"><a :href="resultImage" target="_blank">CREDIT TO:<br /> {{ this.resultImage }}</a></p>
      <button class="border-4 py-4 px-4 space-y-2 border-blue-900 bg-blue-900 text-xl rounded-md" @click="restartQuiz">NOCH EINMAL?</button>
    </div>
    <div v-else class="h-full w-full flex-col">
      <div class="flex-1 flex flex-col text-center space-y-4 mx-auto xs:mx-2 sm:mx-2 md:mx-2 shadow-2xl xl:mx-32 h-full w-auto xxs:scroll-px-px xs:mb-24 sm:mb-72">
        <div v-if="showQuestionNumb === 1" id="Frage 1" class="border-4 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 2" id="Frage 2" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 3" id="Frage 3" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 4" id="Frage 4" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 5" id="Frage 5" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 6" id="Frage 6" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 7" id="Frage 7" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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
        <div v-else-if="showQuestionNumb === 8" id="Frage 8" class="border-4 border-gray-300 bg-white border-white rounded-md flex flex-col space-y-2 h-80 py-4">
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