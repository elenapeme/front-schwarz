<template>
    <header className="header--container">
        <a href="https://vuejs.org/" target="_blank">
            <img src="./../../../assets/lidl_logo.svg" class="header--logo" alt="Lidl logo" />
        </a> 
        <Cart />    
    </header>
</template>

<script lang="ts" setup>
import Cart from '../Cart/Cart.vue'

</script>

<style lang="scss">
.header {
    &--container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    &--logo {
        width: 5vw;
        padding: 0.5em;
        min-width: 50px;
    }
}
</style>