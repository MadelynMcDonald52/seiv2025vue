<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const dept = ref('')
const courseNum = ref('')
const level = ref('')
const hours = ref('')   
const name = ref('')
const desc = ref('')
const message = ref("")
const emit = defineEmits(['close', 'updated'])

const props = defineProps({
  dept: {
    required: true,
  },
  course_number: {
    required: true,
  },
  level: {
    required: true,
  },
  hours: {
    required: true,
  },
  name: {
    required: true,
  },
  description: {
    required: true,
  },
});


const submitForm = async () => {
  try{
 const response = CourseServices.updateCourse(
    props.course_number,
  {
    
    dept: dept.value,
    course_number: courseNum.value,
    level: level.value,
    hours: hours.value,
    name: name.value,
    description: desc.value
  });
  console.log(response)
   emit('updated')
   emit('close');
   
  }  catch{
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
 
}


</script>

<template>
  <div class = "home-header">
    <h1>Update Course</h1>
  </div>

  <div id=centered> 
    <form @submit="submitForm">
    <input v-model="dept" :placeholder="props.dept" id="department" /><br>
    <input v-model="courseNum" id="courseNum" :placeholder="props.course_number"/><br>
    <input v-model="level" :placeholder="props.level" /><br>
    <input v-model="hours" :placeholder="props.hours" /><br>
    <input v-model="name" :placeholder="props.name" /><br>
    <input v-model="desc" :placeholder="props.description" /><br>
    <button class = "green-background" type="submit">Submit</button>
  </form>
 </div>
</template>

<style scoped>

</style>
