// var myArray = ['item01', 'item02', 'item03', 'item04', 'itemN'];
// console.log(myArray[2] + ' = item03');

// // Add an Item at the End
// console.log(myArray.push('itemX'));
// // Add an Item at the beginning
// console.log(myArray.splice(0, 0 'item0');
// )


var index0ToUpperCase = function(word){
    return word[0].toUpperCase() + word.slice(1);
};
console.log(index0ToUpperCase("inana"));

//--------------------------------------------D-I-Y oldschool-function... instead of .includes()

var foods = ["apple", "cheese", "bread", "butter", "pizza"];
var food = "Apple";
function arrayIncludes(array, word){
    for (var i=0; i < array.length; i++){
        if (array[i] === word) {
            return "The array contains the word " + word + "!"
        }
    }
    return "The array does not contain the word " + word +"!"
}

console.log(arrayIncludes(foods, food));

// Homework:
// Create a program with a:
// -loop, -function, if/else/else if