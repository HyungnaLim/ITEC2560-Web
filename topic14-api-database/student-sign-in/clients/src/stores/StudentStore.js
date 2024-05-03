import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    const sortedStudents = ref([])

    const mostRecentStudent = ref( {} )  // empty object

    const addNewStudentErrors = ref([])

    function getAllStudents() {
        // make a API request to get all students and save in store - studentList
        studentAPI.get().then( students => {  // students is the json response from the API
            sortedStudents.value = students
        }).catch(err => {
            console.log(err)
        })
    }

    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    function addNewStudent(student) {
        // make api call to add new student
        // call getAllStudent to re-request list of students from API server
        studentAPI.post(student).then( () => {
            getAllStudents()
        }).catch(err => {  // error handling
            addNewStudentErrors.value = err.body  // store error responses
        })
    }

    function deleteStudent(studentToDelete) {
        // make api request
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            getAllStudents()
        }).catch(err => {
            console.log(err)
        })
    }

    function arrivedOrLeft(student) {
        // make api request
        const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            getAllStudents()
        }).catch(err => {
            console.log(err)
        })
    }

    return {
        // reactive data
        sortedStudents,
        mostRecentStudent,
        addNewStudentErrors,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        getAllStudents,

        // computed properties
        studentCount,
    }

})