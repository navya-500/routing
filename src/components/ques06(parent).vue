<template>
<div>
<ques6a message="parent to child" name="navya doddi" ref="name" number="1138" items="not at included"/>
<button @click="f1()">click</button>
</div>
</template>
<script>
import ques6a from '../components/ques06(Child)'
export default{
    name:'parenT',
    components:{
        ques6a,
    },
    methods:{
        f1(){
            alert("parent to child component")
            this.$refs.name.fun();
        }
    }
}
</script>