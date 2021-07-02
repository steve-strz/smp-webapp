import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temperature: 0
  },
  mutations: {
    UPDATE_TEMP(state, value){
      state.temperature = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
