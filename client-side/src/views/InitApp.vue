<template>
  <div class="content">
    <Spinner/>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'

import sensorsAPI from '@/api/sensors.js'
import bluetoothAPI from '@/api/bluetooth.js'

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
    // Get bluetooth current state
    await this.getBluetoothState();
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
    async getBluetoothState(){
      await bluetoothAPI.getState().then((response) => {
        if(response.data == "enable") console.log("bah enable quoi");
        else console.log('hmmmm')
        console.log("response : ", response.data);
        this.$store.commit("UPDATE_STATE", {which: "bluetooth", value: response.data});
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
