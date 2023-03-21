//Conditional statement
/*if(condition){
    //execute code here
}else{
//execute code here
}*/

//If hour between 6 and 12 print "Good Morrning"
//If hour between 12 and 18 print "Good Afternon"
//Otherwise "Good evening"

var hour = 19
if(hour >= 6 && hour < 12){
    console.log('Good Morning')
}else if(hour >= 12 && hour< 18){
    console.log('Good Afternoon')

}else{
    console.log('Good evening')
}


var ageIsMoreThanEighteen = false
var isUSCitizen = true

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log('Not eligible')
}else{
    console.log('NOT eligible')
}


//Conclusions:
//Basic rule if when you start, else in the condition which should return a boolean. 
//Severa conditions can be combined. 