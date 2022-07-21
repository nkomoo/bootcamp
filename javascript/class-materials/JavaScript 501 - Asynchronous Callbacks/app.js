/////////////////// Asynchronous Callbacks //////////////////////////
// JavaScript is a single threaded programming language
// However we can have aynchronous code due the Event Loop
// that allows us to run non-blocking code
// Set Timeout

// Asynchronous order
console.log('First')
console.log('Second')

// After this particular time do this
setTimeout(() => {
    console.log('Third')
}, 5000)

console.log('Last')

