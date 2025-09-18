<script setup>
import {onMounted, ref} from 'vue'
</script>

<template>
  <div class = "home-header">
      <h1>Course Management</h1>
    </div>
    
    <div class = flex-row>
      <table class = table-home>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
          </tr>
          <tr>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
          </tr>
          <tr>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
            <td>This will be the table of courses</td>
          </tr>
          <tr v-for="(row, index) in rows" :key="index">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  <div class = flex-row-home-buttons>
    <router-link :to="{ name: 'Add' }"><button class="home-button">Add</button></router-link>
  </div>
 
</template>

<style scoped>

</style>
