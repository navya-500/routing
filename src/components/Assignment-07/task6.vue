<template>
<div>
<h2> task-6</h2>
<button @click="mostFreqItem()">click</button>
</div>
</template>
       <script>
       export default{
           name:'tasK6',
       data(){
           return{
               array:[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
           }
       },
    methods:{
       mostFreqItem(){
            const Item = this.array.filter(element=>element==='a')
            document.write("a"+"("+Item.length+" "+"times"+")");
        }
      
    }
       }
       </script> 