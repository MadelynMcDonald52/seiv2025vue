<script setup>
import {onMounted, ref} from 'vue'
import { useRoute} from 'vue-router'

import CourseServices from '../services/CourseServices.js'

  const route = useRoute()

const dept = ref('')
const courseNum = ref('')
const level = ref('')
const hours = ref('')   
const name = ref('')
const desc = ref('')


const props = defineProps({
  course_number: {
    required: true,
  },
});

console.log(props.course_number);

const submitForm = () => {
  const response = CourseServices.addCourse({
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
    <h1>Course Modify</h1>
  </div>

  <div id=centered> 
    <form @submit="submitForm">
    <input v-model="dept" placeholder="Department" id="department" /><br>
    <input v-model="courseNum" id="courseNum" placeholder="Course Number"/><br>
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
