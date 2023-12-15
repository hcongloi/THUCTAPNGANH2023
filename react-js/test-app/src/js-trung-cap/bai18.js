function laChuoiPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uniqueChars = new Set(str.toLowerCase().replace(/[^a-z]/g, ''));
    return alphabet.split('').every(char => uniqueChars.has(char));
}

const chuoiPangram = "Test bai tap 18";
console.log(laChuoiPangram(chuoiPangram));