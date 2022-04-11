<template>
  <div class="hello">
  
  <que4a :message="message" :name="name" ref="refg" :number="number" :mantra="mantra"></que4a>
  <que4a :message="message" :name="name" ref="navya" :number="number" :Items="Items"></que4a>

    hello world
  <button @click="click()">submit</button>
  

  </div>
</template>

<script>
import que4a from '../components/QUE4(a)'
export default {
  name: 'HelloWorld',
  //local declaration in que-3
  components: {
    
    que4a,  
  },
  data(){
    return{
      message:"vue components",
      name:"navya",
    
      Items:[
      {age:20,firstname:"navya",lastname:"doddi"},
      {age:24,firstname:"divya",lastname:"lagadapati"}
      ],
      mantra:"mantra technologies"
    }
  },
  methods:{
    click(){
      this.$refs.refg.fun();
      this.$refs.navya.Items;
      alert("i did it")
    }
  }
}
</script>