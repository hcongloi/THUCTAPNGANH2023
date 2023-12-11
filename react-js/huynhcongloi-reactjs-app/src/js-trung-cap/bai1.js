function tinhTong(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

const mang1 = [1, 2, 3, 4, 5];
console.log(tinhTong(mang1));