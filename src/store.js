import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events : [],
    user: {id: 'abc123', name: 'Adam Jahr'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({commit}, event){
      return EventService.postEvent(event).then(() =>{
        commit('ADD_EVENT', event)
      })
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length;
    }
  }
});
