import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensors:[],
    temperature: 0
  },
  mutations: {
    //temperature sensors
    ADD_TEMP_SENSOR(state, sensor){
      state.sensors.push(sensor);
      console.log(state.sensors);
    },
    UPDATE_TEMP(state, {sensorIndex, value}){
      state.sensors[sensorIndex].value = value;
      console.log("Sensor value of " + state.sensors[sensorIndex].name + " updated");
    },
    RESET_SENSORS(state){
      state.sensors = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
