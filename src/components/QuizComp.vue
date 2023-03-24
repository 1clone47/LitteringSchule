<script>
export default {
  data () {
    return {
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
    checkQuestion1 (answer) {
      if (!this.question1Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question1Answered = true
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
        this.checkResults()
      }
    },
    checkQuestion3 (answer) {
      if (!this.question3Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question3Answered = true
        this.checkResults()
      }
    },
    checkQuestion4 (answer) {
      if (!this.question4Answered) {
        if (answer === 'C') {
          this.points += 1
        }
        this.question4Answered = true
        this.checkResults()
      }
    },
    checkQuestion5 (answer) {
      if (!this.question5Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question5Answered = true
        this.checkResults()
      }
    },
    checkQuestion6 (answer) {
      if (!this.question6Answered) {
        if (answer === 'B') {
          this.points += 1
        }
        this.question6Answered = true
        this.checkResults()
      }
    },
    checkQuestion7 (answer) {
      if (!this.question7Answered) {
        if (answer === 'C') {
          this.points += 1
        }
        this.question7Answered = true
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
  <div class="w-auto h-auto bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 items-center space-y-12">
    <div v-if="enableEasterEgg === false" class="text-center mt-4 text-5xl font-sans border-2 mx-32 xs:mx-2 xs:text-2xl rounded-full font-semibold py-2 text-white" @mouseover="triggerEasterEgg">QUIZ</div>
    <div v-else-if="showResult" class="flex flex-row mt-4 font-mono text-center items-center justify-center border-4 border-white mx-32 rounded-md bg-white space-x-8 text-3xl py-2 px-2">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      </div>
      <div>
        <p class="flex-1">Beantworte die folgenden Fragen um herauszufinden was du bist.</p>
      </div>
    </div>
    <div v-else class="text-center items-center mt-4 text-5xl font-mono underline text-white" @mouseover="triggerEasterEgg">
      <p class="text-white text-3xl underline">GOTTCHA!</p>
      <img alt="" src="https://cdn.pixabay.com/photo/2013/07/12/19/33/emperor-penguin-154991_960_720.png">
    </div>
    <div v-if="showResult" class="w-auto text-center items-center flex flex-col text-white space-y-4">
      <img class="rounded-md h-auto w-auto" :src="resultImage" alt="">
      <p class="flex-1 text-3xl">DU BIST EIN</p>
      <p class="text-3xl">{{ this.resultMessage }}</p>
      <p class="w-auto mx-4 text-xs"><a :href="resultImage" target="_blank">CREDIT TO:<br /> {{ this.resultImage }}</a></p>
      <button class="border-4 py-4 px-4 space-y-2 border-blue-900 bg-blue-900 text-xl rounded-md" @click="restartQuiz">NOCH EINMAL?</button>
    </div>
    <div v-else>
      <div class="flex flex-col text-center space-y-4 mx-auto xs:mx-2 sm:mx-2 md:mx-2 shadow-2xl xl:mx-32 h-auto w-auto xxs:scroll-px-px">
        <div id="Frage 1" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl xs:text-lg">Was bedeutet "Littering"?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 xl:h-12 xs:h-auto xs:text-sm">
            <button :class="showAnswer1Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️</button>
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 xl:h-12 xs:h-auto xs:text-sm">
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
            <button :class="showAnswer1Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
          </div>
        </div>
        <div id="Frage 2" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Sotierst du deinen Müll?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="{'bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('A')">A: Ja</button>
            <button :class="{'bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-400 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('B')">B: Gelegentlich</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="{'bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('C')">C: Vielleicht 😇</button>
            <button :class="{'bg-gradient-to-r from-red-500 via-red-700 to-red-500 text-white': question2Answered}" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion2('D')">D: Nein</button>
          </div>
        </div>
        <div id="Frage 3" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Ist Littering legal?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer3Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('A')">A: Nein</button>
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('B')">B: Bestimmt</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('C')">C: Keine Ahnung</button>
            <button :class="showAnswer3Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion3('D')">D: Ja</button>
          </div>
        </div>
        <div id="Frage 4" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie hoch können die Geldstrafen ausfallen?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('A')">A: 60€</button>
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('B')">B: 200€ - 350€</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer4Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('C')">C: 400€ - 15.000€</button>
            <button :class="showAnswer4Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion4('D')">D: 5€ - 10€</button>
          </div>
        </div>
        <div id="Frage 5" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Welchem Biom schadet Littering besonders?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer5Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('A')">A: Ozeane</button>
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('B')">B: Wälder</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('C')">C: Wüste</button>
            <button :class="showAnswer5Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion5('D')">D: Gletscher</button>
          </div>
        </div>
        <div id="Frage 6" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie viel Grundwasser verschmutzt ein Zigarettenstummel?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('A')">A: 5l - 10l</button>
            <button :class="showAnswer6Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('B')">B: 40l - 60l</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('C')">C: 30l - 50l</button>
            <button :class="showAnswer6Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion6('D')">D: 42,56l - 61,91l</button>
          </div>
        </div>
        <div id="Frage 7" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('A')">A: München</button>
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('B')">B: Berlin</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer7Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('C')">C: Baden-Baden</button>
            <button :class="showAnswer7Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion7('D')">D: Friesland</button>
          </div>
        </div>
        <div id="Frage 8" class="border-4 border-gray-300 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('A')">A: ~60 Jahre</button>
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('B')">B: ~100 Jahre</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10 xs:text-sm">
            <button :class="showAnswer8Wrong" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('C')">C: ~250 Jahre</button>
            <button :class="showAnswer8Right" class="flex-1 border-2 border-stone-400 rounded-md text-center" @click="checkQuestion8('D')">D: ~400 Jahre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>