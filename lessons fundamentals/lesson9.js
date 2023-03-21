//import { CustomerDetails } from "../helpers/printHelper.js";
//instead of importing the entire class, I import only the instance of the class
import { customerDetails } from "../helpers/printHelper.js";

//create instance of the class
//var customerDetails = new CustomerDetails()
customerDetails.printFirstName('Jimmy')
customerDetails.printLastName('Vogel')

//Class and methods is another form of abstraction
//class + name + mehtods name
//export the instance, or the entire class then create an instance then call the methods from this class to use it. 