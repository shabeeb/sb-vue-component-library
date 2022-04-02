<template>
  <div id="app">
    <h2>Vue create library and use in project example</h2>
    <div>
      <a
        href="http://shabeebk.com/blog/build-a-vue-js-component-library-and-push-to-npm/"
        target="_sb"
        class="link"
        >Read Full Blog Here
      </a>
    </div>
    <Button />
  </div>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Button,
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
