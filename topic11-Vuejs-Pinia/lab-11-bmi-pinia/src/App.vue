<script setup>
import BodyMassIndexPinia from './components/BodyMassIndexPinia.vue'
import {useStatsStore} from "./stores/StatsStore.js";   // be aware of the directory location
import {storeToRefs} from "pinia";

const StatsStore = useStatsStore()

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
