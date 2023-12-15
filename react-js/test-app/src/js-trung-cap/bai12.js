function demSoLanXuatHienChuoi(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

const chuoi2 = "Huynh Cong Loi";
console.log(demSoLanXuatHienChuoi(chuoi2));