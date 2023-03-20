<script>
export default {
  data () {
    return {
      showResult: false,
      resultMessage: '',
      resultImage: '',
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
  watch: {

  },
  methods: {
    checkResults() {
      if (this.question1Answered && this.question2Answered && this.question3Answered && this.question4Answered && this.question5Answered && this.question6Answered && this.question7Answered && this.question8Answered){
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
          this.resultMessage = 'Stellverteter von Greta Thunberg'
          this.resultImage = 'https://cdn.pixabay.com/photo/2019/12/14/15/38/map-4695145_960_720.png'
        } else if (this.points > 4) {
          this.resultMessage = '0815 Mensch'
          this.resultImage = 'https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png'
        } else {
          this.resultMessage = 'Saubär!'
          this.resultImage = 'https://cdn.pixabay.com/photo/2018/03/12/16/33/mascot-3220133_960_720.png'
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
  <div class="w-auto h-auto bg-blue-300 items-center space-y-12">
    <div v-if="enableEasterEgg === false" class="text-center mt-4 text-5xl font-mono underline text-white" @mouseover="triggerEasterEgg">Littering</div>
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
      <img src="https://cdn.pixabay.com/photo/2013/07/12/19/33/emperor-penguin-154991_960_720.png">
    </div>
    <div v-if="showResult" class="w-full text-center items-center flex flex-col text-white space-y-4">
      <p class="flex-1 text-3xl">DU BIST EIN</p>
      <img class="rounded-full" :src="resultImage" alt="">
      <p class="text-6xl">{{ this.resultMessage }}</p>
      <button class="border-4 py-4 px-4 space-y-2 border-blue-900 bg-blue-900 text-xl rounded-md" @click="restartQuiz">NOCH EINMAL?</button>
    </div>
    <div v-else>
      <div class="flex flex-col text-center space-y-4 mx-auto h-auto">
        <div id="Frage 1" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl xs:text-lg">Was verstehst du unter "Littering"?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-auto xs:text-sm">
            <button :class="{'bg-green-600': question1Answered, 'border-green-600': question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️</button>
            <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-auto xs:text-sm">
            <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
            <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
          </div>
        </div>
        <div id="Frage 2" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Sotierst du deinen Müll?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-green-600': question2Answered, 'border-green-600': question2Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion2('A')">A: Ja</button>
            <button :class="{'bg-yellow-600': question2Answered, 'border-yellow-600': question2Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion2('B')">B: Gelegentlich</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-orange-600': question2Answered, 'border-orange-600': question2Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion2('C')">C: Vielleicht 😇</button>
            <button :class="{'bg-red-600': question2Answered, 'border-red-600': question2Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion2('D')">D: Nein</button>
          </div>
        </div>
        <div id="Frage 3" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Ist Littering legal?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-green-600': question3Answered, 'border-green-600': question3Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion3('A')">A: Nein</button>
            <button :class="{'bg-red-600': question3Answered, 'border-red-600': question3Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion3('B')">B: Bestimmt</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question3Answered, 'border-red-600': question3Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion3('C')">C: Keine Ahnung</button>
            <button :class="{'bg-red-600': question3Answered, 'border-red-600': question3Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion3('D')">D: Ja</button>
          </div>
        </div>
        <div id="Frage 4" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie hoch können die Geldstrafen ausfallen?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question4Answered, 'border-red-600': question4Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion4('A')">A: 60€</button>
            <button :class="{'bg-red-600': question4Answered, 'border-red-600': question4Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion4('B')">B: 200€ - 350€</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-green-600': question4Answered, 'border-green-600': question4Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion4('C')">C: 400€ - 15.000€</button>
            <button :class="{'bg-red-600': question4Answered, 'border-red-600': question4Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion4('D')">D: 5€ - 10€</button>
          </div>
        </div>
        <div id="Frage 5" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Welchem Biom schadet Littering besonders?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-green-600': question5Answered, 'border-green-600': question5Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion5('A')">A: Ozeane</button>
            <button :class="{'bg-red-600': question5Answered, 'border-red-600': question5Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion5('B')">B: Wälder</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question5Answered, 'border-red-600': question5Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion5('C')">C: Wüste</button>
            <button :class="{'bg-red-600': question5Answered, 'border-red-600': question5Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion5('D')">D: Gletscher</button>
          </div>
        </div>
        <div id="Frage 6" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie viel Grundwasser verschmutzt eine Zigarettenstummel?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question6Answered, 'border-red-600': question6Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion6('A')">A: 5l - 10l</button>
            <button :class="{'bg-green-600': question6Answered, 'border-green-600': question6Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion6('B')">B: 40l - 60l</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question6Answered, 'border-red-600': question6Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion6('C')">C: 30l - 50l</button>
            <button :class="{'bg-red-600': question6Answered, 'border-red-600': question6Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion6('D')">D: 42,56l - 61,91l</button>
          </div>
        </div>
        <div id="Frage 7" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question7Answered, 'border-red-600': question7Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion7('A')">A: München</button>
            <button :class="{'bg-red-600': question7Answered, 'border-red-600': question7Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion7('B')">B: Berlin</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-green-600': question7Answered, 'border-green-600': question7Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion7('C')">C: Baden-Baden</button>
            <button :class="{'bg-red-600': question7Answered, 'border-red-600': question7Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion7('D')">D: Friesland</button>
          </div>
        </div>
        <div id="Frage 8" class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
          <p class="text-xl">Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question8Answered, 'border-red-600': question8Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion8('A')">A: ~60 Jahre</button>
            <button :class="{'bg-red-600': question8Answered, 'border-red-600': question8Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion8('B')">B: ~100 Jahre</button>
          </div>
          <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
            <button :class="{'bg-red-600': question8Answered, 'border-red-600': question8Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion8('C')">C: ~250 Jahre</button>
            <button :class="{'bg-green-600': question8Answered, 'border-green-600': question8Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion8('D')">D: ~400 Jahre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>