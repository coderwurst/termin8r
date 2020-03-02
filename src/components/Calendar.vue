<template>
  <div class="container">
    <div class="header">Welcome back Jimmy - {{ firstDayOfMonth }}</div>
    <div class="main">
      <div class="calendar-header">
        <span>
          <i @click="decreaseMonth">
            <font-awesome-icon icon="chevron-left" />
          </i>
          {{ month + ' - ' + year }}
          <i @click="increaseMonth">
            <font-awesome-icon icon="chevron-right" />
          </i>
        </span>
      </div>
      <ul class="weekdays">
        <li v-for="day in days" v-bind:key="day.id">{{ day }}</li>
      </ul>
      <ul class="dates">
        <li v-for="blank in firstDayOfMonth" v-bind:key="blank.id">&nbsp;</li>
        <li
          v-for="date in daysInMonth"
          :class="{'current-day': date == initialDate &amp;&amp;
            month == initialMonth && year == initialYear}"
          v-bind:key="date.id"
        >
          {{ date }}
          <span></span>
        </li>
      </ul>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Calendar',
  data() {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      msg: 'this month starts on day: ',
    };
  },
  created() {
    axios.get('http://localhost:8080/api/meeting/list/12345').then(response => {
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
      return moment(this.dateContext)
        .subtract(this.currentDate - 1, 'days')
        .day();
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
  @import './calendar.css';
</style>
