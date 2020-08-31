import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    isAdmin: false,
    roles: [],

    spectacle: {},
    representations_base: [],
    representation: {},
    dossierId: 0,

    desactiveFiltres: false,
    updateList: false,
    user: {
      userdId: null,
      dossiersAchat: [{ dossierAchatId: null }],
    }


  },


});
