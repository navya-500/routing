<template>
<div>
<h2>Print the "details" in below data</h2>
<button @click="print()">click</button>
</div>
</template>
<script>
export default{
    name:'detailS',
    data(){
        return{
            a:[{category1: [{ name: "cat1", description: "it is cat1", details: ["name", "category", "age", "contact"]}]},
            {category2: [{ name: "cat2", description: "it is cat2", details: ["name2", "category2", "age2", "contact2"]}]}]
        }
    },
    methods:{
        print(){
         document.write(this.a[0].category1[0].details+"<br>"+this.a[1].category2[0].details);
        }
    }
}
</script>