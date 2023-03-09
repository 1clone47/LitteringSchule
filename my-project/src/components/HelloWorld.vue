<script>
export default {
  data () {
    return {

    }
  },
  methods: {
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
  <div class="w-full h-full items-center space-y-12">
    <div class="text-center mt-4 text-3xl font-mono underline">Littering</div>
    <div class="flex flex-col text-center space-y-4 mx-32">
      <div class="border-4 border-blue-900 bg-white rounded-md flex flex-col space-y-2 py-2 hover:">
        <p>Was verstehst du unter "Littering"?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('A')">A: Unangemessene Entsorgung von Abfällen 🗑️ +</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('B')">B: Einmaliges benutzen von Mehrwegprodukten</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('C')">C: Entsorgen von Abfällen neben Autobahnen</button>
          <button class="flex-1 border-2 border-blue-900 rounded-md text-center hover:bg-gray-300" @click="checkQuestion1('D')">D: Achtlos Müll aus dem Autofenster bei voller Fahrt zu werfen</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Sotierst du deinen Müll?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: Ja</button>
          <button class="flex-1 border text-center">B: Gelegentlich</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: Vielleicht 😇</button>
          <button class="flex-1 border text-center">D: Nein</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Ist Littering legal?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: Nein</button>
          <button class="flex-1 border text-center">B: Bestimmt</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: Keine Ahnung</button>
          <button class="flex-1 border text-center">D: Ja +</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Wie hoch können die Geldstrafen ausfallen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: 60€</button>
          <button class="flex-1 border text-center">B: 200€ - 1.000€</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: 400€ - 15.000€ +</button>
          <button class="flex-1 border text-center">D: 5€ - 10€</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Welchem Biom schadet Littering besonders?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: Ozeane +</button>
          <button class="flex-1 border text-center">B: Wälder</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: Wüste</button>
          <button class="flex-1 border text-center">D: Gletscher</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Wie viel Grundwasser verschmutzt eine Zigarettenstummel?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: 35l - 55l</button>
          <button class="flex-1 border text-center">B: 40l - 60l +</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: 30l - 50l</button>
          <button class="flex-1 border text-center">D: 42,56l - 61,91l</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex flex-col space-y-2 py-2">
        <p>Welche deutsche Stadt ist am meisten vom Littering betroffen?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: München</button>
          <button class="flex-1 border text-center">B: Berlin</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: Baden-Baden +</button>
          <button class="flex-1 border text-center">D: Friesland</button>
        </div>
      </div>
      <div class="border border-red-500 rounded-md flex-col flex space-y-2 py-2">
        <p>Wie lange braucht eine Plastikflasche bis es zerfällt?</p>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">A: ~60 Jahre</button>
          <button class="flex-1 border text-center">B: ~100 Jahre</button>
        </div>
        <div class="flex flex-row space-x-4 ml-4 mr-4 h-10">
          <button class="flex-1 border text-center">C: ~250 Jahre</button>
          <button class="flex-1 border text-center">D: ~400 Jahre +</button>
        </div>
      </div>
    </div>
  </div>
</template>