<template>
  <div class="wrapper">
    <div class="container">
      <label for="input">Enter Number</label>
      <input v-model="inputNumber" type="number" id="input" />

      <div class="btn-div">
        <button @click="store.doubleNumber(inputNumber)">Double Number</button>
      </div>

      <p class="display">{{ store.numberData }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useActivityStore from "../store/activity.js";

const store = useActivityStore();

const inputNumber = ref();
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(143, 135, 135);
  padding-top: 5rem;
}
.display {
  text-align: center;
  font-size: 2rem;
}
.btn-div {
  width: 200px;
  height: 30px;
  margin: 40px auto;
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
input[type="number"] {
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
