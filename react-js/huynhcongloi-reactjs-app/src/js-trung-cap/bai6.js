function laChuoiPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(laChuoiPalindrome("level"));