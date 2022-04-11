<template>

<div>
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
            this.test.text =this.val * 45;
            console.log("test",this.val);
    
         }
        
        catch(ReferenceError){
            console.log(ReferenceError)
            console.log("catch")
        }
        

      
    
    }

}
}
</script>