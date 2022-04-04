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
         val: 10
        }
    },
    methods:{
        func(){
         try
        {
             let test =this.val * 45;
            console.log(test);
            console.log(this.val);
        }
        catch(error){
            console.log(error)
        }
        finally{
            alert("finally block will always execute!")

      }
    }
    }

}
</script>