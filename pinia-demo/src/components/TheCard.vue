<template>
  <div>
    <div
      class="activity-div"
      v-for="(activity, index) in store.userActivities"
      :key="index"
    >
      <p>{{ index + 1 }}: {{ activity }}</p>
    </div>
  </div>
</template>

<script setup>
import useActivityStore from "../store/activity.js";

const store = useActivityStore();
</script>

<style scoped>
.activity-div {
  width: 300px;
  height: 30px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
}
</style>
