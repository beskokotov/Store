const app = new Vue({
  el: "#root",
  data: {
    // title: "Awesome shop",
    name: "",
    items: [],
  },
  computed: {
    title() {
      return "Hello! " + this.name;
    },
  },
  methods: {
    clear(event) {
      this.name = "";
    },
    getData() {
      fetch(
        "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json",
        {
          method: "GET",
          headers: {},
          // body: "",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          this.items = res;
        });
    },
  },
});

console.log(app);
