import { defineStore } from "pinia"

export const useExampleStore = defineStore("example", {
    state: () => (
        {
            exampleContent: [],
        }
    ),
    mutations: {

    },

    getters: {
        getElements(){
            return this.exampleContent
        },
    },
    actions: {
        
        push(number){
            console.log('second')
            if(!this.exampleContent.includes(number)){
              this.exampleContent.push(number)  
              console.log('OK')
            }
        },
    }
})