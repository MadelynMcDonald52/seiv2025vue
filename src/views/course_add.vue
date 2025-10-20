<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'


const submitForm = () => {
  const response = CourseServices.updateCourse({
    Dept: dept.value,
    Course_Number: courseNum.value,
    Level: level.value,
    Hours: hours.value,
    Name: name.value,
    Description: desc.value
  });
  console.log(response)
}

// Data that will go into adding a course
const dept = ref('')        // Department (Ex: CMSC)
const courseNum = ref('')   // Course Number: Primary key in Database (Ex: CMSC-4124)
const level = ref('')       // Level: (0,1,2,3)
const hours = ref('')       // Hours: How many hours (Ex: 0,1,2,3,4,5,P,C)
const name = ref('')        // Name: What is the name of the course (Ex: Intro to Cybersecurity)
const desc = ref('')        // Description: What is the course about?

// Function to submit a new course.
async function submit() {
  const newDept = dept.value.toUpperCase(); // Uppercase dept (ex: cmsc => CMSC)
  const val = hours.value; // Assigning val to be an actual thing instead of ref('')
  const courseNumVal = dept.value + '-' + courseNum.value; // New value to store dept-courseNumber

  // if data looks good, add that john to the course
  // I would like to auto uppercase P or C. But we can't have nice things rn :(
  if ((val.toUpperCase() === 'P' || val.toUpperCase() === 'C') || (!isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0 && parseInt(val, 10) <= 9)) {
    // Sending that john to the database
    const response = await CourseServices.addCourse({
      Dept: newDept,
      Course_Number: courseNumVal,
      Level: level.value,
      Hours: hours.value,
      Name: name.value,
      Description: desc.value
    });
    location.reload() // reload the page to go back home (Because it doesnt do it automatically)
  } else { 
    // otherwise, alert the user that something is wrong. Need to be specific?
    // Hello!
    alert("Bad data inputted. Please try again!")
  }

}

</script>

<template>
  <!-- Header -->
  <div class = "home-header">
    <h1>Add Course</h1>
  </div>

  <!-- Input Fields -->
  <div id=centered> 

    <form @submit="submit()">
    <input v-model="dept" maxlength="4" placeholder="Department" /><br>
    <input v-model="courseNum" maxlength="5" placeholder="Course Number" /><br>
    <input v-model="level" maxlength="1" placeholder="Level" /><br>
    <input v-model="hours" maxlength="1" placeholder="Credit Hours" /><br>
    <input v-model="name" maxlength="100" placeholder="Course Name" /><br>
    <input v-model="desc" maxlength="10000" placeholder="Course Description" /><br>
    <button type="submit">Submit</button>
  </form>
 </div>

 <!-- Button to go Back -->
  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Cancel</button></router-link>
  </div>
</template>
