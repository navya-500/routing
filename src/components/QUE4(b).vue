<template>
  <div class="hello">
  
  <que4a :message="message" :name="name" ref="ref" :number="number" :mantra="mantra"></que4a>
  <que4a :message="message" :name="name" ref="refo" :number="number" :Items="Items"></que4a>

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
      number:"1138",
      Items:[
      {age:20,firstname:"navya",lastname:"doddi"},
      {age:24,firstname:"divya",lastname:"lagadapati"}
      ],
      mantra:"mantra technologies"
    }
  },
  methods:{
    click(){
      this.$refs.ref.fun();
      this.$refs.refo.Items;
      console.log("i did it")
    }
  }
}
</script>