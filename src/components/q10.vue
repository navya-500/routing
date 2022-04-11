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
            count:10
        }
    },
    methods:{
        func(){
            let val=10
         try{
            // eslint-disable-next-line no-undef
            let count = val*this.count * 5;
            console.log("printing 1",count);
            try{
                // eslint-disable-next-line no-undef
                console.log("printing 2",count5);}
                catch(err){console.log(err)}
            // eslint-disable-next-line no-undef
            console.log("printing 3",count);
            console.log("printing 4",count);

         }
        //got ReferenceError
        catch(rr){
            console.log(rr)
            console.log("It's in catch")
        }
        

      
    
    }

}
}
</script>