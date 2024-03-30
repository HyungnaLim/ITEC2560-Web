<script setup>
import { ref } from 'vue'

defineProps({

})

const height = ref('')
const weight = ref('')

const emit = defineEmits(['stats-entered'])

function statsEntered() {
  emit('stats-entered', height.value, weight.value)
}

</script>

<template>

  <label>Height </label>
  <input v-model="height">

  <br>

  <label>Weight </label>
  <input v-model="weight">

  <br>

  <button v-on:click="statsEntered">Calculate</button>

</template>

<style scoped>

button {
  background-color: skyblue;
  margin: 10px;
}

</style>
