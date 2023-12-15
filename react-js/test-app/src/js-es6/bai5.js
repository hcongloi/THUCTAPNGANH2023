// Tạo 2 biến firstName và lastName
const firstName = "John";
const lastName = "Doe";

// Tạo object person từ 2 biến trên bằng cú pháp Shorthand Properties
const person = { firstName, lastName };

console.log(person); // Output: { firstName: 'John', lastName: 'Doe' }

// Sửa đổi giá trị của thuộc tính firstName
person.firstName = "Jane";

console.log(person); // Output: { firstName: 'Jane', lastName: 'Doe' }

// Xoá thuộc tính firstName
delete person.firstName;

console.log(person); // Output: { lastName: 'Doe' }

// Thêm lại thuộc tính firstName
person.firstName = "Jack";

console.log(person); // Output: { lastName: 'Doe', firstName: 'Jack' }