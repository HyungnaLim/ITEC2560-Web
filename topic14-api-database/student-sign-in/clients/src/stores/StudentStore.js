import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    const studentList = ref([])

    const mostRecentStudent = ref( {} )  // empty object

    function getAllStudents() {
        // make a API request to get all students and save in store - studentList
        studentAPI.get().then( students => {  // students is the json response from the API
            studentList.value = students
        })
    }

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
        getAllStudents,

        // computed properties
        studentCount,
        sortedStudents
    }

})