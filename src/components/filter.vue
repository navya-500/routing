<template>
<div>
    <h2>Question 8</h2>
     <button @click="f2()">Submit</button>
</div>
</template>
<script>
var officers = [ { id: 20, name: 'Captain Piett' }, 
{ id: 24, name: 'General Veers' }, 
{ id: 56, name: 'Admiral Ozzel' },
 { id: 88, name: 'Commander Jerjerrod' } ];
 
export default{
    name:"QuestioN8",
methods: {
    f2(){
       let i=officers.filter(r =>  {return r.id==56});
          console.log(i)
    }
},
}
</script>