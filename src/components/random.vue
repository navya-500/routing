<template>
<div>
<button @click="compare()">click</button>
</div>
</template>
<script>
export default{
    name:'CompareString',
    data(){
        return{
            arr:["Hardworking","COmMitment","Smart","dedicated"],
            str:"Iam Hardworking and DEDICATED employee.Iam sMaRT in Written code and commitment",
            res : 'success'

        }
    },
    methods:{
        compare(){
          
            for(var i=0;i<this.arr.length;i++){
            if(this.str.toUpperCase().includes(this.arr[i].toUpperCase(),this.arr.length)){
            //document.write("success"+"<br>")
    
            }
            else{
            this.res='fail'
            }
        
            }
            if(this.res=='success'){
                document.write("success")
            }
            else{
                document.write("fail")
            }
            
        }
    }
}
</script>