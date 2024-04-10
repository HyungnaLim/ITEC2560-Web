<script setup>

import { useStudentStore } from "../stores/StudentStore.js";
import { storeToRefs } from 'pinia'  // this will convert data in the store into refs
import { computed } from 'vue'

import { StudentRow } from "./StudentRow.vue";

const studentStore = useStudentStore()

const { sortedStudents, studentCount } = storeToRefs(studentStore)

const deleteStudent = (student) => {
  studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student) => {
  studentStore.arrivedOrLeft(student)
}

// set a computed data to display the student count message with correct grammar
// This doesn't need to be in the store because only StudentTable needs this data
const pluralStudentMessage = computed( () => {
  if (studentCount.value === 1) {
    return `There is ${studentCount.value} student in class`
  } else {
    return `There are ${studentCount.value} students in class`
  }
})

</script>

<template>

  <div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5 class="card-subtitle text-muted">{{pluralStudentMessage}}</h5>
    <div id="student-table">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
          <th>Delete</th>
        </tr>
        </thead>

        <tbody>
        <StudentRow v-for="student in sortedStudents"> </StudentRow>
        </tbody>

      </table>
    </div>
  </div>

</template>

<style scoped>

</style>