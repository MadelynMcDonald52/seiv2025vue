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

onMounted(() =>{
  dept.value = props.dept;
  courseNum.value = props.course_number;
  level.value = props.level;
  hours.value = props.hours;
  name.value = props.name;
  desc.value = props.description
})
</script>

<template>
  <div class = "home-header">
    <h1>Update Course</h1>
  </div>

  <div id=centered> 
    <form @submit="submitForm">
    <input v-model="dept"  id="department" /><br>
    <input v-model="courseNum" id="courseNum" /><br>
    <input v-model="level"  /><br>
    <input v-model="hours"  /><br>
    <input v-model="name" /><br>
    <input v-model="desc" /><br>
    <button class = "green-background" type="submit">Submit</button>
  </form>
 </div>
</template>



<style scoped>

</style>
