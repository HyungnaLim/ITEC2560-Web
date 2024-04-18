import { defineStore } from "pinia"

import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stats', () => {

    // set the reactive data to store height and weight
    const height = ref('')
    const weight = ref('')

    // set a computed property to get calculated bmi using the reactive data
    const calculatedBMI = computed( () => {
        const bmi = (weight / ( height * height )).toFixed(2)
        return bmi
    } )

    return {
        // reactive data
        height,
        weight,

        // computed property
        calculatedBMI
    }

})