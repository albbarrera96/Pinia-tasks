import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
    state: () => ({
        tasks: [
            {id: 1, title:"Comprar el pan", isFav: false },
            {id: 2, title:"Pagar recibo del agua", isFav: true },
        ]
    })
})
