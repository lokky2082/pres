import Vue from 'vue';
import Vuetify from 'vuetify';
import firebase from 'firebase';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import VStack from './components/Stack'


Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyA_kmySMLfaF-S9XQuI85C9ZbLaRYQwGl4',
  authDomain: 'test-77388.firebaseapp.com',
  databaseURL: 'https://test-77388.firebaseio.com',
  projectId: 'test-77388',
  storageBucket: 'test-77388.appspot.com',
  messagingSenderId: '996788818909',
};

firebase.initializeApp(config);
Vue.use(Vuetify);
firebase.database().ref('slides').on('value', (snapshot) => {
  const test = snapshot.val();
  console.log(test);
});

Vue.component("v-stack",VStack)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
