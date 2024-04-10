<script setup>

import { ref } from 'vue'

// access to the student store
import { useStudentStore } from "../stores/StudentStore.js";
const studentStore = useStudentStore()

const newStudentName = ref('')
const newStarID = ref('')

const formErrors = ref([])

function addStudent() {
  formErrors.value = []   // reset form errors

  if (!newStudentName.value) {
    formErrors.value.push('Student name must be entered.')
  }

  if (!newStarID.value) {
    formErrors.value.push('StarID must be entered.')
  }

  if (formErrors.value.length === 0) { // if there is no error in the list
    let student = {name: newStudentName.value, starID: newStarID.value, present: false}

    // add student to the store
    studentStore.addNewStudent(student)

    // clear the form
    newStudentName.value = ''
    newStarID.value = ''
  }
}


</script>

<template>

  <div id="new-student-form-errors" class="m-2">
    <!-- show errors from form validation -->
    <div class="alert alert-danger" v-if="formErrors.length > 0">
      <li v-for="error in formErrors">
        {{error}}
      </li>
    </div>
  </div>


  <div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group mb-3">
      <label for="name">Name</label>
      <!-- v-model newStudentName, .trim for whitespace control in input -->
      <input id="name" class="form-control" v-model.trim="newStudentName">
    </div>

    <div class="form-group mb-3">
      <label for="starID">Star ID</label>
      <!-- v-model newStarID, .trim for whitespace control in input -->
      <input id="starID" class="form-control" v-model.trim="newStarID">
    </div>

    <!-- v-on:click event handler -->
    <button class="btn btn-primary" v-on:click="addStudent">Add</button>
  </div>

</template>

<style scoped>

</style>
