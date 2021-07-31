<template>
  <div class="time-utils">
    <div class="time">
      {{time}}
    </div>
    <div class="date">
      {{date}}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'TimeUtils',
  components:{},
  data(){
    return {
      time: "",
      date: ""
    }
  },
  mounted(){
    moment.locale("fr");
    this.currentDateTime();
  },
  methods: {
    currentDateTime() {
      setInterval(() => {
        this.time = moment().format('hh') + ":" + moment().format('mm');
        this.date = moment().format('DD MMMM YYYY');
      }, 1000);
    }
  }
}
</script>

<style>
.time-utils{
  margin-top: -5px;
  color:white;
}
.time{
  font-size: 60px;
}
.date{
  font-size: 30px;
  margin-top: -20px;
}
</style>
