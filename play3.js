const hobbies = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const transformedArray = hobbies.map(hobby => hobby===' '?'empty string':hobby);

console.log(transformedArray);