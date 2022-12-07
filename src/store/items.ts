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
    actions: {
        addItems(item: Data) {
            this.items.push(item)
        }
    }
})