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
        this.question1Answered = true
        if (answer === 'A') {
          this.points += 1
        }
        this.setShownQuestion(2)
        this.checkResults()
      }
    },
    checkQuestion2 (answer) {
      if (!this.question2Answered) {
        this.question2Answered = true
        if (answer === 'A') {
          this.points += 3
        } else if (answer === 'B') {
          this.points += 2
        } else if (answer === 'C') {
          this.points += 1
        } else {
          this.points += 0
        }
        this.setShownQuestion(3)
        this.checkResults()
      }
    },
    checkQuestion3 (answer) {
      if (!this.question3Answered) {
        this.question3Answered = true
        if (answer === 'A') {
          this.points += 1
        }
        this.setShownQuestion(4)
        this.checkResults()
      }
    },
    checkQuestion4 (answer) {
      if (!this.question4Answered) {
        this.question4Answered = true
        if (answer === 'C') {
          this.points += 1
        }
        this.setShownQuestion(5)
        this.checkResults()
      }
    },
    checkQuestion5 (answer) {
      if (!this.question5Answered) {
        this.question5Answered = true
        if (answer === 'A') {
          this.points += 1
        }
        this.setShownQuestion(6)
        this.checkResults()
      }
    },
    checkQuestion6 (answer) {
      if (!this.question6Answered) {
        this.question6Answered = true
        if (answer === 'B') {
          this.points += 1
        }
        this.setShownQuestion(7)
        this.checkResults()
      }
    },
    checkQuestion7 (answer) {
      if (!this.question7Answered) {
        this.question7Answered = true
        if (answer === 'C') {
          this.points += 1
        }
        this.setShownQuestion(8)
        this.checkResults()
      }
    },
    checkQuestion8 (answer) {
      if (!this.question8Answered) {
        this.question8Answered = true
        if (answer === 'D') {
          this.points += 1
        }
        this.checkResults()
      }
    }
  }
}
</script>

<template>
<div v-if="showResult" class="text-container">
  <div class="transparent-background-result mx-4 rounded-md mt-32 xs:mt-20 items-center text-center justify-center">
    <div class="flex flex-col text-center items-center">
      <p class="text-5xl text-white font-bold xs:text-3xl">
        Du bist ein
      </p>
      <img class="rounded-md image mt-8 xs:mt-4" :src="resultImage" alt="">
      <p class="text-4xl xs:text-2xl text-white font-semibold mt-8 animate-bounce">{{ resultMessage }}</p>
      <button class="text-white text-lg xs:text-xs xs: xs:px-1 font-semibold border-2 rounded-md bg-blue-900 border-blue-900 py-2 px-2" @click="restartQuiz">Noch Einmal?</button>
      <a class="text-base xs:text-xs text-white animate-pulse" :href="resultImage" target="_blank">
        Herkunft Gif: <br />
        giphy.com | @family-guy
      </a>
    </div>
  </div>
</div>
<div v-else id="container">
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

  <div v-if="showQuestionNumb === 1" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm transparent-background-quiz-container">
    <p class="text-3xl xs:text-base font-semibold">Was versteht man unter dem Begriff Littering?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ correctanswer : question1Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion1('A')">
        Unangemessene Entsorgen von Abfällen
      </button>
      <button :class="{ wronganswer : question1Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion1('B')">
        Einmaliges benutzen von Mehrwegprodukten
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ wronganswer : question1Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion1('C')">
        Entsorgen von Abfällen neben Autobahnen
      </button>
      <button :class="{ wronganswer : question1Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion1('D')">
        Achtlos Müll aus dem Autofenster bei voller Fahrt werfen
      </button>
    </div>
  </div>

  <div v-else-if="showQuestionNumb === 2" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm transparent-background-quiz-container">
  <p class="text-3xl xs:text-base font-semibold">Sotierst du deinen Müll?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ correctanswer : question2Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion2('A')">
        Ja
      </button>
      <button :class="{ wronganswer : question2Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion2('B')">
        Nein
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ yellowanswer : question2Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion2('C')">
        Vielleicht
      </button>
      <button :class="{ orangeanswer : question2Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion2('D')">
        Gelegentlich
      </button>
    </div>
  </div>

  <div v-else-if="showQuestionNumb === 3" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm transparent-background-quiz-container">
    <p class="text-3xl xs:text-base font-semibold">Ist Littering strafbar?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ wronganswer : question3Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion3('A')">
        Nein
      </button>
      <button :class="{ wronganswer : question3Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion3('B')">
        Bestimmt
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ wronganswer : question3Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion3('C')">
        Keine Ahnung
      </button>
      <button :class="{ correctanswer : question3Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion3('D')">
        Ja
      </button>
    </div>
  </div>

  <div v-else-if="showQuestionNumb === 4" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm transparent-background-quiz-container">
    <p class="text-3xl xs:text-base font-semibold">Wie hoch können die Geldstrafen ausfallen?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ wronganswer : question4Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion4('A')">
        60,- €
      </button>
      <button :class="{ wronganswer : question4Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion4('B')">
        200,- € bis 350,- € 
      </button>
    </div>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ correctanswer : question4Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion4('C')">
        400,- € bis 15.000,- €
      </button>
      <button :class="{ wronganswer : question4Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion4('D')">
        5,- € bis 10,- €
      </button>
    </div>
  </div>

  <div v-else-if="showQuestionNumb === 5" class="flex flex-col rounded-md mx-4 items-center text-center justify-center space-y-2 mt-52 xs:mt-24 xs:text-sm transparent-background-quiz-container">
    <p class="text-3xl xs:text-base font-semibold">Welchem Biom schadet Littering besonders?</p>
    <div class="flex-1 flex flex-row w-full space-x-2 text-xl xs:text-base">
      <button :class="{ correctanswer : question5Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion5('A')">
        Ozeane
      </button>
      <button :class="{ wronganswer : question5Answered }" class="flex-1 rounded-md quiz-question" @click="checkQuestion5('B')">
        Wälder
      </button>
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
     </template>
