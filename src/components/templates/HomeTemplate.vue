<script>
export default {
  data() {
    return {
      showImgNmb: 1,
      showImg: "https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033_1280.jpg",
      img1: "https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033_1280.jpg",
      img2: "https://cdn.pixabay.com/photo/2018/04/04/11/39/safety-net-3289548_1280.jpg",
      img3: "https://cdn.pixabay.com/photo/2020/02/17/06/00/pollution-4855507_1280.jpg",
      img4: "https://cdn.pixabay.com/photo/2020/03/09/04/25/beach-4914403_1280.jpg",
      img5: "https://cdn.pixabay.com/photo/2014/10/20/12/28/rubbish-495213__480.jpg",
      img6: "https://cdn.pixabay.com/photo/2014/09/08/15/16/pollution-439188__480.jpg",
      img7: "https://cdn.pixabay.com/photo/2018/04/04/11/39/safety-net-3289549_960_720.jpg"
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    recentImage() {
      if (this.showImgNmb > 2) {
        this.showImgNmb -= 1
      } else {
        this.showImgNmb = 7
      }
      this.changeImage()
    },
    nextImage() {
      if (this.showImgNmb < 7) {
        this.showImgNmb += 1
      } else {
        this.showImgNmb = 1
      }
      this.changeImage()
    },
    async changeImage() {
      if (this.showImgNmb === 1) {
        this.showImg = this.img1
      }
      else if (this.showImgNmb === 2) {
        this.showImg = this.img2
      }
      else if (this.showImgNmb === 3) {
        this.showImg = this.img3
      }
      else if (this.showImgNmb === 4) {
        this.showImg = this.img4
      }
      else if (this.showImgNmb === 5) {
        this.showImg = this.img5
      }
      else if (this.showImgNmb === 6) {
        this.showImg = this.img6
      }
      else if (this.showImgNmb === 7) {
        this.showImg = this.img7
      }
    }
  }
}
</script>

<template>
  <div class="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 items-center w-auto h-auto justify-center items-center flex flex-col">
    <div  class="text-center mt-8 mb-8 text-5xl font-sans xs:mx-2 xs:text-2xl rounded-full font-semibold py-2 text-white">HOME</div>
    <div class="flex flex-row space-x-4 mx-2 py-8 xs:mx-2 border-4 rounded-md border-white bg-white items-center justify-center text-center mt-4">
      <div class="text-center space-y-4">
        <p class="xl:text-3xl xs:text-xs">
          Littering bezieht sich auf das unachtsame Wegwerfen von Abfall oder Müll auf öffentlichen Plätzen oder in der Natur. Dies kann zum Beispiel Zigarettenstummel, Plastikflaschen, Papierverpackungen oder Essensreste umfassen.
        </p>
        <p class="xl:text-3xl xs:text-xs">
          Littering ist ein weit verbreitetes Problem in vielen Städten und Gemeinden, da es nicht nur unansehnlich ist, sondern auch Umweltprobleme verursacht. Wenn Abfälle auf öffentlichen Plätzen liegen gelassen werden, können sie zum Beispiel in Flüsse und Ozeane gelangen, wo sie die Tierwelt und die Umwelt schädigen können.
        </p>
        <p class="xl:text-3xl xs:text-xs">
          Littering ist auch eine Form von Umweltverschmutzung und kann dazu beitragen, dass sich Krankheiten und Infektionen ausbreiten, wenn Abfall in der Nähe von Wohngebieten oder öffentlichen Einrichtungen aufbewahrt wird.
        </p>
        <p class="xl:text-3xl xs:text-xs">
          Es ist <a class="font-bold underline">wichtig</a>, dass jeder Verantwortung übernimmt und Müll ordnungsgemäß entsorgt, um Littering und seine negativen Auswirkungen auf unsere Umwelt zu reduzieren.
        </p>
      </div>
    </div>
    <div class="w-full h-full space-x-12 flex flex-col mb-16 items-center justify-center mx-32">
      <div class="flex-1 object-fill items-center justify-center mt-16 mx-2">
        <img :src="showImg" class="rounded-md w-full h-auto" alt="">
      </div>
    </div>
    <div class="flex flex-row space-x-16">
      <div class="flex-1 items-center justify-center" @click="recentImage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-white rounded-full hover:border-2 hover:border-white hover:bg-white hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </div>
      <div class="text-center mt-4 text-white font-semibold">
        Bild {{ showImgNmb }} von 7
      </div>
      <div class="flex-1 items-center justify-center" @click="nextImage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-white rounded-full hover:border-2 hover:border-white hover:bg-white hover:text-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
#hidden-scrollbar {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>