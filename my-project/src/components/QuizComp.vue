<script>
export default {
  data () {
    return {
      enableEasterEgg: false
    }
  },
  methods: {
    triggerEasterEgg () {
       // this.enableEasterEgg = !this.enableEasterEgg
      return pass
    },
    checkQuestion1 (answer) {
      if (answer === 'A') {
        alert("Richtig")
      } else {
        alert("Falsch")
      }
    },
    checkQuestion2 () {},
    checkQuestion3 () {},
    checkQuestion4 () {},
    checkQuestion5 () {},
    checkQuestion6 () {},
    checkQuestion7 () {},
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
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️ +</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Sotierst du deinen Müll?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: Ja</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: Gelegentlich</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: Vielleicht 😇</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: Nein</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Ist Littering legal?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: Nein</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: Bestimmt</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: Keine Ahnung</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: Ja +</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie hoch können die Geldstrafen ausfallen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: 60€</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: 200€ - 1.000€</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: 400€ - 15.000€ +</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: 5€ - 10€</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Welchem Biom schadet Littering besonders?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: Ozeane +</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: Wälder</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: Wüste</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: Gletscher</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie viel Grundwasser verschmutzt eine Zigarettenstummel?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: 35l - 55l</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: 40l - 60l +</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: 30l - 50l</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: 42,56l - 61,91l</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: München</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: Berlin</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: Baden-Baden +</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: Friesland</button>
        </div>
      </div>
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2">
        <p class="text-xl">Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">A: ~60 Jahre</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">B: ~100 Jahre</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">C: ~250 Jahre</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300">D: ~400 Jahre +</button>
        </div>
      </div>
    </div>
  </div>
</template>