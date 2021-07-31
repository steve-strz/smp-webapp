import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensors:[],
    states:{
      bluetooth: "enable"
    },
    tiles:[
      {
        name:'column 1',
        tiles:[
          {
            name: "Bluetooth",
            iconName: "bluetooth.png",
            colors: [18, 158, 255, 31, 101, 206]
          },
          {
            name: "Camera",
            iconName: "camera.png",
            colors: [253, 29, 29, 253, 29, 172]
          }
        ]
      },
      {
        name:'column 2',
        tiles:[
          {
            name: "Lights",
            iconName: "light.png",
            colors: [246, 236, 0, 246, 170, 0]
          },
          {
            name: "",
            iconName: "more.png",
            colors: [212, 212, 212, 212, 212, 212]
          }
        ]
      },
      {
        name:'column 3',
        tiles:[
          {
            name: "",
            iconName: "more.png",
            colors: [212, 212, 212, 212, 212, 212]
          },
          {
            name: "",
            iconName: "more.png",
            colors: [212, 212, 212, 212, 212, 212]
          }
        ]
      },
      {
        name:'column 4',
        tiles:[
          {
            name: "",
            iconName: "more.png",
            colors: [212, 212, 212, 212, 212, 212]
          },
          {
            name: "Paramètres",
            iconName: "settings.png",
            colors: [229, 229, 229, 124, 124, 124]
          }
        ]
      }
    ],
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
    },

    //states
    UPDATE_STATE(state, {which, value}){
      if(which == "bluetooth") state.states.bluetooth = value;
      console.log("Bluetooth state changed : ", state.states.bluetooth)
    }
  },
  actions: {
  },
  modules: {
  }
})
