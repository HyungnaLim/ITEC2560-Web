<script setup>
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";
import { ref } from 'vue'

const bmi = ref('')

const heightEntered = ref('')
const weightEntered = ref('')

const calculateBMI = (height, weight) => {
  heightEntered.value = height
  weightEntered.value = weight

  // calculate bmi
  bmi.value = (weight / ( height * height )).toFixed(2)
}

</script>

<template>

  <div id="app">
    <h1>Body Mass Index Calculator</h1>

    <BodyMassIndexForm v-on:stats-entered="calculateBMI"/>
    <br>

    <div>
      Your BMI is <b>{{bmi}}</b>
    </div>
  </div>

</template>

<style scoped>

#app {
  border: solid 3px blue;
  background-color: lightblue;
}

</style>