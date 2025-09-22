<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const dept = ref('')
const courseNum = ref('')
const level = ref('')
const hours = ref('')
const name = ref('')
const desc = ref('')

// Testing onMounted to see if it works
// function to return data from database as test
// const getCourses = async () => {
//   try {
//     const response = await CourseServices.getCourses()
//     console.log(response.data)
//   } catch (error) {
//     console.error('Error fetching courses:', error)
//   }
// }

const submitForm = () => {
  console.log('Form submitted:', {
    dept: dept.value,
    courseNum: courseNum.value,
    level: level.value,
    hours: hours.value,
    name: name.value,
    desc: desc.value
  });
}
</script>

<template>
  <div class = "home-header">
    <h1>Add Course</h1>
  </div>

  <div id=centered> 
    <form @submit="submitForm">
    <input v-model="dept" placeholder="Department" /><br>
    <input v-model="courseNum" placeholder="Course Number" /><br>
    <input v-model="level" placeholder="Level" /><br>
    <input v-model="hours" placeholder="Credit Hours" /><br>
    <input v-model="name" placeholder="Course Name" /><br>
    <input v-model="desc" placeholder="Course Description" /><br>
    <button type="submit">Submit</button>
  </form>
 </div>

  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Back</button></router-link>
  </div>
</template>

<style scoped>

</style>
