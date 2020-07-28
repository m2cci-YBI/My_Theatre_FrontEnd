import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spectacle: {},
    representations_base: [],
    desactiveFiltres: false,
    representation: {},
    dossierId: 0,
    user: {
      userdId: null,
      dossiersAchat: [{ dossierAchatId: null }],
    },
    updateList: false

  },
  mutations: {

  },
  actions: {},
  modules: {}
});
