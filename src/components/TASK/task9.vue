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
               color : ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
               o : ["st","nd","rd","th"],
               a : 1
           }
       },
    methods:{
       fun(){
           for(var i=0;i<this.color.length-4;i++){
               for(var j=0;j<this.o.length-1;j++){
                   document.write(this.a+this.o[j]+" "+"choice is "+this.color[i]+"<br>")
                   i++
                   this.a++
                   
               }
           }
       }
      
    }
       }
       </script> 