<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

</script>

<template>


<div class = flex-row-home-buttons>
    <button id="custom-button">Choose File</button>
    <input type="file" id="file-input" style="display:none;">
    <router-link :to="{ name: 'Home' }"><button class="home-button">Back</button></router-link>
</div>
</template>

<style scoped>

</style>

<script>
document.getElementById("custom-button").addEventListener("click", function() {document.getElementById("file-input").click();});
</script>