<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Your Calender</h2>
    <p>Time: {{ today }}</p>
    <p>Year: {{ year }}</p>
    <p>Month: {{ month }}</p>
    <p>Days in Month: {{ daysInMonth }}</p>
    <p>Current Date: {{ currentDate }}</p>
    <p>First Day of Month: {{ firstDayOfMonth }}</p>
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
      return this.dateContext.format('Y');
    },
    month: function computeMonth() {
      return this.dateContext.format('MMMM');
    },
    daysInMonth: function computeDaysInMonth() {
      return this.dateContext.daysInMonth();
    },
    currentDate: function computeCurrentDate() {
      return this.dateContext.get('date');
    },
    firstDayOfMonth: function computeFirstDayOfMonth() {
      return moment(this.dateContext).subtract((this.currentDate - 1), 'days').day();
    },
    // persist today's date, when switching dateContexts during Calander navigation
    initialDate: function storeInitialDate() {
      return this.today.get('date');
    },
    initialMonth: function storeInitialMonth() {
      return this.today.format('MMMM');
    },
    initialYear: function storeInitialYear() {
      return this.today.format('Y');
    },
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>
