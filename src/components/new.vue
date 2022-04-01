<template>
<div>
<button @click="first()">HR</button>
<button @click="sec()">QA</button>
<button @click="thi()">sales</button>
<button @click="four()">FrontendDeveloper</button>
<button @click="fif()">Developer</button><br><br>
<form>
<label for="id">Enter Id:</label>
<input type="number" required><br>
<label for="name">Enter name:</label>
<input type="text" required><br>
<label for="department">Enter department:</label>
<input type="text" required><br><br>
<button type="submit">submit</button>
    </form>

</div>
</template>
<script>
export default {
    name:'newTask',
    data(){
        return{
        empDet:[
            {id:1138 ,name:"navya",department:"HR"},
            {id:1139,name:"srikanth",department:"QA"},
            {id:1140,name:"divya",department:"sales"},
            {id:1141,name:"lakshmi",department:"FrontendDeveloper"},
            {id:1142,name:"Ram",department:"Developer"},
            {id:1143,name:"pawan",department:"Developer"}
 
        ]
        }
    },
    methods:{
        first(){
       let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="HR") 
                return arrItem
            })
            console.log(emp)
        },
        sec(){
       let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="QA") 
                return arrItem
            })
            console.log(emp)
        },
        thi(){
       let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="sales") 
                return arrItem
            })
            console.log(emp)
        },
        four(){
       let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="FrontendDeveloper") 
                return arrItem
            })
            console.log(emp)
        },
        fif(){
            let emp =  this.empDet.map((arrItem)=>{
                if(arrItem.department=="Developer") 
                return arrItem
            })
            console.log(emp)

        },
        /*add(){
            const empDet = new.set();
            empDet.add(id, "rani");
        }*/
    }
}

</script>