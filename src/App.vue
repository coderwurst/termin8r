<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Calender />
  </div>
</template>

<script>
import Calender from './components/Calender.vue';

export default {
  name: 'App',
  components: {
    Calender,
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
