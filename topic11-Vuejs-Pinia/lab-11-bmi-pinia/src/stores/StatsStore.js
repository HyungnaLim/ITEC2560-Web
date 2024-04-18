import { defineStore } from "pinia"

import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stat', () => {

    const height = ref('')
    const weight = ref('')

    const calculatedBMI = computed( () => {
        const bmi = (weight / ( height * height )).toFixed(2)
        return bmi
    } )

    return {
        height,
        weight,
        calculatedBMI
    }

})