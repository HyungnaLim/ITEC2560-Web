import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        // example student data
        {name: 'A student', starID: 'aa1234aa', present: false},
        {name: 'B student', starID: 'bb1234bb', present: false}
    ])

    const mostRecentStudent = ref( {} ) // empty object

    const studentCount = computed( () => {
        return studentList.value.length
    })

    // sort student list by student name
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (student1, student2) => {
            return student1.name.localeCompare(student2.name)
        } )
    })

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter((student) => {
            // check all student in the studentList, keep the student if the argument return true, if not filter out
            return studentToDelete !== student
        })
        mostRecentStudent.value = {}  // reset most recent message, so no message is showing when someone's deleted
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount,
        sortedStudents
    }

})