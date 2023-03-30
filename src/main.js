import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'

import Home from './views/HomeView.vue'
import Quiz from './views/QuizView.vue'
import Cause from './views/CauseView.vue'
import Consequences from './views/ConsequencesView.vue'
import Measures from './views/MeasuresView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home | littering.cloud'
        }
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
        meta: {
            title: 'Quiz | littering.cloud'
        }
    },
    {
        path: '/cause',
        name: 'Cause',
        component: Cause,
        meta: {
            title: 'Ursachen | littering.cloud'
        }
    },
    {
        path: '/consequences',
        name: 'Consequences',
        component: Consequences,
        meta: {
            title: 'Folgen | littering.cloud'
        }
    },
    {
        path: "/measures",
        name: 'Measures',
        component: Measures,
        meta: {
            title: 'Maßnahmen | littering.cloud'
        }
    }
    ],
})

router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    // See further down below for how we setup this data
    const title = to.meta.title
// If the route has a title, set it as the page title of the document/page
    if (title) {
        document.title = title
    }
    // Continue resolving the route
    next()
})
createApp(App).use(router).mount('#app')
