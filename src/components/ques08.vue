<template>
<div>
<p  @click="fun()"> p tag : Under Mantra technologies We have 500apps and Agile CRM</P>
<textarea id="demo">
my name is navya
</textarea>
</div>
</template>
<script>
export default{
    name:'pTag',
    data(){
        return{
            val:'',
        }
    },
    methods:{
        fun(){
            this.val = ''+document.getElementById("demo").value
            document.write(this.val)
        }
    }
}
</script>