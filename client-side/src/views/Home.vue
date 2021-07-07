<template>
  <div class="container">
    <div class="header row">
      <div class="col text-right" v-for="sensor in $store.state.sensors" :key="sensor.name">
        <TemperatureWidget :macAddress="sensor.macAddress"/>
      </div>
    </div>
    <div class="main-activity">
      <TileGrid/>
    </div>
  </div>
</template>

<script>
import TemperatureWidget from "../components/TemperatureWidget.vue"
import TileGrid from "@/components/TileGrid"

import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'Home',
  components:{
    TemperatureWidget,
    TileGrid
  },
  async mounted(){
    await sensorsAPI.list().then((response) => {
      console.log(response);
    });
  }
}
</script>

<style>
.header{
  padding-top: 25px;
}
.main-activity{
  padding-top: 45px;
}
</style>
