<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >
      <template>
        <b-tr>
          <b-th colspan="3"><span class="sr-only">Name and ID and workingdays</span></b-th>
        </b-tr>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
      name:"randoM",
    data() {
      return {
        items: [
          { name: 'navya doddi', id: 1, workingdays: 15 },
          { name: 'chaitrika lagadapati', id: 2, workingdays: 16 },
          { name: 'divya paka', id: 3, workingdays: 17},
          { name: 'srikanth munikoti', id: 4, workingdays: 16 },
          { name: 'shree pedapati', id: 5, workingdays: 20 },
        ],
        fields: [
          'name',
          { key: 'id', label: 'ID' },
        
        ]
      }
    }
  }
</script>