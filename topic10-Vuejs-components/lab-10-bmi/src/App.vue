<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

const bmi = ref('')

const heightEntered = ref('')
const weightEntered = ref('')

const calculateBMI = (height, weight) => {
  alert('todo - do math!')
  heightEntered.value = height
  weightEntered.value = weight
  bmi.value = height // todo do math
}

</script>

<template>
  <div>

    <h1>Body Mass Index Calculator</h1>

  </div>

  <BodyMassIndexForm v-on:stats-entered="calculateBMI"/>

  <div>
  The BMI calculated is {{bmi}}
  Your height was {{heightEntered}}, weight was {{weightEntered}}
  </div>

</template>

<style scoped>

</style>