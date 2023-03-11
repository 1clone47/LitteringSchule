<script>
export default {
  data () {
    return {
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
    triggerEasterEgg () {
       // this.enableEasterEgg = !this.enableEasterEgg
      return pass
    },
    checkQuestion1 (answer) {
      if (!this.question1Answered) {
        if (answer === 'A') {
          this.points += 1
        }
        this.question1Answered = true
      }
    },
    checkQuestion2 (answer) {
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
    },
    checkQuestion3 (answer) {
      if (answer === 'A') {
        this.points += 1
      }
      this.question3Answered = true
    },
    checkQuestion4 (answer) {
      if (answer === 'C') {
        this.points += 1
      }
      this.question4Answered = true
    },
    checkQuestion5 (answer) {
      if (answer === 'A') {
        this.points += 1
      }
      this.question5Answered = true
    },
    checkQuestion6 (answer) {
      if (answer === 'B') {
        this.points += 1
      }
      this.question6Answered = true
    },
    checkQuestion7 (answer) {
      if (answer === 'C') {
        this.points += 1
      }
      this.question7Answered = true
    },
    checkQuestion8 (answer) {
      if (answer === 'D') {
        this.points += 1
      }
      this.question8Answered = true
    }
  }
}
</script>

<template>
  <div class="w-full h-full bg-blue-300 items-center space-y-12">
    <div v-if="enableEasterEgg === false" class="text-center mt-4 text-5xl font-mono underline text-white" @mouseover="triggerEasterEgg">Littering</div>
    <div v-else class="text-center items-center mt-4 text-5xl font-mono underline text-white" @mouseover="triggerEasterEgg">
      <p class="text-white text-5xl underline">GOTTCHA!</p>
      <img src="https://cdn.pixabay.com/photo/2013/07/12/19/33/emperor-penguin-154991_960_720.png">
    </div>
    <div class="flex flex-col text-center space-y-4 mx-32 ">
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Was verstehst du unter "Littering"?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button :class="{'bg-green-600': question1Answered, 'border-green-600': question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️</button>
          <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
          <button :class="{'bg-red-600':question1Answered, 'border-red-600':question1Answered}" class="flex-1 border-2 border-blue-900 rounded-md text-center" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
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
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Ist Littering legal?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion3('A')">A: Nein</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion3('B')">B: Bestimmt</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion3('C')">C: Keine Ahnung</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion3('D')">D: Ja</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie hoch können die Geldstrafen ausfallen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion4('A')">A: 60€</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion4('B')">B: 200€ - 1.000€</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion4('C')">C: 400€ - 15.000€</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion4('D')">D: 5€ - 10€</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Welchem Biom schadet Littering besonders?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion5('A')">A: Ozeane</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion5('B')">B: Wälder</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion5('C')">C: Wüste</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion5('D')">D: Gletscher</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie viel Grundwasser verschmutzt eine Zigarettenstummel?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion6('A')">A: 35l - 55l</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion6('B')">B: 40l - 60l</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion6('C')">C: 30l - 50l</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion6('D')">D: 42,56l - 61,91l</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion7('A')">A: München</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion7('B')">B: Berlin</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion7('C')">C: Baden-Baden</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion7('D')">D: Friesland</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion8('A')">A: ~60 Jahre</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion8('B')">B: ~100 Jahre</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion8('C')">C: ~250 Jahre</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion8('D')">D: ~400 Jahre</button>
        </div>
      </div>
    </div>
  </div>
</template>