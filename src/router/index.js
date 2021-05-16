import Vue from 'vue'

import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home.vue')
const Category = ()=>import('views/category/Category.vue')
const Cart = ()=>import('views/cart/Cart.vue')
const User = ()=>import('views/user/User.vue')
Vue.use(VueRouter )
const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },{
        path:'/user',
        component:User
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router