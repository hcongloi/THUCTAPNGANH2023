function soNgauNhienTrongKhoang(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(soNgauNhienTrongKhoang(1, 10));