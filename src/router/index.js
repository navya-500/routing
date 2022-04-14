import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import api from '../components/api.vue'
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
import New from '../components/new.vue'
import npm from '../components/npmtable.vue'
//import emit from '../components/emitChild.vue'
import emitt from '../components/emitParent.vue'
import ques1 from '../components/ques01.vue'
import ques2 from '../components/ques02.vue'
import ques3 from '../components/ques03.vue'
import ques4 from '../components/ques04.vue'
import ques5 from '../components/ques05.vue'
import ques6b from '../components/ques06(parent).vue'
import ques7 from '../components/ques07.vue'
import ques10 from '../components/ques10.vue'
import ques8 from '../components/ques08.vue'
import ques9 from '../components/ques09.vue'
import comp from '../components/compareStr.vue'
import apiget from '../components/api.vue'
import q1 from '../components/q1.vue'
import q2 from '../components/q2.vue'
import q3 from '../components/q3.vue'
import q4 from '../components/q4.vue'
import q5 from '../components/q5.vue'
import q6 from '../components/q6(parent).vue'
import q7 from '../components/q7.vue'
import q8 from '../components/q8.vue'
import q9 from '../components/q9.vue'
import q10 from '../components/q10.vue'
import fetch from '../components/fetch.vue'
import task from '../components/task.vue'
import question1 from '../components/Question1.vue'
import question3 from '../components/Question3.vue'
import question4 from '../components/Question4.vue'
import question5 from '../components/Question5.vue'
import question6 from '../components/Question6.vue'
import fet from '../components/fetching.vue'
import fetchurl from '../components/fetchurl.vue'
import Qu1 from '../components/Assignment-06/Qu1.vue'
import Qu2 from '../components/Assignment-06/Qu2.vue'
import task1 from '../components/Assignment-07/task1.vue'
import task3 from '../components/Assignment-07/task3.vue'
import task6 from '../components/Assignment-07/task6.vue'
import task9 from '../components/Assignment-07/task9.vue'
import task8 from '../components/Assignment-07/task8.vue'
import task7 from '../components/Assignment-07/task7.vue'
import task10 from '../components/Assignment-07/task10.vue'
Vue.use(VueRouter)
const routes=  [
{path : '/HelloWorld',name : "HelloWorld", component: HelloWorld},
{path : '/api',name : "api",component: api},
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
{path : '/map',name : "map",component: map},
{path : '/new',name : "new",component: New},
{path : '/npm',name : "npm",component: npm},
//{path : '/emit',name : "emit",component: emit},
{path : '/emitt',name : "emitt",component: emitt},
{path : '/ques1',name : "ques1",component: ques1},
{path : '/ques2',name : "ques2",component: ques2},
{path : '/ques3',name : "ques3",component: ques3},
{path : '/ques4',name : "ques4",component: ques4},
{path : '/ques5',name : "ques5",component: ques5},
{path : '/ques6b',name : "ques6b",component: ques6b},
{path : '/ques7',name : "ques7",component: ques7},
{path : '/ques8',name : "ques8",component: ques8},
{path : '/ques9',name : "ques9",component: ques9},
{path : '/ques10',name : "ques10",component: ques10},
{path : '/comp',name : "comp",component: comp},
{path : '/apiget',name : "random",component: apiget},
{path : '/q1',name : "q1",component: q1},
{path : '/q2',name : "q2",component: q2},
{path : '/q3',name : "q3",component: q3},
{path : '/q4',name : "q4",component: q4},
{path : '/q5',name : "q5",component: q5},
{path : '/q6',name : "q6",component: q6},
{path : '/q7',name : "q7",component: q7},
{path : '/q8',name : "q8",component: q8},
{path : '/q9',name : "q9",component: q9},
{path : '/q10',name : "q10",component: q10},
{path : '/fetch',name : "fetch",component: fetch},
{path : '/task',name : "task",component: task},
{path : '/question1',name : "question1",component: question1},
{path : '/question6',name : "question6",component: question6},
{path : '/question3',name : "question3",component: question3},
{path : '/question4',name : "question4",component: question4},
{path : '/question5',name : "question5",component: question5},
{path : '/fet',name : "fet",component: fet},
{path : '/fetchurl',name : "fetchurl",component: fetchurl},
//{path : '/scrap',name : "scrap",component: scrap},
{path : '/Qu1',name : "Qu1",component: Qu1},
{path : '/Qu2',name : "Qu2",component: Qu2},
{path : '/task1',name : "task1",component: task1},
{path : '/task3',name : "task3",component: task3},
{path : '/task6',name : "task6",component: task6},
{path : '/task9',name : "task9",component: task9},
{path : '/task8',name : "task8",component: task8},
{path : '/task7',name : "task7",component: task7},
{path : '/task10',name : "task10",component: task10}
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
