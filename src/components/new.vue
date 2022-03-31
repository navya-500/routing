<template>
<div>
<button @click="first()">HR</button>
<button>QA</button>
<button>sales</button>
<button>FrontendDeveloper</button>
<button>Developer</button>
</div>
</template>
<script>
export default {
    name:'newTask',
    data(){
        return{
        empDet:[
            {id:1138 ,name:"navya",department:"HR"},
            {id:1139,name:"srikanth",department:"QA"},
            {id:1140,name:"divya",department:"sales"},
            {id:1141,name:"lakshmi",department:"FrontendDeveloper"},
            {id:1142,name:"Ram",department:"Developer"},
            {id:1143,name:"pawan",department:"Developer"}
 
        ],
        ARR:[1,2,3]
        }
    },
    methods:{
        first(){
       let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="HR") 
                return arrItem
            })
            console.log(emp)
        }
    }
}

</script>