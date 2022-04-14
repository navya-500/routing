<template>
<div>
<h2> task-9</h2>
<button @click="fun()">click</button>
</div>
</template>
       <script>
       export default{
           name:'tasK6',
       data(){
           return{
               array1 : [1,0,2,3,4],
               array2 :[3,5,6,7,8,13],
           }
       },
    methods:{
       fun(){
           for(var i=0;i<this.array1.length-1;i++){
               for(var j=0;j<this.array2.length-1;j++){
                   document.write(this.array1[i]+this.array2[j]+"<br>")
                i++
               }
           }
       }
      
    }
       }
       </script> 