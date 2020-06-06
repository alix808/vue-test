import axios from 'axios';

const state = {
  timezones: [],
  type: 'asia',
  currentTime: '',
};

const getters = {
  allTimeZones: (state) => state.timezones,
  getType: (state) => state.type,
  getCurrentTime: (state) => state.currentTime,
};

const actions = {
  async fetchTimeZones({ commit }, area) {
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${area}`
    );
    commit('setTimeZones', response.data);
  },

  updateType({ commit }, e) {
    commit(
      'changeType',
      e.target.options[e.target.options.selectedIndex].innerText
    );
  },

  async fetchCurrentTime({ commit }, item) {
    console.log(`http://worldtimeapi.org/api/timezone/${item}.txt`);
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${item}.txt`
    );
    console.log('the current time is:', response.data);
    commit('setCurrentTime', response.data);
  },
};

const mutations = {
  setTimeZones: (state, timezones) => (state.timezones = timezones),
  changeType: (state, e) => (state.type = e),
  setCurrentTime: (state, item) => (state.currentTime = item),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
