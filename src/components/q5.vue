<template>

<div id = "SELF INVOKABLE FUNCTION">
        <h2>Question-5</h2>
         <h2> To print the FULL NAME BY PASSING params/arguments</h2>
         <button @click="getfullname('Mantra','technologies')">Click</button>
</div>

</template>
<script>
export default{
    name:'computeD',
    data(){
        return{
        // firstname:'Mantra',
        // lastname:'technologies'
        }
    },
    methods:{
        getfullname(firstname,lastname){
             let fullname = firstname+" "+lastname
            document.write("full_name : "+fullname);
        }
    }
}
</script>