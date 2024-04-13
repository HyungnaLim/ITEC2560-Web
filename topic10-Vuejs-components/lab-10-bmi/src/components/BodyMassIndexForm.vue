<script setup>
import { ref } from 'vue'

defineProps({

})

const height = ref('')
const weight = ref('')

const emit = defineEmits(['stats-entered'])

function statsEntered() {
  // simple validation - optional


  // send the data to App.vue to do math
  emit('stats-entered', height.value, weight.value)
}

</script>

<template>

  <label>Height </label>
  <input v-model="height" type="number">

  <br>

  <label>Weight </label>
  <input v-model="weight" type="number">

  <br>

  <button v-on:click="statsEntered">Calculate</button>

</template>

<style scoped>

button {
  background-color: skyblue;
  margin: 10px;
}

</style>
