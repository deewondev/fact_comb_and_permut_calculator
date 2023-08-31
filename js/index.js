import {getFactorialContent, getCombinationContent, getPermutationContent, calculate, clear} from "./content.js"

const contentTab1 = document.getElementById("content-tab1");
const contentTab2 = document.getElementById("content-tab2");
const contentTab3 = document.getElementById("content-tab3");

contentTab1.innerHTML = getFactorialContent();
contentTab2.innerHTML = getCombinationContent();
contentTab3.innerHTML = getPermutationContent();

// After populating the content, find the result and reset buttons within the content
let resultTab1 = contentTab1.querySelector("#result");
let resultTab2 = contentTab2.querySelector("#result");
let resultTab3 = contentTab3.querySelector("#result");

let resetTab1 = contentTab1.querySelector("#reset");
let resetTab2 = contentTab2.querySelector("#reset");
let resetTab3 = contentTab3.querySelector("#reset");

// Attach event listeners to the buttons
resultTab1.addEventListener('click', () => calculate("factorial"));
resultTab2.addEventListener('click', () => calculate("combination"));
resultTab3.addEventListener('click', () => calculate("permutation"));

resetTab1.addEventListener('click', () => clear("factorial"));
resetTab2.addEventListener('click', () => clear("combination"));
resetTab3.addEventListener('click', () => clear("permutation"));
