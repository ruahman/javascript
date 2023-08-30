export default {
  methods: {
    sayHello() {
      alert("Hello from mixin!");
    },
  },

  mounted() {
    console.log("Mounted from mixin!");
  },
};
