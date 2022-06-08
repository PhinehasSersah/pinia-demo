<template>
  <div class="wrapper">
   
    <div class="container">
      <label for="input">Enter Activity</label>
      <input v-model="inputData.userData" type="text" id="input" />

      <!-- using actions in the store to mutate the state -->

      <div class="btn-div">
        <button @click="store.addUserActivity(inputData)">Add Activity</button>
      </div>

      <!-- using $patch to mutate State -->

      <div class="btn-div">
        <button @click="updateActivity(inputData)">Patch Activity</button>
      </div>

      <div class="reset">
        <button @click="store.$reset()">Reset Activity</button>
      </div>

      <!-- getters -->
      <p>Number of Activities = {{store.getAllActivities}}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useActivityStore from "../store/activity.js";

const store = useActivityStore();
const inputData = ref({
  userData: "",
});

//  using $patch to mutate State

const updateActivity = (data) => {
  store.$patch((state) => {
    state.userActivities.push(data.userData);
    data.userData = "";
  });
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(143, 135, 135);
  padding-top: 5rem;
}
.btn-div {
  width: 200px;
  height: 30px;
  margin: 40px auto;
}
.reset {
  width: 100px;
  height: 20px;
  margin: 10px auto;
}
.reset button {
  width: 100%;
  height: 100%;
  background: red;
  border: none;
}
.reset button:active {
  outline: 2px solid black;
}
.btn-div button {
  width: 100%;
  height: 100%;
  border: none;
  background: rgb(175, 113, 113);
  color: black;
  cursor: pointer;
}
.btn-div button:active {
  outline: 2px solid black;
}
label {
  margin: 15px;
  font-size: 1.5rem;
}
input[type="text"] {
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 1rem;
  margin-top: 15px;
}
.container {
  width: 400px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}
</style>
