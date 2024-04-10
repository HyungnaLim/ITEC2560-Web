<script setup>

</script>

<template>

  <tr class="align-middle" v-bind:class="{present:student.present, absent:!student.present}">

    <td> {{student.name}} </td>
    <td> {{student.starID}} </td>

    <!-- v-model checkbox -->
    <td> <input type="checkbox" v-on:change="arrivedOrLeft(student)">
      <span v-if="student.present" class="mx-2">Here!</span>
      <span v-else class="mx-2">Not present</span>
    </td>

    <td>
      <button class="btn btn-danger" v-on:click="deleteStudent(student)">
        <!-- use bootstrap trashcan icon with i class -->
        <i class="bi bi-trash-fill"></i> Delete
      </button>
    </td>

  </tr>

</template>

<style scoped>

</style>