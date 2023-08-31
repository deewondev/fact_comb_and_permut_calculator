// Import Files
import myFactorial from "./factorial.js";
import myCombination from "./combination.js";
import myPermutation from "./permutation.js";

const getFactorialContent = () => {
    return (`
        <div class="factorial">
            <div class="f-item-1">
                <div> <span id="error1"></span> </div>
            </div>
            <div id="entry1" class="f-item-2">
                <div> <label for="nSet"> Enter a value for Set (n): </label> </div>
                <div> <input type="text" id="nSet"> </div>
            </div>
            <div id="buttons" class="f-item-3">
                <div> <button id="result"> Calculate </button> </div>
                <div> <button id="reset"> Clear </button> </div>
            </div>
            <div id="display">
                <p>Factorial &#40; n&#33; &#41; &#61; <span id="factorial"></span></p>
            </div>
        </div>
    `);
}

const getCombinationContent = () => {
    return (`
        <div class="combination">
            <div class="f-item-1">
                <div> <span id="error2"></span> </div>
            </div>
            <div id="entry1" class="f-item-2">
                <div> <label for="nSet"> Enter a value for Set (n): </label> </div>
                <div> <input type="text" id="nSet1"> </div>
            </div>
            <div id="entry2" class="f-item-2">
                <div> <label for="rSet"> Enter a value for SubSet (r): </label> </div>
                <div> <input type="text" id="rSet1"> </div>
            </div>
            <div id="buttons" class="f-item-3">
                <div> <button id="result"> Calculate </button> </div>
                <div> <button id="reset"> Clear </button> </div>
            </div>
            <div id="display">
                <p>Combination &#40; <sup>n</sup>C<sub>r</sub> &#41; &#61; <span id="combination"></span></p>
            </div>
        </div>
    `);
}

const getPermutationContent = () => {
    return (`
        <div class="combination">
            <div class="f-item-1">
                <div> <span id="error3"></span> </div>
            </div>
            <div id="entry1" class="f-item-2">
                <div> <label for="nSet"> Enter a value for Set (n): </label> </div>
                <div> <input type="text" id="nSet2"> </div>
            </div>
            <div id="entry2" class="f-item-2">
                <div> <label for="rSet"> Enter a value for SubSet (r): </label> </div>
                <div> <input type="text" id="rSet2"> </div>
            </div>
            <div id="buttons" class="f-item-3">
                <div> <button id="result"> Calculate </button> </div>
                <div> <button id="reset"> Clear </button> </div>
            </div>
            <div id="display">
                <p>Permutation &#40; <sup>n</sup>P<sub>r</sub> &#41; &#61; <span id="permutation"></span></p>
            </div>
        </div>
    `);
}

const calculate = (calculationType) => {
    let n = document.getElementById("nSet").value;
    let n1 = document.getElementById("nSet1").value;
    let n2 = document.getElementById("nSet2").value;
    let r1 = document.getElementById("rSet1").value;
    let r2 = document.getElementById("rSet2").value;
    let errorMsg1 = document.getElementById("error1");
    let errorMsg2 = document.getElementById("error2");
    let errorMsg3 = document.getElementById("error3");
    let factorialResult = document.getElementById("factorial");
    let combinationResult = document.getElementById("combination");
    let permutationResult = document.getElementById("permutation");

    if (calculationType === "factorial") {
        if (isNaN(n)) {
            errorMsg1.innerHTML = "Please enter a valid numeric value.";
            return;
        }

        if (n === '' || n < 0) {
            errorMsg1.innerHTML = "Please enter a positive integer!";
            return;
        }

        factorialResult.innerHTML = myFactorial(n);
        combinationResult.innerHTML = "";
        permutationResult.innerHTML = "";
    } else if (calculationType === "combination") {
        if (isNaN(n1) || isNaN(r1)) {
            errorMsg2.innerHTML = "Please enter a valid numeric value.";
            return;
        }

        if (n1 === '' || r1 === '' || n1 < 0 || r1 < 0) {
            errorMsg2.innerHTML = "Please enter a positive integer!";
            return;
        }

        if (r1 > n1) {
            errorMsg2.innerHTML = "r must not be greater than n!";
            return;
        }

        factorialResult.innerHTML = "";
        combinationResult.innerHTML = myCombination(n1, r1);
        permutationResult.innerHTML = "";
    } else if (calculationType === "permutation") {
        if (isNaN(n2) || isNaN(r2)) {
            errorMsg3.innerHTML = "Please enter a valid numeric value.";
            return;
        }

        if (n2 === '' || r2 === '' || n1 < 0 || r1 < 0) {
            errorMsg3.innerHTML = "Please enter a positive integer!";
            return;
        }

        if (r2 > n2) {
            errorMsg3.innerHTML = "r must not be greater than n!";
            return;
        }
        factorialResult.innerHTML = "";
        combinationResult.innerHTML = "";
        permutationResult.innerHTML = myPermutation(n2, r2);
    }
}

const clear = (clearType) => {
    let n = document.getElementById("nSet");
    let n1 = document.getElementById("nSet1");
    let n2 = document.getElementById("nSet2");
    let r1 = document.getElementById("rSet1");
    let r2 = document.getElementById("rSet2");
    let errorMsg1 = document.getElementById("error1");
    let errorMsg2 = document.getElementById("error2");
    let errorMsg3 = document.getElementById("error3");
    let factorialResult = document.getElementById("factorial");
    let combinationResult = document.getElementById("combination");
    let permutationResult = document.getElementById("permutation");

    if (clearType === "factorial") {
        n.value = "";
        errorMsg1.innerHTML = "";
        factorialResult.textContent = "";
    } else if (clearType === "combination") {
        n1.value = "";
        r1.value = "";
        errorMsg2.innerHTML = "";
        combinationResult.textContent = "";
    } else if (clearType === "permutation") {
        n2.value = "";
        r2.value = "";
        errorMsg3.innerHTML = "";
        permutationResult.textContent = "";
    }
}

export {getFactorialContent, getCombinationContent, getPermutationContent, calculate, clear}
