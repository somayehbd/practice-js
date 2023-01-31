// ----------------------------------------------------------------
// ---------------------------- Object ----------------------------
// ----------------------------------------------------------------

let obj = {
    name: 'Somi',
    country: 'The Netherlands',
    countryCode: 'nl'
}

for (let key in obj) {
    console.log(key);
}

// for-in gives us the keys
// name
// country
// countryCode

console.log('-----------------------');

console.log(obj.name);
console.log(obj['name']); // get value by key!!!!!!!

// Somi
// Somi

console.log('-----------------------');

for (let key in obj) {
    console.log(obj[key]);
}

// Somi
// The Netherlands
// nl

// ----------------------------------------------------------------
// ---------------------------- Arrays ----------------------------
// ----------------------------------------------------------------

console.log('-----------------------');

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let key in arr) {
    console.log(key);
}

// for-in always give us the keys
// 0
// 1
// 2
// 3
// 4
// 5

console.log('-----------------------');

for (let key in arr) {
    console.log(arr[key]);
}

// a
// b
// c
// d
// e
// f

console.log('-----------------------');

for (let item of arr) {
    console.log(item);
}

// a
// b
// c
// d
// e
// f