<template>
<div>
<h1>Question-7</h1>
<button @click="scrap()">click</button>
</div>
</template>
<script>
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

export default{
    name:'QuestioN7',
    data(){
        return{
          a:[],
        }
    },
    methods:{
scrap(){

const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;
const $ = cheerio.load(markup);
console.log(pretty($.html()));

const mango = $(".fruits__mango");
console.log(mango.html()); // Mango
const listItems = $("a");
console.log(listItems.length); // 2
listItems.each(function (idx, el) {
  console.log($(el).text());
});
const ul = $("ul");
ul.append("<li>Banana</li>");
ul.prepend("<li>Pineapple</li>");
console.log(pretty($.html()));


// URL of the page we want to scrape
const url = "https://agilecrm.com";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $("a");
    // Stores data for all countries
    const countries = [];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const country = { url: ''};
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      country.url = $(el).attr('href');
      //country.url = $(el).children("a").text();
      // Populate countries array with country data
      countries.push(country);
    });
    // Logs countries array to the console
    console.dir(countries);
    // Write countries array in countries.json file
    this.a = ("coutries.json", JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      
    });
  } catch (err) {
    console.error(err);
  }
  console.log(this.a);
}

// Invoke the above function
scrapeData()
}
    }
}
</script>