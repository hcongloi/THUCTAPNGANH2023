function phanTuChung(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

const mang3 = [1, 2, 3, 4];
const mang4 = [3, 4, 5, 6];
console.log(phanTuChung(mang3, mang4));