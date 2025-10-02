<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const lists = ref([]);

function addListener() {
    const customButton = document.getElementById("import-button");
    const fileInput = document.getElementById("file-input");

    if (!customButton.dataset.listenerAdded) {
        customButton.dataset.listenerAdded = "true";

        customButton.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", (event) => {
            const userFile = event.target.files[0];
            if (!userFile) return;

            const reader = new FileReader();

            reader.onload = (e) => {
                const fileContents = e.target.result;

                const lines = fileContents.split("\n");
                lists.value = lines;
                
                lists.value = displayContents(lines);
            };

            reader.onerror = (e) => {
                console.error("Error reading file:", e.target.error);
                document.getElementById("header").innerText = "Error reading file.";
            };

            reader.readAsText(userFile);
            document.getElementById("header").innerText = "Imported Data:"
        });
    }
    customButton.click();
}

function displayContents(data)
{
    let array = [];

    data.forEach(line => 
    {
        let parts = line.split(",");
        array.push(parts);
        //console.log(parts);
    });

    return array;
}

document.addEventListener('DOMContentLoaded', addListener);

/*

*/
</script>

<template>

<div id = "import-div">
    <button @click="addListener" id="import-button">Choose File</button>
    <input type="file" id="file-input" style="display:none;">
</div>
<div id = "import-div">
    <h2 id = "header"></h2>
</div>

<div class = flex-row>
    <table class = table-home>
        <tr v-for="list in lists" :key="list.index" :list="list">
            <td>{{ list[0] }}</td>
            <td>{{ list[1] }}</td>
            <td>{{ list[2] }}</td>
            <td>{{ list[3] }}</td>
            <td>{{ list[4] }}</td>
            <td>{{ list[5] }}</td>
        </tr>
    </table> 
    </div>  
    <div id = "import-div">
        <button @click="" id="import-button">Import!</button>
    </div>
    <div id = "back-div">
        <router-link :to="{ name: 'Home' }"><button id = "back-button" class="home-button">Back</button></router-link>
    </div>
    
</template>
<style scoped>

</style>
