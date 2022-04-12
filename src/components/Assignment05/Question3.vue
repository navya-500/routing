<template>
<div>
<b-table :items="items" :fields="fields"></b-table>
<form >
 
<label for="name" >Enter first Name:</label>
<input id="demo" type="text" ><br>
<label for="name">Enter Last name:</label>
<input id="dem" type="text" ><br><br><br>

<button  type="submit" @click="add()">click to Update</button>
<button type="submit" @click="del()">click to delete</button>
    </form>
</div>
</template>
<script>
export default{
    name:'tasK',
    data(){
        return{
        fields:['firstname','lastname'],
        items:[
            {firstname:'navya',lastname:'doddi'},
            {firstname:'lakshmi',lastname:'lagadapati'},
            {firstname:'srikanth',lastname:'minukoti'},
            {firstname:'aziya',lastname:'shaik'}
        ]
        }
    },
    methods:{
       add(){
       this.items.push({firstname:(document.getElementById("demo").value),lastname:(document.getElementById("dem").value)})
       },
       del(){
      
            this.items.pop()
        }
    }
}
</script>
