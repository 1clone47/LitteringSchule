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
  <div id="transparent-background" class="mt-4 flex flex-row rounded-md mx-4 items-center text-center justify-center">
    <div class="items-start">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </div>
    <div class="ml-4">
      <p class="text-4xl font-bold xs:text-2xl mr-2">Unser Quiz</p>
      <p class="text-3xl xl:font-semibold xs:text-base mr-2">Beantworte alle Fragen um herauszufinden zu welcher Sorte von Verbraucher du gehörst</p>
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
  color: white;
  background: transparent;
  border: 4px solid white;
  backdrop-filter: blur(1.5rem);
}
</style>