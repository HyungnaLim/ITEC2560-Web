<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

// import ref to create reactive data
import {ref} from 'vue'

// create reactive data
const wyrQuestion = ref('Live in a house shaped like a triangle or a house shaped like a circle')
const wyrAnswer1 = ref('Triangle house')
const wyrAnswer2 = ref('Circle house')

// this will store the user's answer once they made a choice
const userSelection = ref('')

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
