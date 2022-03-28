import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import home from '@/components/home.vue'
import services from '../components/services.vue'
import contact from '../components/contact.vue'
import Testing from '../components/Testing.vue'
import btable from '../components/btable.vue'
import table from '../components/table.vue'
import random from '../components/random.vue'
import Table from '../components/Table.vue'
import api from '../components/api.vue'
import form from '../components/forms.vue'

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
},
{
    path : '/btable',
    name : "btable",
    component: btable
},
{
    path : '/table',
    name : "table",
    component: table
},
{
    path : '/random',
    name : "random",
    component: random
},{
    path : '/file',
    name : "Table",
    component: Table
},
{
    path : '/api',
    name : "api",
    component: api
},
{
    path : '/form',
    name : "form",
    component: form
}
]
let router =   new VueRouter({
    routes // short for `routes: routes`
  })
export default router