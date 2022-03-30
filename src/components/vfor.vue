<template>
  <div class="container">
    <h2 class="p-3 text-center">Disaplay a list of items with v-for</h2>
    <table class="table table-striped table-bordered">
    <thead>
    <tr>
    <th>id</th>
    <th>name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in users" :key="user.name">
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      fields:['id','name'],
       users: [
          { id:'0',name:" Agile CRM" ,description :" A company of excellence"},
          { id:'1',name:"mantra technologies", description:"500apps" },
          { id:'2',name:"500apps Python", description:"Backend built using python" },
          { id:'3',name:"500apps infinity", description:"Builtusing vue JS" }
        ],
    };
  },

};
</script>