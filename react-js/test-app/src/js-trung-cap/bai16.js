function sapXepChuoiTheoThuTuTuDien(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

const mangChuoi = ['Apple', 'banana', 'Orange', 'apple', 'orange'];
console.log(sapXepChuoiTheoThuTuTuDien(mangChuoi));