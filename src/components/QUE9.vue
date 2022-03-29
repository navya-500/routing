<template>
<div>
<h2>spread Operator Concept</h2>
<button @click="fun()">click here</button>
</div>
</template>
<script>
var a =[1,2,5];
var b =[3,4,6,7];
var c =[...a,...b];
export default{
    name:'SpreaD',
methods:{
    fun(){
        alert(c);
    }
}
}
</script>