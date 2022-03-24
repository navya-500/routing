import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import home from '@/components/home.vue'
import services from '../components/services.vue'
import contact from '../components/contact.vue'
import Testing from '../components/Testing.vue'
Vue.use(VueRouter)
const routes=  [
{
    path : '/HelloWorld',
    name : "HelloWorld",
    component: HelloWorld
},

{
    path : '/home',
    name : "Home",
    component: home
},
{
    path : '/blog',
    name : "Blog",
    component: Testing
},
{
    path : '/services',
    name : "Services",
    component:services
},
{
    path : '/contact',
    name : "Contact",
    component:contact
}
]
let router =   new VueRouter({
    routes // short for `routes: routes`
  })
export default router