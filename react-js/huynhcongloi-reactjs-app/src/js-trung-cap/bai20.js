function boiSoChung(a, b, limit) {
    const boiSoChungArr = [];
    for (let i = 1; i <= limit; i++) {
        if (i % a === 0 && i % b === 0) {
            boiSoChungArr.push(i);
        }
    }
    return boiSoChungArr;
}

console.log(boiSoChung(3, 4, 20));