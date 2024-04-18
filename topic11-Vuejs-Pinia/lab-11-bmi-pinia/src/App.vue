<script setup>
// import the component
import BodyMassIndexPinia from './components/BodyMassIndexPinia.vue'

// import Pinia store
import {useStatsStore} from "./stores/StatsStore.js";   // be aware of the directory location
import {storeToRefs} from "pinia";

// get access to StatsStore
const StatsStore = useStatsStore()

// get access to calculatedBMI
const {calculatedBMI} = storeToRefs(StatsStore)

</script>

<template>

  <div>
    <h1>Body Mass Index Calculator</h1>
  </div>

  <BodyMassIndexPinia/>

  <div>
    Your BMI is {{ calculatedBMI }}
  </div>

</template>

<style scoped>

</style>
