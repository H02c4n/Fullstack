const app = Vue.createApp({
  data() {
    return {
      title: "Vue JS First Lesson",
      desc: "Lorem ipsum dolar amet....",
      google: {
        url: "https://google.com",
        title: "Google",
        alt: "Google-anasayfa",
        target: "_blank",
      },
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle: function (pTitle) {
      this.title = pTitle;
    },
    updateCoords(message, event) {
      this.changeTitle(`${message} : ${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
