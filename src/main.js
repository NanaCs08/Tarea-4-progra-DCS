import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DistanceConversion from '../src/components/DistanceConversion.vue';
import TemperatureConversion from '../src/components/TemperatureConversion.vue';
import WeightConversion from '../src/components/WeightConversion.vue';



const routes = [
  { path: '/distance', component: DistanceConversion },
  { path: '/temperature', component: TemperatureConversion },
  { path: '/weight', component: WeightConversion }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
