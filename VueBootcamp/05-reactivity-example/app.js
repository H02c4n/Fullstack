const app = Vue.createApp({
  data() {
    return {
      itemList: ["apple", "pear", "orange", "aprikos"],
      search: "",
    };
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
}).mount("#app");
