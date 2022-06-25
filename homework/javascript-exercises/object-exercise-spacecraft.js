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
