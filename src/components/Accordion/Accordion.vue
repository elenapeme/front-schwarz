<template>
    <div>
      <div
        @click="toggleAccordion()"
        class="tab"
        :aria-expanded="isOpen"
        :aria-controls="`collapse`"
      >
      <svg
          :class="{
            'tab--checked': isOpen,
            '': !isOpen,
          }"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66.91 122.88"
          aria-hidden="true"
        >
          <path
            d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="font-semibold text-xl">Accordion Button</span>
      </div>
  
      <div v-show="isOpen" class="tab--content">
        <div class="tab--content--main" >
            <div v-for="element in data.slice(0,2)" :key="element.id">
                <img :src="element.image" alt="dummy-image">
            </div>
        </div>
        <Carousel :data=data />
      </div>
      
    </div>
</template>
  
<script lang="ts" setup>
import Carousel from '../Carousel/Carousel.vue'
import { ref } from 'vue'
import { data } from '../../assets/data'

const isOpen = ref(false)

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style lang="scss">
$midnight: #2c3e50;
$clouds: #ecf0f1;

.tab {
  overflow: hidden;
  display: flex;
    background-color: rgb(210, 210, 210);
    padding: 1em;
    cursor: pointer;

    &:hover {
        background-color: white;

        span {
            color: blue;
        }
    }

    &--checked {
        transform: rotate(90deg);
    
    }
    svg {
        width: 1vw;
        margin-right: 1em;
        fill: black;
    }

  &--content {
    color: $midnight;
    background: white;
    transition: all .35s;

    &--main  {
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;
        }
    }
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}
</style>