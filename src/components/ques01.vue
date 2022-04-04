<template>
<div>
<h2>Inserting numbers 4 and 5 as values at the index of 5 USING INBUILT ARRAY METHODS</h2>
<button @click="func()">Click here</button>
</div>
</template>
<script>
export default{
    name:'arraY',
    data(){
        return{
       Array :[1,2,3,7,8,6,9,10],
       }
    },
    methods:{
        func(){
                document.write("Before inserting : "+this.Array+"<br>"+"<br>");
                this.Array.splice(5,0,4,5); 
                document.write("After Inserting : "+this.Array);
    
    
            }
    }
}
</script>

