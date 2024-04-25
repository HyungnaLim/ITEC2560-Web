import { defineStore } from "pinia"

import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stats', () => {

    // set the reactive data to store height and weight
    const height = ref(0)
    const weight = ref(0)

    // set a computed property to get calculated bmi using the reactive data
    const calculatedBMI = computed( () => {
        const bmi = (weight.value / (height.value * height.value)).toFixed(2)  // don't forget to use .value!!
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