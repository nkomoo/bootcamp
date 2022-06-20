// 1. Create an array “musicGenres”, with items “Rock” and “Rap”.
// 2. Append (add to the end) “Jazz” to the end.
// 3. Replace the value in the middle of the array with “Classical”. Your code for finding the middle value should work for any arrays with an odd number of items.
// 4. Prepend (add to start) “Blues” and “Reggae” to the array.

let musicGenres = ["Rock", "Rap"]
musicGenres.push("Jazz");
console.log(musicGenres);
musicGenres[1] = "Classical";
console.log(musicGenres);
musicGenres.unshift("Blues", "Reggae");
console.log(musicGenres); //results ['Blues', 'Reggae', 'Rock', 'Classical', 'Jazz'];
