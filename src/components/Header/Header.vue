<template>
    <header className="header--container">
        <a href="https://vuejs.org/" target="_blank">
            <img src="./../../assets/lidl_logo.svg" class="header--logo" alt="Lidl logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./../../assets/cart-outline.png" class="header--cart" alt="Shopping Cart" />
        </a>
    </header>
</template>

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
        padding: 1vw;
        min-width: 50px;
    }

    &--cart {
        width: 30px;
        margin-right: 1vw;
    }
}
</style>