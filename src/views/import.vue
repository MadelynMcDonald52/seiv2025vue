<script setup>
import {onMounted, ref} from 'vue'
import CourseServices from '../services/CourseServices.js'

const lists = ref([]);//list for the page display
const parsedList = [];//list to send to the database

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

            reader.onload = (e) => 
            {
                const fileContents = e.target.result;

                const lines = fileContents.split("\n");
                lists.value = displayContents(lines);//the ref version and the array version need the info
                //console.log(lists);
            };

            reader.onerror = (e) => 
            {
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
    //console.log(array);
    parsedList.value = array;
    return array;
}

document.addEventListener('DOMContentLoaded', addListener);

async function addCourses()
{
    if(lists.length != 0)
    {
        //console.log(parsedList.value);
        for(const list in parsedList.value)
        {
            //console.log(parsedList.value[list]);
            let parts = parsedList.value[list];

            if(parts[0] != 'Dept')//filter out the first row since it is just the header
            {
                let dept = parts[0].toUpperCase(); // Uppercase dept (ex: cmsc => CMSC)
                const val = parts[3]; // Assigning val to be an actual thing instead of ref('')

                //console.log(parts);
                //console.log(dept + ", " + parts[1] + ", " + parts[2] + ", " + val + ", " + parts[4] + ", " + parts[5])

                // if data looks good, add that john to the course
                // I would like to auto uppercase P or C. But we can't have nice things rn :(
                if ((val === 'P' || val === 'p' || val === 'C' || val === 'c') || (!isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0 && parseInt(val, 10) <= 9)) {
                    // Sending that john to the database
                    
                    const response = await CourseServices.addCourse({
                        Dept: dept,
                        Course_Number: dept+'-'+parts[1],
                        Level: parts[2],
                        Hours: val,
                        Name: parts[4],
                        Description: parts[5]
                    });
                } 
                else 
                { 
                    // otherwise, alert the user that something is wrong. Need to be specific?
                    alert("Bad data inputted. Please try again!");
                }
            }
        };
        location.reload() // reload the page to go back home (Because it doesnt do it automatically)
    }
    else
    {
        //do nothing
    }
}

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
        <button @click="addCourses" id="import-button">Import!</button>
    </div>
    <div id = "back-div">
        <router-link :to="{ name: 'Home' }"><button id = "back-button" class="home-button">Back</button></router-link>
    </div>
    
</template>
<style scoped>

</style>
