<script setup>

import {onMounted} from 'vue'

import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";

// enable app.vue to access StudentStore
import {useStudentStore} from './stores/StudentStore'
const studentStore = useStudentStore()

onMounted( () => {
  // whatever is in here will run when the component is first displayed
  studentStore.getAllStudents()
})

</script>

<template>

  <NewStudentForm/>
  <StudentTable/>
  <StudentMessage/>

</template>

<style scoped>

</style>
