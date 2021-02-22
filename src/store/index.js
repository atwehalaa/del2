import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    Order:[{
      id:'',
      des:{
        cart:[
          {
            id:'',
            img:'',
            tilte:'',
            price:'',
            cat:'',
            des:'',
            quantity:'',
            totalprice:''
          }
        ],
        user:{
          username:'',
          email:'',
          med:''
        }

      },
   
    }
     
    ],
  
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getUserField(state) {
      return getField(state.Order);
    },

  },
  mutations: {
    SET_Order(state,Order){
      state.Order = Order
      console.log(state.Order)
    }
   
  },
  actions: {
    getOrder({ commit }) {
      axios.get('http://localhost/ordercms/wp-json/myname/ordersssystem')
      .then(response => {
       
      commit('SET_Order', response.data)
      })
      },
      getOffet({commit}){
        commit('set_Offet', Offet)
      }
     
   
  },
  modules: {
  }
})
