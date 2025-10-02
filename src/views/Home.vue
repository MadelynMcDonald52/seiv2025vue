<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'
import { onBeforeMount } from "vue";
import Update_Courses from '../components/Update_Courses.vue';

const message = ref("");
const lists = ref([]);
const showModal = ref(false)

//this could be a class! Notes for my future self - Julian
let temp_dept = ""
let temp_course_number = ""
let temp_level = ""
let temp_hours = ""
let temp_name = ""
let temp_desc = ""

const CNString = "Course Number"


onBeforeMount(() => {
  getLists();
});

// Gets lists
async function getLists() {
  try{
    const response = await CourseServices.getCourses();
    lists.value = response.data;
    message.value = "";
  }
  catch(error){
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
}

// Delete courses
// prompts users if they wanted to delete
async function deleteCourse(courseNumber){
  if(confirm("Do you want to delete " + courseNumber + '?')){
    try{
    console.log('Deleting Course: ' + courseNumber);
    const response = await CourseServices.deleteCourse(courseNumber);
    lists.value = response.data;
    message.value = "";
      message.
    location.reload();
  }
  catch{
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
  }
  
}

//This is here so that I don't put the modal inside the "v-for thing you got"
//going on there.

//Updatelists
//this saved the ID of the Selected list so it can be passed as a prop.
let selectedList = ""
function toggleModal(){
  showModal.value = true;
  console.log(showModal.value)
}
function removeModal(){
  showModal.value = false;
  console.log(showModal.value)
}

//Boolean value to trigger when the modal appears

</script>

<template>
  <div class = "home-header">
    <h1>Course Management</h1>
  </div>
  <div class = flex-row>
    <table class = table-home>
      <tbody>
        <tr v-for="list in lists" :key="list.index" :list="list">
            <td>
              <input type="checkbox" showAddWindow = "true"></input>
            </td>
            <td>{{ list.Dept }}</td>
            <td>{{ list['Course Number'] }}</td>
            <td>{{ list.level }}</td>
            <td>{{ list.hours }}</td>
            <td>{{ list.name }}</td>
            <td id="modificationBox">
              <button @click="toggleModal(),  selectedList = list['Course Number'], temp_dept = list.Dept, temp_course_number = list['Course Number'], temp_level = list.level, temp_hours = list.hours, temp_name = list.name, temp_desc = list.description" class="green-button" role="link">Update</button>
              <button @click="deleteCourse(list['Course Number'])" class="red-background" role="link">Delete</button>
            </td>
        </tr>
      </tbody>
    </table> 
  </div>  
  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Add' }"><button class="home-button">Add</button></router-link>
  </div>
  <div v-if="showModal" id =update-modal>
    <Update_Courses 
        :dept="temp_dept"
        :course_number="temp_course_number"
        :level="temp_level"
        :hours="temp_hours"
        :name="temp_name"
        :description="temp_desc"
        @updated="getLists"
        @close="showModal = false"
        
      />
    <div class = flex-row-home-buttons>
   <button @click="removeModal()" class="home-button red-background">Cancel</button>
  </div>
  </div>
     
    

</template>

<style scoped>
</style>
