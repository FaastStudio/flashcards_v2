import Vue from 'vue'
import './plugins/vuetify'
import './plugins/longPress'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './assets/stylus/main.styl'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDEg6KepP-GTz7rtfDr4TmlGWTJJnPZk_I',
  authDomain: 'flashcards-5bcb1.firebaseapp.com',
  databaseURL: 'https://flashcards-5bcb1.firebaseio.com',
  projectId: 'flashcards-5bcb1',
  storageBucket: 'flashcards-5bcb1.appspot.com',
  messagingSenderId: '498617502369'
}
firebase.initializeApp(config)

// config firestore
var db = firebase.firestore()
// Persistance
db.enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

let app = ''
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      // i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
