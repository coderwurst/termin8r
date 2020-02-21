<template>
  <div class="calendar">
    <h1>{{ msg }}</h1>
    <div class="calendar-header">
      <i @click="decreaseMonth">
        <font-awesome-icon icon="chevron-left" /></i>
      <h4>{{month + ' - ' + year}}</h4>
      <i @click="increaseMonth">
        <font-awesome-icon icon="chevron-right" />
      </i>
    </div>
    <ul class="weekdays">
        <li v-for="day in days" v-bind:key="day.id"></li>
    </ul>
    <ul class="dates">
        <li v-for="blank in firstDayOfMonth" v-bind:key="blank.id">&nbsp;</li>
        <li v-for="date in daysInMonth" :class="{'current-day': date == initialDate &amp;&amp;
          month == initialMonth && year == initialYear}" v-bind:key="date.id">;
        <span></span>
        </li>
    </ul>
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
  methods: {
    increaseMonth: function increaseMonth() {
      this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    decreaseMonth: function decreaseMonth() {
      this.dateContext = moment(this.dateContext).subtract(1, 'month');
    },
  },
};
</script>

<style>
h3 {
  margin-bottom: 5%;
}
</style>
