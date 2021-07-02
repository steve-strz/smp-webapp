<template>
  <div class="container">
    <div class="header row">
      <div class="col text-right">
        <TemperatureWidget/>
      </div>
    </div>
    <!--<div class="main-activity row">
      <div class="col">
        <Tile/>
      </div>
      <div class="col">
        <Tile/>
      </div>
      <div class="col">
        <Tile/>
      </div>
      <div class="col">
        <Tile/>
      </div>
    </div>-->
  </div>
</template>

<script>
import TemperatureWidget from "../components/TemperatureWidget.vue"
import Tile from "../components/Tile.vue"

import sensorsAPI from '@/api/sensors.js'

export default {
  name: 'Home',
  components:{
    TemperatureWidget,
    Tile
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
