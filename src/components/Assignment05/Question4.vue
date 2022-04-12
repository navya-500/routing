<template>
<div>
<h2>Question-4</h2>
<input type="text" id="myInput" @keyup="sEngine()" placeholder="Search here" title="Type in a name">
<center>
<table id="myTable">
  <ul>
  <tr><td >orange</td></tr>
  <tr ><td >red</td></tr>
  <tr><td >blue</td></tr>
  <tr><td >black</td></tr>
  <tr><td >white</td></tr>
  </ul>
</table>
</center>
</div>
</template>
<script>
export default{
    name:'questioN4',
data(){
    return{
        list : [ 'orange', 'red', 'blue', 'black', 'white' ],
        input:'',
        filter:'',
        table:'',
        tr:'',
        td:'',
        i:'',
        txtValue:''
        
    }
},
methods:{
    sEngine(){
  this.input = document.getElementById("myInput");
  this.filter = this.input.value.toUpperCase();
  this.table = document.getElementById("myTable");
  this.tr = this.table.getElementsByTagName("tr");
  for (this.i = 0; this.i < this.tr.length; this.i++) {
    this.td = this.tr[this.i].getElementsByTagName("td")[0];
    if (this.td) {
      this.txtValue = this.td.textContent || this.td.innerText;
      if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
        this.tr[this.i].style.display = "";
      } else {
        this.tr[this.i].style.display = "none";
      }
    }      
  }
    }
}
    

}


</script>