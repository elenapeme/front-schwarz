<template>
    <AddToCartView/>
    <div class="container">
        <Tabs :active=showTabs[0].show @show="handlerShowTab(0)" />
        <Tabs :active=showTabs[1].show @show="handlerShowTab(1)" />
        <Tabs :active=showTabs[2].show @show="handlerShowTab(2)" />
        <Tabs :active=showTabs[3].show @show="handlerShowTab(3)" />  
    </div>
    <div v-for="element in showTabs" v-show="element.show">
        <Carousel :data="element.data"/>
    </div>  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AddToCartView from '../base/AddToCartView/AddToCartView.vue'
import Tabs from './Tabs/Tabs.vue'
import Carousel from '../base/Carousel/Carousel.vue'
import { data } from '../../assets/data'

//MODIFY TO HIDE/SHOW EACH TAB
const showTabs = ref([
    {data: data.slice(0,10), show: true},
    {data: data.slice(10,19), show: false},
    {data: data.slice(0,10), show: false},
    {data: data.slice(10,19), show: false}
])

const setAllToFalse = () => {
    showTabs.value.forEach(element => {
        element.show = false
    })
} 
const handlerShowTab = (index: number) => {
    setAllToFalse()
    showTabs.value[index]['show'] = true
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    margin-top: -71px;
}
</style>