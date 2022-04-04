<template>
<div>
<h2>Text area count</h2>
<textarea id="demo">
</textarea>
<button @click="count()">submit</button>
</div>
</template>
<script>
export default{
    name:'TextArea',
    data(){
        return{
         val:'',
        }
    },
    methods:{
        count(){
        this.val=''+document.getElementById("demo").value
        document.write(this.val.length);
        }
    }
}
</script>
