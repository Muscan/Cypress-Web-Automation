//Object - entity which can hold any value

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["vw","audi","bmw"]
}
//access the values from the customer object
console.log(customer.firstName)
console.log(customer.lastName)

console.log(customer['firstName'])
//change values

customer.firstName = 'Mike'
customer.lastName = "Kimmy"
console.log(customer.firstName)

//with interpolation
customer['lastName'] = "Bittter"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays - list of items
var car = ["vw","audi","bmw"]
//get the values from array
console.log(car[1])
//override the values inside the array
car[1] = "Scania"
console.log(car[1])

//objects may have an array
//first car from John Smith

console.log(customer.cars[0])

//Objects is defined as {}
//Array has index and order
//Array can be part of object and be part of key