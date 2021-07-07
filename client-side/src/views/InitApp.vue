<template>
  <div class="content">
    <Spinner/>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'InitApp',
  components:{
    Spinner
  },
  async mounted(){
    // Deleting current/old data
    await this.erase(); 
    // Loading and create sensors
    await this.retrieveSensors();
    setTimeout(() => {
      this.$router.push('/home');
    }, 2000);
  },
  methods:{
    async retrieveSensors(){
      sensorsAPI.list().then((response) => {
        response.data.forEach(rawSensor => {
          let sensor = {
            name: rawSensor.name,
            macAddress: rawSensor.macAddress,
            value: rawSensor.value
          }
          this.$store.commit("ADD_TEMP_SENSOR", sensor);
        });
      });
    },
    async erase(){
      this.$store.commit("RESET_SENSORS");
    }
  } 
}
</script>

<style>
.content{
  height: 100%;
}
</style>
