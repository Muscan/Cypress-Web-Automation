export function printAge(age){
    console.log(age)
}

export class CustomerDetails{

    //methods
    printFirstName(firstName){
        console.log(firstName)

    }
/**
 * This method will print the last name
 * @param {string} lastName 
 */
    printLastName(lastName){
        console.log(lastName)
    }
}

//another way of refactor, is having the consturctor called here
export const customerDetails = new CustomerDetails()