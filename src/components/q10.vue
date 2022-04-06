<template>

<div>
<h2>Question-10</h2>
<h3>ErrorHandling</h3>
<button @click="func()">click</button>
</div>
</template>
<script>
export default{
    name:'ErrorHandling',
    data(){
        return{
        }
    },
    methods:{
        func(){
         try{
            this.test.count = this.count * 5;
            console.log("printing count",this.count);
    
         }
        //got ReferenceError
        catch(ReferenceError){
            console.log(ReferenceError)
            console.log("It's in catch")
        }
        

      
    
    }

}
}
</script>