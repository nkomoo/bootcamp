// 1. Create a function called findAndReplace. It should take in three parameters. A string of text to search, a string to find and another string to replace it with.
// 2. The function should return a new string of text with all the instances of the word searched for replaced with the new word.

// For example: findAndReplace("Hi, how are you?", "Hi", "Hello") should return: "Hello, how are you?"

function findAndReplace(text1, text2, text3) {
    if (text1.includes(text2)) {
        let replacedString = text1.replace(text2, text3);

        console.log(replacedString);
    } else {

        return console.log('Test does not exist');
    }
}

findAndReplace("Hi, how are you?", "Hi", "Hello")
