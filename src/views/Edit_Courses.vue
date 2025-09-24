<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const message = ref("");
const list = ref({});
const errors = ref({});
const lists = ref({})
const item = ref({});
// const props = defineProps({
//   id: {
//     required: true,
//   },
// });

onMounted(() => {
  CourseServices.getCourses().then((response) => {
      lists.value = response.data.list;
      message.value = "";
    })
    .catch((error) => {
      message.value = "Error: " + error.code + ":" + error.message;
      console.log(error);
    });
});

async function addItem() {
  try {
    const response = await CourseServices.addListItem(props.id, item.value);
    items.value = response.data.items;
    message.value = "";
    getListItems();
  }
  catch(error) {
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
}

async function updateListItem(itemId, updatedItem) {
  try {
    const response = await CourseServices.updateListItem(props.id, itemId, updatedItem);
    items.value = response.data.items;
    message.value = "";
    getListItems();
  }
  catch(error) {
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
}

async function deleteListItem(itemId) {
  try {
    const response = await CourseServices.deleteListItem(props.id, itemId);
    items.value = response.data.items;
    message.value = "";
    getListItems();
  }
  catch(error) {
    message.value = "Error: " + error.code + ":" + error.message;
    console.log(error);
  }
}

async function updateList() {
  try {
    const response = await CourseServices.updateList(props.id, list.value);
    router.push({ name: "lists" });
  }
  catch(error) {
    if (error.response.status == "406") {
        for (let obj of error.response.data) {
          errors.value[obj.attributeName] = obj.message;
        }
      } 
      else {
        message.value = "Error: " + error.code + ":" + error.message;
        console.log(error);
      }
  }
}
</script>

<template>  
    <div class = "home-header">
    <h1>Course List</h1>
    </div>
    <div class="button-grid-containers">
      <button @click="showAddWindow = true" role="link">Add Item</button>
      <button @click="updateList()" class="green-button" role="link">Update List</button>
      <button @click="cancel()" class="red-button" role="link">Cancel</button>
    </div>

    <div v-if="showAddWindow" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span @click="showAddWindow = false" class="close">&times;</span>
                <p>Add Item</p>

                <div class="form-group">
                <label for="name">Department<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.name" type="text" id="Dept" />

                <label for="description">Course Number<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.description" type="text" id="Course Number" />

                <label for="state">Level<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.state" type="text" id="level" />

                <label for="state">Hours<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.state" type="text" id="hours" />

                <label for="state">Name<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.state" type="text" id="name" />

                <label for="state">Description<span id="nameErr" class="text-error"></span></label>
                <input v-model="item.state" type="text" id="description" />
            </div>
        </div>
      <br />
      <div class="modal-body">
        <button class="green-button" @click="addItem()" >Save</button>  
        <button v-on:click="showAddWindow = false">Cancel</button>  
        <button v-on:click=" deleteError = false; showAddWindow = false;">Close</button>
      </div>
    </div>

    <div class="grid-containers">
      <ListDisplay
        v-for="list in lists"
        :key="list.id"
        :list="list"
        @deleteItem="deleteListItem"
        @updateItem="updateListItem"
      />
    </div>
  </div>
 
</template>

<style scoped>

</style>