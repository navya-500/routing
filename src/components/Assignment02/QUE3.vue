<template>
  <div class="hello">
  <first></first>
  <second></second>
  </div>
</template>

<script>
//point-1 import the file
//point-2 Components Registration
//point-3 HTML tags
import first from '../components/first.vue'
import second from '../components/second.vue'
export default {
  name: 'HelloWorld',
  //local declaration of components
  components: {
    first,
    second, 
  },
  data(){
    return{
      
    }
  },
}
</script>
