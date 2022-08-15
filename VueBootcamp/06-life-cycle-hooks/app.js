const app = Vue.createApp({
  data() {
    return {
      title: "Test header",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate running");
  },
  created() {
    console.log("created running");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 89, 33, 44, 0, 44];
    }, 2000);
  },
  beforeMount() {
    console.log("beforeMount running");
  },
  mounted() {
    console.log("mounted running");
  },
  beforeUpdate() {
    console.log("beforeUpdate running");
  },
  updated() {
    console.log("updated running");
  },
  beforeUnmount() {
    console.log("beforeUnmount running");
  },
  unmounted() {
    console.log("unmounted running");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
