<template>
  <div class="container">
    <h2 class="p-3 text-center">Disaplay a list of items with v-for</h2>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>name</th>
          <th>iso3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.iso3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const cheerio = require("cheerio");

export default {
  name: "App",
  components: {},
  data() {
    return {
      fields: ["name", "iso3"],
      users: [
        { name: "Aruba", iso3: "ABW" },
        { name: "Afghanistan", iso3: "AFG" },
        { name: "Angola", iso3: "AGO" },
        { name: "Anguilla", iso3: "AIA" },
        { name: "Åland Islands", iso3: "ALA" },
        { name: "Albania", iso3: "ALB" },
        { name: "Andorra", iso3: "AND" },
        { name: "United Arab Emirates", iso3: "ARE" },
        { name: "Argentina", iso3: "ARG" },
        { name: "Armenia", iso3: "ARM" },
        { name: "American Samoa", iso3: "ASM" },
        { name: "Antarctica", iso3: "ATA" },
        { name: "French Southern Territories", iso3: "ATF" },
        { name: "Antigua and Barbuda", iso3: "ATG" },
        { name: "Australia", iso3: "AUS" },
        { name: "Austria", iso3: "AUT" },
        { name: "Azerbaijan", iso3: "AZE" },
        { name: "Burundi", iso3: "BDI" },
        { name: "Belgium", iso3: "BEL" },
        { name: "Benin", iso3: "BEN" },
        { name: "Bonaire, Sint Eustatius and Saba", iso3: "BES" },
        { name: "Burkina Faso", iso3: "BFA" },
        { name: "Bangladesh", iso3: "BGD" },
        { name: "Bulgaria", iso3: "BGR" },
        { name: "Bahrain", iso3: "BHR" },
        { name: "Bahamas", iso3: "BHS" },
        { name: "Bosnia and Herzegovina", iso3: "BIH" },
        { name: "Saint Barthélemy", iso3: "BLM" },
        { name: "Belarus", iso3: "BLR" },
        { name: "Belize", iso3: "BLZ" },
        { name: "Bermuda", iso3: "BMU" },
        { name: "Bolivia (Plurinational State of)", iso3: "BOL" },
        { name: "Brazil", iso3: "BRA" },
        { name: "Barbados", iso3: "BRB" },
        { name: "Brunei Darussalam", iso3: "BRN" },
        { name: "Bhutan", iso3: "BTN" },
        { name: "Bouvet Island", iso3: "BVT" },
        { name: "Botswana", iso3: "BWA" },
        { name: "Central African Republic", iso3: "CAF" },
        { name: "Canada", iso3: "CAN" },
        { name: "Cocos (Keeling) Islands", iso3: "CCK" },
        { name: "Switzerland", iso3: "CHE" },
        { name: "Chile", iso3: "CHL" },
        { name: "China", iso3: "CHN" },
        { name: "Côte d'Ivoire", iso3: "CIV" },
        { name: "Cameroon", iso3: "CMR" },
        { name: "Congo, Democratic Republic of the", iso3: "COD" },
        { name: "Congo", iso3: "COG" },
        { name: "Cook Islands", iso3: "COK" },
        { name: "Colombia", iso3: "COL" },
        { name: "Comoros", iso3: "COM" },
        { name: "Cabo Verde", iso3: "CPV" },
        { name: "Costa Rica", iso3: "CRI" },
        { name: "Cuba", iso3: "CUB" },
        { name: "Curaçao", iso3: "CUW" },
        { name: "Christmas Island", iso3: "CXR" },
        { name: "Cayman Islands", iso3: "CYM" },
        { name: "Cyprus", iso3: "CYP" },
        { name: "Czechia", iso3: "CZE" },
        { name: "Germany", iso3: "DEU" },
        { name: "Djibouti", iso3: "DJI" },
        { name: "Dominica", iso3: "DMA" },
        { name: "Denmark", iso3: "DNK" },
        { name: "Dominican Republic", iso3: "DOM" },
        { name: "Algeria", iso3: "DZA" },
        { name: "Ecuador", iso3: "ECU" },
        { name: "Egypt", iso3: "EGY" },
        { name: "Eritrea", iso3: "ERI" },
        { name: "Western Sahara", iso3: "ESH" },
        { name: "Spain", iso3: "ESP" },
        { name: "Estonia", iso3: "EST" },
        { name: "Ethiopia", iso3: "ETH" },
        { name: "Finland", iso3: "FIN" },
        { name: "Fiji", iso3: "FJI" },
        { name: "Falkland Islands (Malvinas)", iso3: "FLK" },
        { name: "France", iso3: "FRA" },
        { name: "Faroe Islands", iso3: "FRO" },
        { name: "Micronesia (Federated States of)", iso3: "FSM" },
        { name: "Gabon", iso3: "GAB" },
        {
          name: "United Kingdom of Great Britain and Northern Ireland",
          iso3: "GBR",
        },
        { name: "Georgia", iso3: "GEO" },
        { name: "Guernsey", iso3: "GGY" },
        { name: "Ghana", iso3: "GHA" },
        { name: "Gibraltar", iso3: "GIB" },
        { name: "Guinea", iso3: "GIN" },
        { name: "Guadeloupe", iso3: "GLP" },
        { name: "Gambia", iso3: "GMB" },
        { name: "Guinea-Bissau", iso3: "GNB" },
        { name: "Equatorial Guinea", iso3: "GNQ" },
        { name: "Greece", iso3: "GRC" },
        { name: "Grenada", iso3: "GRD" },
        { name: "Greenland", iso3: "GRL" },
        { name: "Guatemala", iso3: "GTM" },
        { name: "French Guiana", iso3: "GUF" },
        { name: "Guam", iso3: "GUM" },
        { name: "Guyana", iso3: "GUY" },
        { name: "Hong Kong", iso3: "HKG" },
        { name: "Heard Island and McDonald Islands", iso3: "HMD" },
        { name: "Honduras", iso3: "HND" },
        { name: "Croatia", iso3: "HRV" },
      ],
    };
  },
  methods: {
    scrapPage(data) {
      const $ = cheerio.load(data);
      console.log($.html());
    },
  },
};
</script>
