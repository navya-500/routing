<template>
<div>
<agile ref="scrap"></agile>
<button @click='display()'>click</button>
</div>
</template>
<script>
import agile from '/home/agile/Desktop/routing/learn-cheerio/agile.js'
export default{
    name:'scrapData',
    components:{
        agile,
    },
    data(){
        return{
            a:[],
        }
    },
    methods:{
        display(){
            this.ref.scrap.scrapeData();
        }
    }
}
</script>