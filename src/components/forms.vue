<template>
<div>
<b-form>
<b-form-group
id= "input-group-1"
label = "Email adress"
label-for = "input-1"
description = "we'll never share your mail with anyone else">
<b-form-input
id ="input-1"
v-model ="form.email"
type = "email"
placeholder = "Enter Email"
required>
</b-form-input>
</b-form-group>
<b-form-group
id = "input-group-2"
label = "your name"
label-for = "input-2">
<b-form-input
id = "input-2"
v-model = "form.name"
placeholder = "Enter name"
required></b-form-input>
</b-form-group>
<b-form-group id="input-group-3" label="food" label-for="input-3">
<b-form-input 
id = "input-3" 
v-model="form.food" 
:options="foods" 
required>
</b-form-input>
</b-form-group>
<b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
<b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby">
<b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
</b-form-group>
<b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
</div>
</template>
<script>
export default {
    name:"formS",
    data (){
      return{
          forms: {
              email:'',
              name:'',
              food: null,
              checked:[]
          },
          foods:[{text:"select one",value:null},'icecream',]
      }
    }
}
</script>