<template>
<div>
<h2>ES6 Methods</h2>
<button @click="fun()">click</button>
</div>
</template>
<script>
export default{
    name:'scripT',
    data(){
        return{
    a :[
    {name:"navya",score:92},
    {name:"divya",score:94},
    {name:"Ram",score:97}
     ]
        }
    },

    methods:{
    fun(){
      const  aSCores = this.a.filter(a=>{ a.score>=93});
      console.log(aSCores); 
      }
    }
}

</script>