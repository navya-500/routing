<template>
<div>
<h2>map concept(ES6)</h2><br>
<button @click="func()">click</button><br><br>
<h5>Change Name concept</h5>
<h2>{{name}}</h2>
<button @click="change_name()">click</button><br><br>
<h2>filter Method</h2>
<button @click="filt()">click</button>
<h3>forEach Method</h3>
<button @click="fun()">click</button><br><br>
<h2>includes concept</h2>
<button @click="search()">click</button><br><br>
<h2>concatination concept</h2>
<button @click="add()">click</button><br><br>
</div>
</template>
<script>
export default{
    name:'mantraT',
    data(){
        return{
            a :[12,23,45,67,8],
            array :[
                {name:"navya",score:92},
                {name:"divya",score:94},
                {name:"Ram",score:97}
                ],
            name:'mantraTechnologies',
            str1:"learning map and filter concept",
             str2:'ES6 string concatination'
        }
    },
    methods:{
        func(){
           let arr =  this.a.map((number,index)=>{
                if(index==0) return 0 
                return number
            })
            console.log(arr)
            },
        change_name(){
            this.name="500 Apps";
            return this.name
        },
        filt(){
            const sco = this.array.filter((number,index)=>index==0)
        //const  aSCores = this.array.filter(array=>{ array.score>=93});
        console.log(sco);
      },
        fun(){
            this.a.forEach((number,index)=>console.log(number,index))
            var forE = this.a.forEach((number,index)=>{
                if(index==0) this.a[0]=0
            })
            console.log(forE)
        },
        search(){
        var fir = this.str1.includes("map")
        var sec = this.str2.includes("ES6O")
        console.log(fir)
        console.log(sec)
        
        },
        add(){
            let str1="learning map and filter concept",
             str2='ES6 string concatination'
            let strjoined = `${str1} ${str2}`.includes("wrt")

            console.log(strjoined)
        }
    }
}

</script>