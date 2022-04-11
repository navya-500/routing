<template>
<div>
<p>check the emit event  132</p>
<EmitEvent @changeInput="checkInput" />
</div>
</template>
<script>
import EmitEvent from './EmitEvent.vue';
 export default{
  name:'ParentClass',
  components:{
      EmitEvent,
  },
  data (){
   return{
    services:''
   }
  },
  methods:{
      checkInput(data){
          console.log("check value",data);
      }
  }
 }
</script>