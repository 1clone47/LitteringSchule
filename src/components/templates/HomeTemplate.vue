<script>
import { nextTick } from 'vue'

export default {
  data () {
    return {
      shownImgNmb: 1,
      shownImg: 'https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033_1280.jpg',
      img1: 'https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033_1280.jpg',
      img2: 'https://cdn.pixabay.com/photo/2018/04/04/11/39/safety-net-3289548_1280.jpg',
      img3: 'https://cdn.pixabay.com/photo/2020/02/17/06/00/pollution-4855507_1280.jpg',
      img4: 'https://cdn.pixabay.com/photo/2020/03/09/04/25/beach-4914403_1280.jpg',
      img5: 'https://cdn.pixabay.com/photo/2014/10/20/12/28/rubbish-495213__480.jpg',
      img6: 'https://cdn.pixabay.com/photo/2014/09/08/15/16/pollution-439188__480.jpg'
    }
  },
  methods: {
    nextImage () {
      if (this.shownImgNmb === 1) {
        this.shownImg = this.img2
        this.shownImgNmb += 1 
      }
      if (this.shownImgNmb === 2) {
        this.shownImg = this.img3
        this.shownImgNmb += 1
      }
      if (this.shownImgNmb === 3) {
        this.shownImg = this.img4
        this.shownImgNmb += 1
      }
      if (this.shownImgNmb === 4) {
        this.shownImg = this.img5
        this.shownImgNmb += 1
      }
      if (this.shownImgNmb === 5) {
        this.shownImg = this.img6
        this.shownImgNmb += 1
      }
      if (this.shownImgNmb === 6) {
        this.shownImg = this.img6
        this.shownImgNmb = 1
      }
    },
    previousImage () {
      if (this.shownImgNmb === 1) {
        this.shownImg = this.img1
        this.shownImgNmb = 6
      }
      if (this.shownImgNmb === 2) {
        this.shownImg = this.img1
        this.shownImgNmb -= 1
      }
      if (this.shownImgNmb === 3) {
        this.shownImg = this.img2
        this.shownImgNmb -= 1
      }
      if (this.shownImgNmb === 4) {
        this.shownImg = this.img3
        this.shownImgNmb -= 1
      }
      if (this.shownImgNmb === 5) {
        this.shownImg = this.img4
        this.shownImgNmb -= 1
      }
      if (this.shownImgNmb === 6) {
        this.shownImg = this.img5
        this.shownImgNmb -= 1
      }
    }
  }
}
</script>
<template>
  <div class="container-block">
    <div id="transparent-background-home" class="xs:mt-2 mt-8 mx-4 rounded-md flex flex-row text-center items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
      <div class="xs:text-xs text-3xl">
        <p>
          Littering bezieht sich auf das unachtsame Wegwerfen von Abfall oder Müll auf öffentlichen Plätzen oder in der Natur. Dies kann zum Beispiel Zigarettenstummel, Plastikflaschen, Papierverpackungen oder Essensreste umfassen.
          <br />
          Littering ist ein weit verbreitetes Problem in vielen Städten und Gemeinden, da es nicht nur unansehnlich ist, sondern auch Umweltprobleme verursacht. Wenn Abfälle auf öffentlichen Plätzen liegen gelassen werden, können sie zum Beispiel in Flüsse und Ozeane gelangen, wo sie die Tierwelt und die Umwelt schädigen können.
          <br />
          Littering ist auch eine Form von Umweltverschmutzung und kann dazu beitragen, dass sich Krankheiten und Infektionen ausbreiten, wenn Abfall in der Nähe von Wohngebieten oder öffentlichen Einrichtungen aufbewahrt wird.
          <br />
          Es ist <a class="font-bold underline animate-pulse">wichtig</a>, dass jeder Verantwortung übernimmt und Müll ordnungsgemäß entsorgt, um Littering und seine negativen Auswirkungen auf unsere Umwelt zu reduzieren.
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center text-center">
      <img class="home-image xs:mt-2 mt-8 rounded-md" :src="shownImg" alt="">
      <div class="flex flex-row mt-4 space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 border-white border-2 rounded-full bg-white" @click="previousImage">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
        <p class="text-white mt-1">{{ shownImgNmb }} von 6</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 border-white border-2 rounded-full bg-white" @click="nextImage">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.container-block {
  width: 100%;
  height: 80vh;
}

.home-image {
  width: 40vh;
  height: 40vh;
}

#transparent-background-home {
  height: 45%;
  color: white;
  background: transparent;
  border: 4px solid white;
  backdrop-filter: blur(1.5rem);
  padding: 4px;
}
</style>