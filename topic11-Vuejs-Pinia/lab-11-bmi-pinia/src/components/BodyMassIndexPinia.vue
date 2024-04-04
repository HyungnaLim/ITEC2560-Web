<script setup>
import { ref } from 'vue'

// use the store to save the height and weight
import {useStatsStore} from "../stores/StatsStore.js";
import {storeToRefs} from "pinia";

const StatsStore = useStatsStore()

// allow access to the height reactive data
const { height } = storeToRefs(StatsStore)
const { weight } = storeToRefs(StatsStore)

</script>

<template>

  <label>Height </label>
  <input v-model="height" type="number">

  <br>

  <label>Weight </label>
  <input v-model="weight" type="number">

  <br>

  <button>Calculate</button>

</template>

<style scoped>

</style>
