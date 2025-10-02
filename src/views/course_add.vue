<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const dept = ref('')
const courseNum = ref('')
const level = ref('')
const hours = ref('')   
const name = ref('')
const desc = ref('')

const submitForm = () => {
  const response = CourseServices.updateCourse({
    dept: dept.value,
    course_number: courseNum.value,
    level: level.value,
    hours: hours.value,
    name: name.value,
    description: desc.value
  });
  console.log(response)
}

</script>

<template>
  <div class = "home-header">
    <h1>Add Course</h1>
  </div>

  <div id=centered> 
    <form @submit="submitForm">
    <input v-model="dept" placeholder="Department" id="department" /><br>
    <input v-model="courseNum" id="courseNum" placeholder="Course Number"/><br>
    <input v-model="level" placeholder="Level" /><br>
    <input v-model="hours" placeholder="Credit Hours" /><br>
    <input v-model="name" placeholder="Course Name" /><br>
    <input v-model="desc" placeholder="Course Description" /><br>
    <button class ="green-background"type="submit">Submit</button>
  </form>
 </div>

  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Cancel</button></router-link>
  </div>
</template>

<style scoped>

</style>
