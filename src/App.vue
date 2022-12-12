<template>
  <Header/>
  <div v-if="isMobile">
    <MobileView />
  </div>
  <div v-else>
    <DesktopView />
  </div>
</template>

<script lang="ts" setup>
import { useItemsStore } from './store/items'

import Header from './components/base/Header/Header.vue'
import MobileView from './components/MobileView/MobileView.vue'
import DesktopView from './components/DesktopView/DesktopView.vue'

import { useMedia } from './composables/useMedia'

const store = useItemsStore()
const isMobile = useMedia("(max-width: 600px)")


if (localStorage.getItem("itemsCart")) {
  store.updateCart()
}

</script>

<style lang="scss">


</style>