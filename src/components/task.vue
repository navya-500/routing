<template>
<div>
<b-table :items="items" :fields="fields"></b-table>
<form >
 <b-modal id="my-modal" @ok="add()" @cancel="del()">
<label for="id" >Enter Id:</label>
<input id="demo" type="number" ><br>
<label for="name">Enter name:</label>
<input id="dem" type="text" ><br>
<label for="department">Enter department:</label>
<input  id="de" type="text" ><br><br>
</b-modal>
<b-button v-b-modal.my-modal  type="submit" @click="add()">click to add</b-button>
<b-button v-b-modal="'my-modal'" type="submit" @click="del()">click to del</b-button>
    </form>
</div>
</template>
<script>
export default{
    name:'tasK',
    data(){
        return{
        fields:['id','name','dept'],
        items:[
            {id:1138,name:'navya',dept:'Developer'},
            {id:1144,name:'lakshmi',dept:'FrontendDeveloper'},
            {id:1139,name:'srikanth',dept:'sales'},
            {id:1140,name:'aziya',dept:'Backend'}
        ]
        }
    },
    methods:{
       add(){
       this.items.push({id:(document.getElementById("demo").value),name:(document.getElementById("dem").value),dept:(document.getElementById("de").value)})
       },
       del(){
        //    for(i=0;i<items.length;i++){
        //        if(i==document.getElementById("demo").value){
        //            this.items.pop()
        //        }else{

        //        }
        //    }
            this.items.pop({id:(document.getElementById("demo").value),name:(document.getElementById("dem").value),dept:(document.getElementById("de").value)})
        }
    }
}
</script>