import { createApp } from 'vue'
import App from './App.vue'

import Demo from '../components/lib/demo/index';
import Card from '../components/lib/card/index';

import '../components/css/demo.scss'
import '../components/css/card.scss'


createApp(App).use(Demo).use(Card).mount('#app')
