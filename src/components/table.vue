<template>
<div>
<h3 ></h3>
<table align ="center" >
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Number</th>
</tr>
</thead>
<tbody>
<tr v-for="user in users" :key="user.id">
<td>{{user.Name}}</td>
<td>{{user.email}}</td>
<td>{{user.Number}}</td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
export default {
    name:"tablE",
data() {
return {
users: [
{ Name:'navya', email: 'navya@gmail.com', Number: '9089089098' },
{ Name:'lakshmi', email: 'lakshmi@gmail.com', Number: '9089089094' },
{ Name:'kavya', email: 'kavya@gmail.com', Number: '9089089095' },
{ Name:'bhavya', email: 'bhavya@gmail.com', Number: '9089089096' },
{ Name:'divya', email: 'divya@gmail.com', Number: '9089089097' }
]
        };
    }
};
</script>
<style scoped>
table {
font-family: arial;
border-collapse: collapse;
width: 60%;
text-align: center;
}
td, th {
border: 3px solid #dddddd;
text-align: center;
padding: 8px;
}
</style>