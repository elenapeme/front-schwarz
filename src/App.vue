<template>
  <Header/>
  <div >
    <Accordion />
    <Accordion />
    <Accordion />
    <Accordion />
    <Accordion />
  </div>
  
</template>

<script lang="ts" setup>
import { useMobileDetection } from "vue3-mobile-detection"

import Header from './components/Header/Header.vue'
import Accordion from './components/Accordion/Accordion.vue'

const { isMobile } = useMobileDetection()
console.log(isMobile)

</script>

<style lang="scss">


</style>