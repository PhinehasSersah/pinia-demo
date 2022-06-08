import { defineStore } from "pinia";

import { useMultipleStore } from "./multiple";

const useActivityStore = defineStore("activity", {
  state: () => {
    return {
      userActivities: ["I am the first activity"],
      numberData: 0,
    };
  },
  actions: {
    addUserActivity(inputData) {
      this.userActivities.push(inputData.userData);
      inputData.userData = "";
    },

    //importing actions from other stores
    doubleNumber(num) {
      const multiple = useMultipleStore();
      this.numberData = multiple.numberMultiplier(num);
    },
  },
  getters: {
    getAllActivities: (state) => state.activities,
  },
});

export default useActivityStore;
