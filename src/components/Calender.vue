<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Your Calender</h2>
    <p>{{ meetings }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Calender',
  data() {
    return {
      meetings: null,
    };
  },
  created() {
    axios.get('http://localhost:8080/api/meeting/list/12345').then((response) => {
      this.meetings = response.data;
    });
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>
