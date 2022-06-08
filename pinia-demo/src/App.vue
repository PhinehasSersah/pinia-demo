<template>
  <div class="main">
    <div>
      <TheInput />
      <TheCard />
    </div>

    <div>
      <TheNumber />
    </div>
  </div>
</template>

<script setup>
import TheInput from "./components/TheInput.vue";
import TheCard from "./components/TheCard.vue";
import TheNumber from "./components/TheNumber.vue";
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main {
  width: 100vw;
  height: 100vh;
  background: rgb(143, 135, 135);
  display: flex; 
  justify-content: space-around;
}
</style>
