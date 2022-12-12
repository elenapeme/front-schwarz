<template>
    <div class="cart">
        <div class="cart--update">{{cartNumber}}</div>
        <img src="./../../../assets/cart-outline.png" class="header--cart" alt="Shopping Cart" />  
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useItemsStore } from '../../../store/items'

const store = useItemsStore()
const cartNumber = store.getItems.length === 0 ? ref(0) : ref(store.getItems.length)


watchEffect(() => {
    cartNumber.value = store.getItems.length
})

</script>

<style lang="scss">
.cart {
    margin-right: 21px;
    
    &--update {
        border-radius: 50%;
        background: blue;
        border: 3px solid #000;
        color: white;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        position: absolute;
        right: 16px;
        top: 15px;
        width: 21px;
    } 
    
    img {
        width: 3vw;
        min-width: 30px;
        margin-right: 10px;
    }
}
    
</style>