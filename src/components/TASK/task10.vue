<template>
<div>
<h2> task-10</h2>
<button @click="fun()">click</button>
</div>
</template>
       <script>
       export default{
           name:'tasK6',
       data(){
           return{
               array : [NaN, 0, 15, false, -22, '',undefined, 47, null],
               
           }
       },
    methods:{
       fun(){
           let arr =  this.array.map((number)=>{
                if(number==15||number==-22||number==47) 
                return number
            })
            document.write(arr)
            },
           }
       }
    
       </script> 