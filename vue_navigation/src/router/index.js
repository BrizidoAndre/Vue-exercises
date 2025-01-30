import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ProtectedView from "@/views/ProtectedView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {path: '/', component: HomeView},
        // study no exemplo abaixo estamos criando uma url com um parâmetro chamado id
        // este parâmetro pode ser acessado através da variável route
        {path: '/about/:id?', component: AboutView, alias:['/sobre/:id?']},
        {path: '/login', component: LoginView, name: 'login'},

        {path: '/profile/:id(\\d+)?', component: ProfileView, name: 'profile'},
        // uma view que será protegida
        {
            name:'protected',
            path: '/protected',
            component: ProtectedView,
            meta:{
                requiresAuth: true,
            },
        },

        // study o pathMatch indica um regex para a busca de valores
        // no caso abaixo o regex busca literalmente qualquer valor que não corresponda os acima
        {path: '/:m(.*)*', component: NotFoundView},
    ],
})

// before each route this method is going to run
router.beforeEach((to,from, next)=>{
    if(to.meta.requiresAuth){
        const token = localStorage.getItem('token')
        if(!token){
            next('/login')
            return;
        }
    }
    next();
})

export default router
