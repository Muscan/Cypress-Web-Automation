//Loops
console.log('Hello World')

//statement1 - initial, start with
//stamtement2 - condition - how long we want to run. Where to stop
//statemten3 - what do we need after each cycle of the loop
/*for(statement1; statement2; statement3){

}*/
for(let i=0; i<5; i++){
    console.log('Hello  from loop ' + i)

}
var cars = ["vw","audi","bmw"]
//for of loop
//car is our iterable which will hold each time through iteration the value of the array
for(let v of cars){
    console.log(v + 1)
    //how to stop the loop
    if(v=='audi'){
        break
    }
}


//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)  
})

//Recap
//For loops is used for several operations several times

//For arrays (for of loop)

//Es6 for each fat arrow index accesing your iterator