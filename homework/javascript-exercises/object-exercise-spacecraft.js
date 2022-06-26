// 1. Create a space craft object with the properties: size, range, model and capacity.
// 2. Console log the range of the spacecraft.
// 3. Loop over the properties of the spacecraft console logging each one.

const spacecraft = {
size: 10,
range: 200,
model: '13-wqs',
capacity: 200,
}
console.log(spacecraft.range);
console.log(spacecraft["range"]);

for (const i in spacecraft) {
console.log( i + " " + spacecraft[i]);
}

//OR using key-value 
const spacecraft = {
size: 10,
range: 200,
model: 'q10',
capacity: 200,
};
for (const [key, value] of Object.entries(spacecraft)) {
console.log(`${key} ${value}`);
}

//or using array extras
const spacecraft = {
size: 10,
range: 200,
model: 'q10',
capacity: 200,
};
Object.entries(spacecraft).forEach(([key, value]) => {
console.log(`${key} ${value}`);
})
