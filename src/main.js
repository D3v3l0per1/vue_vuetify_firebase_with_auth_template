import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store/index'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAdKntlGUQKQyIqzDLwkW31J00wlyc_nU4',
      authDomain: 'sadgames-4f870.firebaseapp.com',
      databaseURL: 'https://sadgames-4f870.firebaseio.com',
      projectId: 'sadgames-4f870',
      storageBucket: 'sadgames-4f870.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
