<template>
<div id = "computed_props">
         FirstName : <input type = "text" v-model = "firstname" /> <br/><br/>
         LastName : <input type = "text" v-model = "lastname"/> <br/><br/>
         <h1>My name is {{firstname}} {{lastname}}</h1>
         <button @click="getfullname()">Click</button>
</div>

</template>
<script>
export default{
    name:'computeD',
    data(){
        return{
        firstname:'',
        lastname:''
        }
    },
    methods:{
        getfullname(){
            let fullname = this.firstname+"_"+this.lastname
            document.write("full_name : "+fullname);
        }
    }
}
</script>