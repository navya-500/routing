<template>
<div>
<b-table :items="items" :fields="fields"></b-table>
<form >
 <b-modal id="my-modal" @ok="add()" @cancel="del()">
<label for="id" >Enter productname:</label>
<input id="demo" type="text" ><br>
<label for="name">Enter price:</label>
<input id="dem" type="number" ><br>
<label for="department">Enter productcategory:</label>
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
        fields:['productname','price','productcategory'],
        items:[
            {productname:"pendrive",price:800 ,productcategory:'Electronics'},
            {productname:"laptop",price:50000 ,productcategory:'Electronics'},
        ]
        }
    },
    methods:{
       add(){
       this.items.push({productname:(document.getElementById("demo").value),price:(document.getElementById("dem").value),productcategory:(document.getElementById("de").value)})
       },
       del(){
            this.items.pop({productname:(document.getElementById("demo").value),price:(document.getElementById("dem").value),productcategory:(document.getElementById("de").value)})
        }
    }
}
</script>