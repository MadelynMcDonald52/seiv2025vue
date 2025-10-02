<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'
import { onBeforeMount } from "vue";

const message = ref("");
const lists = ref([]);
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
  if(confirm("Do you want to delete " + courseNumber + '?'))
  {
    try{
    console.log('Deleting Course: ' + courseNumber);
    const response = await CourseServices.deleteCourse(courseNumber);
    lists.value = response.data;
    message.value = "";

    location.reload();
    }
    catch{
      message.value = "Error: " + error.code + ":" + error.message;
      console.log(error);
    }
  }
  
}

let input = ref("");
let arr = [];
let deptArr = [];

function filteredList() {
  arr = [];
  deptArr = [];

  for (let Dept in lists.value) {
    arr.push(lists.value[Dept]);
  } 

  for (let el in arr) {
    if(arr[el].Dept.includes(input.value.toUpperCase())){
      deptArr.push(arr[el]);
    }
  }
  
  if(input.value.toUpperCase() == ""){
  return arr;
  }else{ 
    return deptArr;
  }
}
</script>

<template>
  <div class = "home-header">
    <h1>Course Management</h1>
  </div>
  <div class = flex-row-home-buttons>
   <input type="text" class = inputBetter v-model="input" placeholder="Search dept..." />
  </div>
  <div class = flex-row>
    <table class = table-home>
      <tbody>
          <tr>
            <td>Dept</td>
            <td>Number</td>
            <td>Level</td>
            <td>Hours</td>
            <td>Name</td>
            <td></td>
        </tr>
        <tr v-for="list in filteredList()" :key="list.index" :list="list">
            <td>{{ list.Dept }}</td>
            <td>{{ list['Course Number'] }}</td>
            <td>{{ list.level }}</td>
            <td>{{ list.hours }}</td>
            <td>{{ list.name }}</td>
            <td id="modificationBox">
              <router-link :to="{ name: 'edit_course', query: { id: list['Course Number'] } }">
                <button @click="updateList()" class="green-button" role="link">Update</button>
              </router-link>
              <button @click="deleteCourse(list['Course Number'])" class="green-button" role="link">Delete</button>
            </td>
        </tr>
      </tbody>
    </table> 
  </div>  
  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Add' }"><button class="home-button">Add</button></router-link>
    <router-link :to="{ name: 'Import' }"><button class="home-button">Import</button></router-link>
  </div>

</template>

<style scoped>
</style>
