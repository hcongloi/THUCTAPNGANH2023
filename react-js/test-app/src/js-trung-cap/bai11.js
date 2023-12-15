function laSoNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function timSoNguyenToTrongMang(arr) {
    return arr.filter(num => laSoNguyenTo(num));
}

const mang5 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(timSoNguyenToTrongMang(mang5)); 