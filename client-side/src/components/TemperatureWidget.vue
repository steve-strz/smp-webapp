<template>
  <div>
    <p class="temp-text">
      {{$store.state.temperature}} °C
    </p>
  </div>
</template>

<script>
import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'TemperatureWidget',
  async mounted(){
    await sensorsAPI.oneSensor().then((response) => {
      console.log(response);
      this.$store.commit('UPDATE_TEMP', response.data.value)
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap');

.temp-text{
  font-size: 40px;
  color:rgb(255, 255, 255);
  font-family: 'Rajdhani', sans-serif;
}
</style>
