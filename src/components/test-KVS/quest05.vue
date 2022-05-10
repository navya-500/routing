<template>
  <div>
    <b-table
      id="table-transition-example"
      :items="items"
      :fields="fields"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"
    ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transProps: {
          name: 'flip-list'
        },
        items: [
          { productname: "pendrive", price: '300', productcategory: '' },
          { productname: "laptop", price: '30000', productcategory: 'product category' },
        ],
        fields: [
          { key: 'productname', sortable: true },
          { key: 'price', sortable: true },
          { key: 'productcategory', sortable: true }
        ]
      }
    }
  }
</script>