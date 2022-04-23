import { createApp } from 'vue';
import App from './App.vue'
import './assets/css/main.css';
import router from './router'
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { h } from 'vue';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wFkPpHdgjMvxfDSUnPCGCCd70SEkhLI",
  authDomain: "noteapp-e0682.firebaseapp.com",
  projectId: "noteapp-e0682",
  storageBucket: "noteapp-e0682.appspot.com",
  messagingSenderId: "460976370261",
  appId: "1:460976370261:web:3e4d795ffca9d9f3011adc",
  measurementId: "G-7CF54EZ72R"
};

initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = createApp({
  render: ()=>h(App),
  methods: {
    testujemy() {
      console.log("testy");
    }
  }

});
app.use(router)
app.mount('#app')
