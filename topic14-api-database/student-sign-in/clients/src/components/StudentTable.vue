<script setup>

import { useStudentStore } from "../stores/StudentStore.js";
import { storeToRefs } from 'pinia'  // this will convert data in the store into refs
import { computed } from 'vue'

import StudentRow from "./StudentRow.vue";

const studentStore = useStudentStore()

const { sortedStudents, studentCount } = storeToRefs(studentStore)

const deleteStudent = (student) => {
  studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student, isStudentPresent) => {
  student.present = isStudentPresent  // okay to make changes to student data here. it will affect on the store as well
  studentStore.arrivedOrLeft(student)
}

// set a computed data to display the student cont message with correct grammar
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
        <!-- v-for to create one StudentRow component for each student in the sortedStudents,
         v-bind to send a student object data to each StudentRow component
         v-on to receive 'arrived-or-left', 'delete-student' events from each student row to update student.present data -->
        <StudentRow
            v-for="student in sortedStudents"
            v-bind:student="student"
            v-on:arrived-or-left="arrivedOrLeft"
            v-on:delete-student="deleteStudent"> </StudentRow>
        </tbody>

      </table>
    </div>
  </div>

</template>

<style scoped>

#student-table {
  max-height: 500px;
  overflow: scroll;
}

th, td {
  width: 25%;
  text-align: center;
}

</style>