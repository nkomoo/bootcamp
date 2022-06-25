// 1. Create a function called toCSV. 
// 2. The function should take in an array and return a string in CSV format.
// 3. Test it out on your student array.

let newArr = ["Chantele", "Ela", "Esther", "Waqar"];

function toCsv(arr){
return arr.join(',');
}

console.log(toCsv(newArr)); //result Chantele,Ela,Esther,Waqar
