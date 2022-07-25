<template>
  <div>
      <h1>Question 1</h1>

       <b-pagination
      @change = 'pagedata(currentPage)'
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
      <b-form-input v-model="val" @input="search"   name="search" placeholder="Enter search name"></b-form-input>
    <b-form-select v-model="value" :options="countries"></b-form-select>
    <b-button variant="primary" @click="getData">Get Data</b-button>
    
    <b-container>
    <b-row >
    <b-col md='4' v-for="value in demo" :items="demo" :key="value">
    <b-card  id="my-table" :current-page="currentPage" :per-page="perPage" class="mb-2">
    
      <p>university_name:-- {{ value.university_name }} </p>
      <p>domains:--{{ value.domains }}</p>
      <a :href='value.website_url' @click="redirect(value.website_url)">website_url:--{{ value.website_url }}</a>
      <p>state_province:--{{ value.state_province }}</p></b-card></b-col>
    
     
      </b-row>
    
    </b-container>
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
        demo:[],
        perPage: 5,
        currentPage: 1,
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
      redirect(value) {
        window.open(value, "_blank");
      },
      async pagedata(page){
          console.log("page", page)
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
  }
  }
</script>



<style scoped></style>