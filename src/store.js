import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      auth: false,
    },
    slides: {},
    menu: null,
  },
  mutations: {
    setUserAuth(state, payload) {
      state.user = { ...state.user, auth: payload };
    },
  },
  actions: {
    getSlides() {
      return new Promise((resolve, reject) => {
        firebase.database().ref('slider').on('value', (snapshot) => {
          const res = snapshot.val();
          resolve(res);
        });
      });
    },
  },
});
