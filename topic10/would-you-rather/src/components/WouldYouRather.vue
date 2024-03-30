<script setup>
import { ref } from 'vue'

// props
// data given to a child (WouldYouRather) by the parent (App)
// a component should not modify its props
defineProps({
  question: String,
  answer1: String,
  answer2: String
})

// reactive state data to store user's answer
// data belongs to a component, typically used just for this component
const choice = ref('')

const emit = defineEmits([
    'answer-selected'
])

function choiceMade() {
  // emit event to tell parent that user has made choice
  emit('answer-selected', choice.value)
}

</script>

<template>
  <h2>Make your choice!</h2>

  {{ question }}

  <br>

  <!-- Bind radio buttons using v-model and v-bind -->

  <input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="answer1">
  <label for="answer1">{{ answer1 }}</label>

  <input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade" type="radio" id="answer2">
  <label for="answer2">{{ answer2 }}</label>

</template>

<style scoped>
</style>
