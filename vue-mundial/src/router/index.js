import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventsView from "@/views/EventsView.vue";
import WeatherView from "@/views/WeatherView.vue";
import SettingsView from "@/views/SettingsView.vue";
import SingleParkView from "@/views/SingleParkView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Carparks',
            component: HomeView,
        },
        {
            path: '/events',
            name: 'Events',
            component: EventsView,
        }, {
            path: '/weather',
            name: 'Weather',
            component: WeatherView,
        }, {
            path: '/settings',
            name: 'Settings',
            component: SettingsView,
        }, {
            path: '/:m(.*)*',
            component: SingleParkView,
        },
    ],
})

export default router
