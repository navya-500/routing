<template>
<div class="container">
<h2 class="p-3 text-center">display table using v-for</h2>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>name</th>
<th>description</th>
<th>Yearsofexperience</th>
<th>Location </th>
</tr>
</thead>
<tbody>
<tr v-for="(user, index) in users" :key="index">
<td>{{user.name}} </td>
<td>{{user.description}}</td>
<td>{{user.Yearsofexperience}}</td>
<td>{{user.Location}}</td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
export default{
    name:'vfoR',
    components:{},
    data(){
        return{
        fields:['name','description','Yearsofexperience','Location'],
        users:[{name:" Agile CRM" ,
         description:" A company of excellence", 
        Yearsofexperience:"12", 
        Location:"Hyderabad"}]
        }
    }
}
</script>