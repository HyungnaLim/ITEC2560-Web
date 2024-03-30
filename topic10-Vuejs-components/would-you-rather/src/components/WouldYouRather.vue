<script setup>
import { ref, watch } from 'vue'

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

// solution1 : to make this function works, add v-on:change="choiceMade" on the radio buttons
// function choiceMade() {
//   // emit event to tell parent that user has made choice
//   emit('answer-selected', choice.value)
// }


// solution2
// watch function - watch if the value changes
// can have argument oldval, newval if needed
watch(choice, () => {
  emit('answer-selected', choice.value)
})

</script>

<template>

  <div id="wyr">
    <h2>Make your choice!</h2>

    <p>{{ question }}</p>

    <div>
    <!-- Bind radio buttons using v-model and v-bind -->
    <input v-model="choice" v-bind:value="answer1" type="radio" id="answer1">
    <label for="answer1">{{ answer1 }}</label>

    <input v-model="choice" v-bind:value="answer2" type="radio" id="answer2">
    <label for="answer2">{{ answer2 }}</label>
    </div>

  </div>

</template>

<style scoped>

#wyr {
  background-color: lemonchiffon;
  padding: 20px;
}

p {
  font-family: "Comic Sans MS";
}

</style>
