function sapXepTheoThuocTinh(arr, prop) {
    return arr.sort((a, b) => a[prop] - b[prop]);
}

const mangDoiTuong = [
    { name: 'Loi', age: 30 },
    { name: 'Linh', age: 25 },
    { name: 'Lan', age: 35 }
];
console.log(sapXepTheoThuocTinh(mangDoiTuong, 'age'));