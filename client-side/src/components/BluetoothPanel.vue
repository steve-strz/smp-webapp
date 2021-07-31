<template>
  <div class="bluetooth-panel">
    <div class="test"></div>
    <button type="button" class="state-button" @click="updateBluetoothState()">{{$store.state.states.bluetooth == "enable" ? "E" : "D"}}</button>
    <div v-if="$store.state.states.bluetooth == 'enable'">
      <button type="button" class="refresh-button" @click="scanDevices()">R</button>
      <div v-if="devices" class="devices-panel">
        <div v-for="device in devices" :key="device.name">
          <button type="button" class="bluetooth-device-button" @click="pairDevice(device.macAddress)">{{device.name}}</button>
        </div>
      </div>
      <div v-else-if="devices == ''" class="waiting-text">
        <p>Aucun appareil bluetooth détecté.</p>
      </div>
      <div v-else class="waiting-text">
        <p>Recheche d'appareil bluetooth..</p>
      </div>
    </div>
    <div v-else-if="$store.state.states.bluetooth == 'error'" class="waiting-text">
      <p>Une erreur est survenue, activez de nouveau le bluetooth.</p>
    </div>
    <div v-else class="waiting-text">
      <p>Bluetooth désactivé.</p>
    </div>
  </div>
</template>

<script>
import bluetoothAPI from '@/api/bluetooth.js'

export default {
  name: 'BluetoothPanel',
  data(){
    return{
      devices: null,
    }
  },
  mounted(){
    console.log("bah regarde : ", this.$store.state.states.bluetooth);
    if(this.$store.state.states.bluetooth == 'enable') this.scanDevices();
  },
  methods:{
    async scanDevices(){
      this.devices = null;
      await bluetoothAPI.scanDevices().then((devices_) => {
        this.devices = devices_.data;
      });
    },
    async pairDevice(macAddress){
      await bluetoothAPI.pairDevice(macAddress).then(() => {
        console.log("is pairing..")
      });
    },
    async updateBluetoothState(){
      if(this.$store.state.states.bluetooth == 'enable' || this.$store.state.states.bluetooth == 'error'){
        await bluetoothAPI.powerOff().then((response) => {
          this.$store.commit("UPDATE_STATE", {which: "bluetooth", value: response.data.state});
        });
      }else{
        await bluetoothAPI.powerOn().then((response) => {
          this.$store.commit("UPDATE_STATE", {which: "bluetooth", value: response.data.state});
          this.scanDevices();
        });
      }
    }
  }
}
</script>

<style>
.bluetooth-panel{
  /*background-image: url("../assets/bluetooth-panel-background.png");*/
  background-color: rgba(97, 150, 213, .5);
  position: absolute;
  height: 100%;
  width: 50%;
  top:0;
  bottom:0;
  left:1;
  right:0;
  margin: auto;
  z-index: 10;
}
.waiting-text{
  padding-top: 150px;
  font-size: 20px;
}
.devices-panel{
  padding: 50px 0;
  height: 200px;
}
.bluetooth-device-button{
  background-color: white;
  border:none;
  margin: 3px 0;
  width: 50%;
  box-shadow: 9px 8px 13px 1px rgba(0,0,0,0.1);
}
.refresh-button{
  position:absolute;
  right: 1;
  left: 0;
}
.state-button{
  position:absolute;
  right: 0;
  left: 1;
}
.test{
  backdrop-filter: blur(15px);
  height: 100%;
  width:100%;
  z-index:-1;
  position:absolute;
}
</style>
