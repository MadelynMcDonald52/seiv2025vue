<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const dept = ref('')
const courseNum = ref('')
const level = ref('')
const hours = ref('')
const name = ref('')
const desc = ref('')

async function submit() {
  const val = hours.value;
  if ((val.toUpperCase() === 'P' || val.toUpperCase() === 'C') || (!isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0 && parseInt(val, 10) <= 9)) {
    console.log("hours is " + val);
    const response = await CourseServices.addCourse({
      dept: dept.value,
      course_number: courseNum.value,
      level: level.value,
      hours: hours.value,
      name: name.value,
      description: desc.value
    });
    
    console.log("Success!: " + response);
  } else {
    console.log('BAD DATA!');
  }
  location.reload()
}


</script>

<template>
  <div class = "home-header">
    <h1>Add Course</h1>
  </div>

  <div id=centered> 
    <form @submit="submit()">
    <input v-model="dept" maxlength="4" placeholder="Department" /><br>
    <input v-model="courseNum" maxlength="10" placeholder="Course Number" /><br>
    <input v-model="level" maxlength="1" placeholder="Level" /><br>
    <input v-model="hours" maxlength="1" placeholder="Credit Hours" /><br>
    <input v-model="name" maxlength="100" placeholder="Course Name" /><br>
    <input v-model="desc" maxlength="10000" placeholder="Course Description" /><br>
    <button type="submit">Submit</button>
  </form>
 </div>

  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Back</button></router-link>
  </div>
</template>

<style scoped>

</style>
