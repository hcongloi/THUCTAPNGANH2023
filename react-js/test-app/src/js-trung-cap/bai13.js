function fibonacciDenN(n) {
    let fibArr = [0, 1];
    while (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] <= n) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}

console.log(fibonacciDenN(10));