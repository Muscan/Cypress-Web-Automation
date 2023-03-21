//lgical "AND"
console.log(true && false) //all values need to be TRUE for expression to be TRUE

//opposite "OR"

console.log(true || false) //any value should be true for the expression to be TRUE
console.log(false || false)

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('Eligible ' + eligibilityForDriverLicense)


var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('Eligible ' + eligibilityForDriverLicense)

//Or will be evaluated to TRUE if any of the values are assigned to TRUE


//Logical NOT (!true)
console.log(6 !==10)

//&& AND - all values has to be true
//|| OR - any value should be true
// !== opposite