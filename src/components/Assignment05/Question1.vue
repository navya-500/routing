<template>
<div>
<h2>Question-01</h2>
<button @click="sorting()">Click to sort</button>
<button @click="rev()">Click to reverse</button>
</div>
</template>
<script>
export default{
    name:'QuesNum01',
    data(){
        return{
            Users :[
                {name:"500apps",id:1},
                {name:"Technologies",id:2},
                {name:"Agile",id:3},
                {name:"Mantra",id:4},
                {name:"Clockly",id:5},
                {name:"CRM",id:6},
                {name:"500apps",id:7}
                ],
                a:[]
        }
    },
    methods:{
       sorting(){
          this.Users.forEach((arrItem)=>{
              if(this.Users.name=="500apps"){
                  this.a.push(arrItem);
                  console.log(this.a);
          }
          })
       },
       rev(){
           this.Users=this.Users.reverse()
           console.log(this.Users)
       }
    
    }
}
</script>