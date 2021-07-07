<template>
  <div>
    <p class="temp-text">
      {{$store.state.sensors[storeIndexState].value}} °C
    </p>
  </div>
</template>

<script>
import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'TemperatureWidget',
  props: {
    macAddress: String
  },
  data(){
    return{
      storeIndexState: 0,
      localInterval: null
    }
  },
  mounted(){
    console.log(this.macAddress);
    this.getStoreState();
    this.retrieveTemp();
  },
  beforeDestroy(){
    console.log(this.localInterval);
    clearInterval(this.localInterval);
    console.log(this.localInterval);
  },
  methods:{
    async retrieveTemp(){
      this.localInterval = await setInterval(() => {
        sensorsAPI.oneSensor(this.macAddress).then((response) => {
          this.$store.commit('UPDATE_TEMP', {sensorIndex: this.storeIndexState, value: response.data.value});
        });
      }, 10000);
    },
    getStoreState(){
      this.storeIndexState = this.$store.state.sensors.findIndex(sensor => sensor.macAddress === this.macAddress)
    }
  }
}
</script>

<style>
.temp-text{
  font-size: 40px;
  color:rgb(255, 255, 255);
}
</style>
