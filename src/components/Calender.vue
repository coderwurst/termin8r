<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Your Calender</h2>
    <p>Time: {{ today }}</p>
    <p>Year: {{ year }}</p>
    <p>Month: {{ month }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Calender',
  data() {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
  },
  created() {
    axios.get('http://localhost:8080/api/meeting/list/12345').then((response) => {
      this.meetings = response.data;
    });
  },
  computed: {
    year: function computeYear() {
      const t = this;
      return t.dateContext.format('Y');
    },
    month: function computeMonth() {
      const t = this;
      return t.dateContext.format('MMMM');
    },
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>
