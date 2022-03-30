import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import QUE1 from '../components/QUE1.vue'
import QUE2 from '../components/QUE2.vue'
import QUE3 from '../components/QUE3.vue'
import QUE4a from '../components/QUE4(a).vue'
import QUE4b from '../components/QUE4(b).vue'
import QUE6 from '../components/QUE6.vue'
import QUE9 from '../components/QUE9.vue'
import vfor from '../components/vfor.vue'
import vfor2 from '../components/vfor2.vue'
import filter from '../components/filter.vue'
import es6 from '../components/es6.vue'
import map from '../components/map.vue'
Vue.use(VueRouter)
const routes=  [
{path : '/HelloWorld',name : "HelloWorld", component: HelloWorld},
{path : '/que1',name : "QUE1",component: QUE1},
{path : '/que2',name : "QUE2",component: QUE2},
{path : '/que3',name : "QUE3",component: QUE3},
{path : '/que4a',name : "QUE4a",component: QUE4a},
{path : '/que4b',name : "QUE4b",component: QUE4b},
{path : '/que6',name : "QUE6",component: QUE6},
{path : '/que9',name : "QUE9",component: QUE9},
{path : '/vfor',name : "vfor",component: vfor},
{path : '/vfor2',name : "vfor2",component: vfor2},
{path : '/filter',name : "filter",component: filter},
{path : '/es6',name : "es6",component: es6},
{path : '/map',name : "map",component: map}
]
let router =   new VueRouter({
    routes // short for `routes: routes`
  })
export default router







































/*import home from '@/components/home.vue'
import services from '../components/services.vue'
import contact from '../components/contact.vue'
import Testing from '../components/Testing.vue'
import btable from '../components/btable.vue'
import table from '../components/table.vue'
import random from '../components/random.vue'
import Table from '../components/Table.vue'
import api from '../components/api.vue'
import form from '../components/forms.vue'*/




/*{
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
}*/
