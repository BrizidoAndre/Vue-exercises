import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  rout es: [
    {path: '/',component: HomeView},
    {path: '/about',component: AboutView,},
    {path: '/about/:id',component: AboutView,},
    {path: '/login',component: LoginView,},
    // study   ambas as rotas abaixo, embora levem para o mesmo componente DEVEM ter nomes diferentes
    {path: '/profile',component: ProfileView, name: 'profile'},
    {path: '/profile/:id(\\d+)',component: ProfileView,name:'profile'},
    // study o pathMatch indica um regex para a busca de valores
    // no caso abaixo o regex busca literalmente qualquer valor que não corresponda os acima
    {path: '/:pathMatch(.*)*', component: NotFoundView}
    // study segue uma maneira para redirecionar o usuário toda vez que ele acessar uma página não válida
    // {path: '/not-found',component: NotFoundView,},
    // {path: '/:pathMatch(.*)*',redirect:'not-found'},
  ],
})

export default router
