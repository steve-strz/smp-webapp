<template>
  <div class="header row w-100 m-0">
    <div class="col-4 left-side">
      <ProfilUtils/>
    </div>
    <div class="col-4 state-bar">
      <StatesUtils/>
    </div>
    <div class="col-4 right-side">
      <!--<div class="col text-right" v-for="sensor in $store.state.sensors" :key="sensor.name">
        <TemperatureWidget :macAddress="sensor.macAddress"/>
      </div>
      <button type="button" @click="bluetoothPanel = !bluetoothPanel">Bluetooth</button>
    <BluetoothPanel v-if="bluetoothPanel"/>-->
      <TemperatureUtils/>
    </div>
  </div>
</template>

<script>
import TemperatureWidget from "../TemperatureWidget.vue"
import ProfilUtils from "@/components/headerUtils/ProfilUtils.vue"
import StatesUtils from "@/components/headerUtils/StatesUtils.vue"
import TemperatureUtils from "@/components/headerUtils/TemperatureUtils.vue"

export default {
  name: 'HomeHeader',
  components:{
    TemperatureWidget,
    ProfilUtils,
    StatesUtils,
    TemperatureUtils
  },
  data(){
    return{
      bluetoothPanel: false
    }
  },
  async mounted(){}
}
</script>

<style>
.header{
  padding-top: 15px;
  margin: 0;
  height: 100px;
  width: 100%;
}
.left-side{
  text-align: left;
}
.state-bar{
  text-align: center;
}
.right-side{
  text-align: right;
}
</style>
