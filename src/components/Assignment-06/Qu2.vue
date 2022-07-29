<template>
  <div class="dropdown" >
  <div class="overflow-auto">
      <h1>Question 2</h1>
       <b-pagination
      @change = 'pagedata(currentPage)'
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      >
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      </b-pagination>
    
      <b-form-select v-model="value" :options="countries"></b-form-select>
    <b-button variant="primary" @click="getData">Get Data</b-button>
{{value}}
    <b-form-input v-model="val" @input="search"   name="search" placeholder="Enter search name"></b-form-input>
     <b-table id="my-table" small :fields="fields" :items="demo" :current-page="currentPage" :per-page="perPage" responsive="">
     <template #cell(index)="value">
        {{ value.index + 1 }}
      </template>
      <template #cell(university_name)="value">
        <b >{{ value.item.university_name }}</b>
      </template>as
      <template #cell(domains)="value">
        <b >{{ value.item.domains }}</b>
      </template>
      <template #cell(website_url)="value">
        <a :href='value.item.website_url' target="_blank" >{{value.item.website_url}}</a>
      </template>
      <template #cell(state-province)="value">
        <b >{{ value.item.state_province }}</b>
      </template>
      
    </b-table>
    </div>
    <b-card>
     <b-form-input v-model="uni" name="search" placeholder="Enter university name"></b-form-input>
  <!--<b-card v-for="value in field" :key="field.value">
  <b-form-input v-model='filt' placeholder="enter here.." ></b-form-input>
  <b-form-input v-model="uni" name="search" placeholder="Enter university name"></b-form-input>
  <b-form-input v-model="dom" name="search" placeholder="Enter Your Domain"></b-form-input>
  <b-form-input v-model="url" name="search" placeholder="Enter URL"></b-form-input>
  <b-form-input v-model="state" name="search" placeholder="Enter state_province"></b-form-input>-->
 <b-button variant="primary" @click="filterData">filterData</b-button>
 </b-card>
    
  </div>
</template>
<script>
  const { getNames } = require("country-list");
  export default {
    name: "QueS6",
    data() {
      return {
        value: "",
        items: [],
        countries: [],
        perPage: 5,
        currentPage: 1,
        demo:[],
        rows:0
      };
    },
    mounted() {
      let countries = getNames();
      this.countries = countries.map((row) => {
        return { value: row, text: row };
      });
      if (this.countries.length) this.value = this.countries[0].text;
    },
    methods: {
      async pagedata(page){
        this.pageShowData=[];
        this.pageShowData = this.items.slice(((page-1)*this.perPage), (page*this.perPage))
        this.rows = this.items.length
      },
      async getData() {
        // Get the response
        const response = await fetch("http://universities.hipolabs.com/search?country=" + this.value, {
          method: "GET",
        });
        const responseText = await response.json();
        this.items = responseText.map((row) => {
          return { university_name: row.name, domains: row.domains, website_url: row.web_pages[0], state_province: row["state-province"] };
        });
        this.demo=this.items
        this.pagedata(1)
      },
      search(){
      this.demo = this.items.filter((value)=>{return value.university_name.toLowerCase().includes(this.val)})
     
      },
      filterData(){
      this.demo = this.items.filter((value)=>{return value.university_name==this.uni})
      }
      
    },
  };
</script>



<style scoped></style>