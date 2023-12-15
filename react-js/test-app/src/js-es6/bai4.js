function getString(value) {
    return value ? value : 'Hello World';
}

console.log(getString()); // In ra "Hello World"
console.log(getString('Custom String')); // In ra "Custom String"
