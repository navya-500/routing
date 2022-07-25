<!--Question 3: How do you get unique values of an array

[1,1,2,2,2,3,4,3,2]-->
<template>
<div>
<h1>task-3</h1>
<button @click='fun()'>click</button>
</div>
</template>
<script>
export default{
    name:'tasK2',
    data(){
    return{
      a:[1,1,2,2,2,3,4,3,2],
      newArr :[],
    }
    },
    methods:{
       fun(){
           this.a = document.write(...new Set(this.a))
            this.a=this.a.split('').join(' , ');
           Array.from(this.a)

           document.write(this.a)
           
       }
    }
}
</script>