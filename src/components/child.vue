<template>
<div>
<p>check the emit event</p>
<input type="text" @input="inputCheck()" v-model="services" placeholder="enter input" />
</div>
</template>
<script>
import { eventBus } from '../main.js'
 export default{
  name:'EmitEvent',
  data (){
   return{
    services:''
   }
  },
  methods:{
      inputCheck(){
          console.log("check value");
          this.$emit("changeInput",this.services);
          eventBus.$emit("busEmitCheck",this.services);
      }
  }
 }
</script>
/*a is array of object right

in each index we have one object

Each object have one key and key value is again array

So a[index].key[index].key

a[0].category1[0].details*/
