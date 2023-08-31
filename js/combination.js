import myFactorial from "./factorial.js"

const myCombination = (n, r) => {
    let num, denum, result, x = n - r;

    num = myFactorial(n);
    denum = myFactorial(x) * myFactorial(r);
    result = num / denum;

    return (result);
}

export default myCombination;
