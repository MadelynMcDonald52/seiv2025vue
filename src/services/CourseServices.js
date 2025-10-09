import axios from "axios";

// This needs to be worked on more. NOT FINISHED!

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3467/api/Courses/";
} else {
  baseurl = "/course-t4/courses";
}

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
  },
  transformRequest: (data, headers) => {
    return JSON.stringify(data);
  },
  transformResponse: function (data) {
    data = JSON.parse(data);
    return data;
  },
});

export default {
  // Course methods

  getCourses() {
    return apiClient.get("/");
  },
  //Primary key for course
  getCourse(number) {
    return apiClient.get("/" + number);
  },

  addCourse(course) {
    return apiClient.post("/", course);
  },

  updateCourse(number, course){
    return apiClient.put("/" + number, course)
  },
  
  deleteCourse(courseNumber){
    return apiClient.delete('/' + courseNumber)
  },

  //Just want to note these get all the courses that have the same dept name, hours, or level, etc.
  //not all the departments.
  // Get Departments
  getDept(deptId) {
    return apiClient.get("/" + deptId);
  },
  
  // Get hours
  getHours(hours) {
    return apiClient.get("?hours=" + hours);
  },

  // Get Levels
  getLevels(level) {
    return apiClient.get("?level=" + level);
  },

  // Get Names
  getNames(name) {
    return apiClient.get("?name=" + name);
  },

  // addList(list) {
  //   return apiClient.post("lists", list);
  // },
  // updateList(listId, list) {
  //   return apiClient.put("lists/" + listId, list);
  // },
  // deleteList(listId) {
  //   return apiClient.delete("lists/" + listId);
  // },

  // getListItems(listId) {
  //   return apiClient.get("lists/" + listId + "/items");
  // },
  // addListItem(listId, item) {
  //   return apiClient.post("lists/" + listId + "/items", item);
  // },
  // updateListItem(listId, itemId, item) {
  //   return apiClient.put("lists/" + listId + "/items/" + itemId, item);
  // },
  // deleteListItem(listId, itemId) {
  //   return apiClient.delete("lists/" + listId + "/items/" + itemId);
  // },
};