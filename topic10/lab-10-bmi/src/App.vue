<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

const bmi = ref('')

const calculateBMI = (height, weight) => {
  alert('todo - do math!')
}

</script>

<template>
  <div>

    <h1>Body Mass Index Calculator</h1>

  </div>
  <BodyMassIndexForm v-on:stats-entered="calculateBMI"/>
</template>

<style scoped>

</style>