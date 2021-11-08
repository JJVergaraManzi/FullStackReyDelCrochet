import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const baseUrl = "http://localhost:1337/"

export default new Vuex.Store({
  state: {
      ListadoDatos : []
  },
  mutations: {
    setListadoDatos(state, payload){
      state.listadoDatos = payload
    }
  },
  actions: {
    async obtenerListadoDatos({commit}, payload){
      payload
      const url = `${baseUrl}products/`
      const respuesta = await fetch(url)
      const listado = respuesta.json();
      console.log(listado)
      commit('setListadoDatos', listado)
      return listado;
    }
  },
  getters :{
    listadoDatos(state) {
      state
      return this.state.listadoDatos;
    }
  }
})
