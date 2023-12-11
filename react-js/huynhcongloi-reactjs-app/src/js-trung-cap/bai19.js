function thayTheKyTuKhongChuCai(str) {
    return str.replace(/[^a-zA-Z]/g, '-');
}

const chuoi3 = "Hello123 World!";
console.log(thayTheKyTuKhongChuCai(chuoi3));