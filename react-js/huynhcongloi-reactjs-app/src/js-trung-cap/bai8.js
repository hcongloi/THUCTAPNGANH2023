function tinhGiaiThua(n) {
    if (n === 0 || n === 1) return 1;
    return n * tinhGiaiThua(n - 1);
}

console.log(tinhGiaiThua(5));