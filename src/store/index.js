import Vuex from 'vuex';
import Vue from 'vue';
import timezones from './modules/timezones';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    timezones,
  },
});
