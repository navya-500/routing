<template>
  <div class="hello">
  
  <QUE3 :message="message" :name="name" ref="ref" :number="number" :mantra="mantra"></QUE3>
  <QUE3 :message="message" :name="name" ref="refo" :number="number" :Items="Items"></QUE3>

    hello world
  <button @click="click()">submit</button>
  

  </div>
</template>

<script>
import QUE3 from '../components/QUE3'
export default {
  name: 'HelloWorld',
  //local declaration in que-3
  components: {
    
    QUE3,  
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