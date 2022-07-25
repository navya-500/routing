<!--Question 1: What is the output of below function calls. Give detailed explanation on what you understood.

const circle = {
radius: 20,
diameter() {
  return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius,
};-->
<template>
<div>
<h1>task-1</h1>
<button @click='display()'>diameter</button>
<p>By click on the button we will get the output </p><br>
<h4>diameter : 40</h4><br>
<h4>perimeter : 125.66370614359172</h4>
<p>The area of a circle is πr2 and the perimeter (circumference) is 2πr when the radius is 'r' units, π is approx 3.14 or 22/7</p>
</div>
</template>
<script>
export default{
    name:'tasK1',
    data(){
    return{
      radius:20,
    }
    },
    methods:{
       display(){
           document.write("diameter : "+this.radius*2+"<br>"+"perimeter : "+2*Math.PI*this.radius);
        }
    }
}
</script>