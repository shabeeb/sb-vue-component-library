<template>
  <div>
    <button @click="incrementCount" class="simple-button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "myButton",
  data() {
    return {
      buttonCount: 0,
    };
  },
  computed: {
    times() {
      return this.buttonCount > 1 ? "times" : "time";
    },
    text() {
      return `Button clicked ${this.buttonCount} ${this.times}`;
    },
  },
  methods: {
    incrementCount() {
      this.buttonCount += 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.simple-button {
  background: #1966c0;
  color: white;
  min-height: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
}
</style>
