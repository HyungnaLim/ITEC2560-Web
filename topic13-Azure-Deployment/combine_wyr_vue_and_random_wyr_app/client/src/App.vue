<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

// import ref to create reactive data
import {onMounted, ref} from 'vue'
import wyrService from "./services/wyrService.js";

// create reactive data for question and answers
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// this will store the user's answer once they made a choice
const userSelection = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    // expect data format
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

function updateUserSelection(userChoice) {
  // save user's choice value in userSelection
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template>

  <div id="app-component">

    <h1>Would You Rather?</h1>

    <!-- send the data to WouldYouRather template using v-bind -->
    <WouldYouRather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection">
    </WouldYouRather>

      <p><i>{{ userSelection }}</i></p>

  </div>

</template>

<style scoped>

p {
  font-family: "Retro Gaming";
}

#app-component {
  background-color: lightskyblue;
  padding: 30px;
}

</style>
