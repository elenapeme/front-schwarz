<template>
    <div class="content" >
        <div v-for="element in data.slice(0, 1)" :key="element.id">
            <button class="content--basket" @click="addToCart(element)">ADD TO BASKET</button>             
            <img :src="element.image" alt="dummy-image">
        </div>
        <div v-for="element in data.slice(1, 2)" :key="element.id">
            <img :src="element.image" alt="dummy-image">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useItemsStore } from '../../../store/items'

import { data } from '../../../assets/data'
import { Data } from '../../../types/Data'

const store = useItemsStore()

const addToCart = (element: Data) => {
    store.addItems(element)
    localStorage.itemsCart = JSON.stringify(store.getItems)
}
</script>

<style lang="scss">
.content  {
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;
        }

        &--basket {
            padding: 2vw;
            position: absolute;
            color: white;
            background-color: red;
            margin: 1em;
            border-radius: 0;
        }
    }
</style>