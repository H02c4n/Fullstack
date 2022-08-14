const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    // getCounterResult() {
    //   return this.counter2 > 5 ? "BIGGER THEN FIVE" : "SMALLER THEN FIVE";
    // },
    inc() {
      this.counter += 1;
    },
    dec() {
      this.counter -= 1;
    },
  },
  computed: {
    getCounterResult() {
      console.log("Counter 1 running");
      return this.counter > 5 ? "BIGGER THEN FIVE" : "SMALLER THEN FIVE";
    },
    getCounter2Result() {
      console.log("Counter 2 running");
      return this.counter2 > 5 ? "BIGGER THEN FIVE" : "SMALLER THEN FIVE";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },

    counter2(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
}).mount("#app");
