const app = Vue.createApp({
  data() {
    return {
      borderStatus: false,
      bgStatus: false,
      boxClass: "border red",
      bgColor: "olive",
      pddng: "2px",
    };
  },
  computed: {
    boxClasses() {
      return { dashedBorder: this.borderStatus, redBG: this.bgStatus };
    },
  },
});

app.mount("#app");
