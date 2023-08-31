import myFactorial from "./factorial.js"

const myPermutation = (n, r) => {
    let result, x = n - r;

    result = myFactorial(n) / myFactorial(x);

    return (result);
}

export default myPermutation;
