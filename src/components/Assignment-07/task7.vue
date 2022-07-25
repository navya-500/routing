<template>
<div>
<h1>task-7</h1>
<button @click='fun()'>click</button>
</div>
</template>
<script>
export default{
    name:'tasK2',
    data(){
    return{
      a:['a','a','b','c','d','b','d'],
      newArr :[],
    }
    },
    methods:{
       fun(){
           this.a = document.write(...new Set(this.a))
            this.a=this.a.split(' ').join(' , ');
           Array.from(this.a)

           document.write(this.a)
           
       }
    }
}
</script>