<template>
  <div id="app">
    <Button />
    <Card text="Test Message" />
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Button,
    Card,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
