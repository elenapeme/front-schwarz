<template>
    <div class="carousel">
        <div class="carousel--movement">
            <svg
          v-if="position !== 0"
          class="carousel--prev carousel--control"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66.91 122.88"
          aria-hidden="true"
          @click="moveLeft"
        >
          <path
            d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
            <div class="carousel--content" >
                <div v-for="element, i in data" :key="element.id" :ref="el => { divs[i] = el }" class="carousel--content--cell">
                    <img :src="element.image" alt="dummy-image" >
                    <div class="carousel--content--link">
                        <p>LINK</p>
                    </div>
                </div>     
            </div>
            <svg     
            class="carousel--next carousel--control" 
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66.91 122.88"
            aria-hidden="true"
            @click="moveRight"
            >
                <path
                d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Data } from '../../../types/Data'

defineProps<{ data: Data[] }>()

const position = ref(0)
const divs: any = ref([])

const moveRight = () => {
    if ( divs.value.length >= position.value ) {
        position.value += 3
        console.log(divs.value.length)
        console.log(position.value)
        const indexDiv = divs.value.length < position.value ? divs.value.length -1 : position.value
        console.log("DIV ",indexDiv)
        divs.value[indexDiv].scrollIntoView({behavior: "smooth"})
    }
}

const moveLeft = () => {
    if ( position.value !== 0) {
        position.value -= 3
        console.log(divs.value.length)
        console.log(position.value)
        const indexDiv = divs.value.length < position.value ? divs.value.length -1 : position.value
        console.log("DIV ",indexDiv)
        divs.value[indexDiv].scrollIntoView({behavior: "smooth"})
    }
}
</script>

<style lang="scss">
//TEST

.gallery::-webkit-scrollbar{
    display: none;
  }

.carousel {
    &--content {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: transform 0.2s;

  &--cell {
    display: flex;
    flex-direction: column;
    padding: 1vw;
    width: 21.5vw;

    img {
        border-top-right-radius: 0.6vw;
        border-top-left-radius: 0.6vw;
    }
  }

  &--link {
    background-color: rgb(210, 210, 210);
    height: 3rem;
    text-align: start;
    padding-left: 1rem;
    font-weight: bold;
  }
}

  &--movement {
    position: relative;
  }

  &--control {
  background-color: white;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
  width: 1vw;
  min-width: 10px;
  fill: black;
  padding-left: 3vw;
    padding-right: 3vw;
    height: 100%;
}

    &--next {
  right: 0;
}

    &--prev {
  left: 0;
  &::after {
  display: inline-block;
}
}
}

</style>