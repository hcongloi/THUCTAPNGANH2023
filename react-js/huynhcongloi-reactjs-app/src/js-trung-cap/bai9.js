function demSoTuTrongChuoi(str) {
    const words = str.split(/\s+/).filter(word => word !== '');
    return words.length;
}

const chuoi = "Xin chao cac ban.";
console.log(demSoTuTrongChuoi(chuoi));