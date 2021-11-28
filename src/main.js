import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Store from './Store/Store'
import {
    Quasar
  } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import AudioVisual from 'vue-audio-visual'
// import WaveSurferVue from "wavesurfer.js-vue";
import './assets/css/app.css';
// import Notifications from "vt-notifications";

// import AudioRecorder from 'vue-audio-recorder'
createApp(App).use(Quasar, quasarUserOptions).use(Store).use(AudioVisual).use(router).mount('#app')
