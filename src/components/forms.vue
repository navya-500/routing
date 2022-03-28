<template>
<div>
<b-form-group>
id= "input-group-1"
label = "Email adress"
label-for = "input-1"
description = "we'll never share your mail with anyone else"
</b-form-group>
<p>{{forms}}</p>
</div>
</template>
<script>
export default {
    name:"formS",
    data (){
      return{
          forms:'forms'
      }
    }
}
</script>