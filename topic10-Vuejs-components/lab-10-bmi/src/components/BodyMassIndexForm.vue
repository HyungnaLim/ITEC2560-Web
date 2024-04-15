<script setup>
import { ref } from 'vue'

defineProps({

})

const height = ref('')
const weight = ref('')

const emit = defineEmits(['stats-entered'])

function statsEntered() {
  // send the data to App.vue to do math
  emit('stats-entered', height.value, weight.value)
}

</script>

<template>

  <div id="form">
  <h2>Enter your height and weight</h2>

  <label>Height </label>
  <input v-model="height" type="number">

  <br>

  <label>Weight </label>
  <input v-model="weight" type="number">

  <br>

  <button v-on:click="statsEntered">Calculate</button>
  </div>

</template>

<style scoped>

button {
  background-color: indianred;
  margin: 10px;
}

#form {
  border: solid 3px red;
  background-color: mistyrose;
}

</style>
