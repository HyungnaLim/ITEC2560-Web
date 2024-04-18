<script setup>

import {ref} from 'vue'

// define & save student object prop - to make StudentRow to expect to receive student property
const props = defineProps( {
  student: Object
})

// can't modify the props,
// so set up a new reactive data to track presence of student - use v-model to connect
const isStudentPresent = ref(props.student.present)

// set new functions to emit events to StudentTable
const notifyArrivedOrLeft = () => {
  // tell parent that student arrived or left - emit event to the parent(StudentTable.vue)
  emit('arrived-or-left', props.student, isStudentPresent.value)
}

const ConfirmThenDeleteStudent = () => {
  emit('delete-student', props.student)
}

const emit = defineEmits( ['arrived-or-left', 'delete-student'])

</script>

<template>

  <tr class="align-middle" v-bind:class="{present:student.present, absent:!student.present}">

    <td> {{student.name}} </td>
    <td> {{student.starID}} </td>
    <!-- v-model checkbox -->
    <td> <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
      <span v-if="student.present" class="mx-2">Here!</span>
      <span v-else class="mx-2">Not present</span>
    </td>

    <td>
      <button class="btn btn-danger" v-on:click="ConfirmThenDeleteStudent">
        <!-- use bootstrap trashcan icon with i class -->
        <i class="bi bi-trash-fill"></i> Delete
      </button>
    </td>

  </tr>

</template>

<style scoped>

</style>