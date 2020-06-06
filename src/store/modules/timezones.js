import axios from 'axios';

const state = {
  timezones: [],
  type: 'asia',
};

const getters = {
  allTimeZones: (state) => state.timezones,
  getType: (state) => state.type,
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
};

const mutations = {
  setTimeZones: (state, timezones) => (state.timezones = timezones),
  changeType: (state, e) => (state.type = e),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
