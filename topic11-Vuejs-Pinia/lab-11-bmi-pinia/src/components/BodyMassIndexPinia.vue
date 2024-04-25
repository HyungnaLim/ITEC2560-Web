<script setup>
import { ref } from 'vue'

// use the store to save the height and weight
import {useStatsStore} from "../stores/StatsStore.js";
import {storeToRefs} from "pinia";

const StatsStore = useStatsStore()

// allow access to the height reactive data
const { height, weight } = storeToRefs(StatsStore)

</script>

<template>

  <label>Height in meters </label>
  <input v-model="height" type="number">

  <br>

  <label>Weight in kilograms </label>
  <input v-model="weight" type="number">

</template>

<style scoped>

</style>
