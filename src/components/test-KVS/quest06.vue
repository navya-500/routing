<template>
<div>
    <b-form-group label="Text input 1">
      <b-form-input
        :disabled="disabled" 
        v-model="text1"
        placeholder="Enter your Text"
      ></b-form-input>
     </b-form-group>
    <b-form-group label="Text input 2">
      <b-form-input
        v-model="text2"
        placeholder="Enter your text"
      ></b-form-input>
    </b-form-group>
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
</div>
</template>
<script>
export default{
    name:'tasK',
    data(){
        return{
        text1: '',
        text2: '',
        disabled:true 
        }
    },
    watch:{
         text2(value) {
        this.text1 = value.toUpperCase()
        
      }
    },
}
</script>
