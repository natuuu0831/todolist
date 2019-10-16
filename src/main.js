// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/database'


Vue.config.productionTip = false


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDh9k3DJRT9J_BPSlaR127OHbHRY8zJIE",
    authDomain: "todoapp-145cf.firebaseapp.com",
    databaseURL: "https://todoapp-145cf.firebaseio.com",
    projectId: "todoapp-145cf",
    storageBucket: "todoapp-145cf.appspot.com",
    messagingSenderId: "53564344889"
  };
  firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
