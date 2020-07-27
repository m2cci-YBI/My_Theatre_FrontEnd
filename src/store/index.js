import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spectacle: {},
    representations_base: [],
    desactiveFiltres: false,
    representation: {},
    user: {},
    updateList: false

  },
  mutations: {

  },
  actions: {},
  modules: {}
});
