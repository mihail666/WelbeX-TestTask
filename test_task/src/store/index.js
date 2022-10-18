import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cars: []
  },
  actions: {
    GET_CARS_FROM_API({commit}){
      return axios('http://localhost:3000/cars',{
        method: 'GET'
      })
      .then((response)=>{
        commit('SET_CARS_TO_VUEX', response.data)
      })
    }
  },
  mutations: {
    SET_CARS_TO_VUEX( state, cars){
      state.cars = cars
    }
  },
  getters:{
    CARS(state){
      return state.cars
    }
  }
})