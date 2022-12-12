import { defineStore } from 'pinia'
import { Data } from '../types/Data'

interface ItemsState {
    items: Data[]
}

export const useItemsStore = defineStore({
    id: 'item',
    state: (): ItemsState => ({
        items: []
    }),
    getters: {
        getTotalItems: (state) => state.items.length,
        getItems: (state) => state.items
    },
    actions: {
        addItems(item: Data) {
            this.items.push(item)
        },
        updateCart() {
            this.items = JSON.parse(localStorage.getItem("itemsCart")!)
        }
    }
})