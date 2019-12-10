import Vue from 'vue'
import Vuex from 'vuex'
import PropertyService from '@/services/PropertyService'

import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    event,
    user
  },
  mutations: {
    SET_PROPERTIES(state, properties) {
      state.properties = properties
    }
  },
  actions: {
    fetchProperties({ commit, dispatch }) {
      return PropertyService.getAllProperties()
        .then(response => {
          commit('SET_PROPERTIES', response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching properties: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  },
  getters: {
    getProperties: state => {
      return state.properties
    }
  },
  state: {
    properties: []
  }
})
