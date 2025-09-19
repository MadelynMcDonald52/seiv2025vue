import axios from "axios";

// This needs to be worked on more. NOT FINISHED!

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3467/api/Courses/";
} else {
  baseurl = "/api/Courses/";
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
  getCourses() {
    return apiClient.get("");
  },

  getLists() {
    return apiClient.get("lists");
  },
  getList(id) {
    return apiClient.get("lists/" + id);
  },
  addList(list) {
    return apiClient.post("lists", list);
  },
  updateList(listId, list) {
    return apiClient.put("lists/" + listId, list);
  },
  deleteList(listId) {
    return apiClient.delete("lists/" + listId);
  },

  getListItems(listId) {
    return apiClient.get("lists/" + listId + "/items");
  },
  addListItem(listId, item) {
    return apiClient.post("lists/" + listId + "/items", item);
  },
  updateListItem(listId, itemId, item) {
    return apiClient.put("lists/" + listId + "/items/" + itemId, item);
  },
  deleteListItem(listId, itemId) {
    return apiClient.delete("lists/" + listId + "/items/" + itemId);
  },
};