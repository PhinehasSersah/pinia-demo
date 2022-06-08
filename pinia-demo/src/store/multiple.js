import { defineStore } from "pinia";

export const useMultipleStore = defineStore("multiple", {
  state: () => {
    return {};
  },
  actions: {
    //exported action
    numberMultiplier(number) {
      return number * 2;
    },
  },

  getters: {},
});
