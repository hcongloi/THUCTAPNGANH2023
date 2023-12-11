function sapXepMang(arr, tangDan = true) {
    return arr.sort((a, b) => (tangDan ? a - b : b - a));
}

const mang2 = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(sapXepMang(mang2));