<template>
  <div>
    <b-table :items="items" :fields="fields"></b-table>

  </div>
</template>

<script>
  export default {
      name:"btablE",
    data() {
      return {
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'navya', last_name: 'doddi', status: 'awesome' },
          { age: 21, first_name: 'divya', last_name: 'kalva' },
          { age: 89, first_name: 'kavya', last_name: 'lagadapati' }
        ]
      }
    },
    methods: {
      
    }
  }
</script>