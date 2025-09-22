<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'
import { onBeforeMount } from "vue";

const message = ref("");
const lists = ref([]);
const CNString = "Course Number"
// const props = defineProps({
//   id: {
//     required: true,
//   },
// });

onBeforeMount(() => {
  getLists();
});

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
</script>

<template>
  <div class = "home-header">
    <h1>Course Management</h1>
  </div>
  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Add' }"><button class="home-button">Add</button></router-link>
    <router-link :to="{ name: 'Edit' }"><button class="home-button">Edit</button></router-link>
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
            <td>{{ list.description }}</td>
            <td id="modificationBox">
              <button @click="updateList()" class="green-button" role="link">Update</button>
              <button @click="updateList()" class="green-button" role="link">Delete</button>
            </td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<style scoped>

</style>
