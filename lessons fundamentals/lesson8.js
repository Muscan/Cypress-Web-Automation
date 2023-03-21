//functions
//declarative functions can be called in the begining of the file 

function helloOne(){
    console.log("Hello one")
}

helloOne()

// Anonymus functions
//It only works if it`s called after it`s declaration
//helloTwo() it wont work here
var helloTwo = function(){
    console.log("Hello two")
}

helloTwo()

//ES 6 function syntax or arrow function
var helloThree = () => {
    console.log("Hello three")
}

helloThree()

//Pass the arguments into function
function printName(name, lastName){
console.log(name +' '+lastName)
}

//passing the arguments into the function
printName('John','Smith')

//function which will make a certain operation and then return the result

function multiplyByTwo(number){
    var result = number * 2
    return result 
}
var myResult = multiplyByTwo(5)
console.log(myResult)


//importing functions
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//second way of how to import
//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)

/*Recap:
Functions can be declarative and adnonymous.
Anonymous does not have a name and need to assign the value to a var
Functions retunr the result and asign the result to a variable*/