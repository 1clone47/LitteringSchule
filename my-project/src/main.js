import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'

import Home from './views/HomeView.vue'
import Cause from './views/CauseView.vue'
import Consequences from './views/ConsequencesView.vue'
import Measures from './views/MeasuresView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cause',
        name: 'Cause',
        component: Cause
    },
    {
        path: '/consequences',
        name: 'Consequences',
        component: Consequences
    },
    {
        path: "/measures",
        name: 'Measures',
        component: Measures
    }
    ],
})

createApp(App).use(router).mount('#app')
