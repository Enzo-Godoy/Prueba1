/* 
A javascript function is a block of code designed to perform a particular task.
Is Executed when 'something' invokes it. 
*/

function myFunction(p1,p2) {
	return p1 + p1;
}

// This function returns the product of p1 and p2. 

/* 
Js syntax- 
Are defined with the function keyword, followed by a name, followed by parentheses(). 
Function name can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include paramenter names separated by commas : 
(parameter1, parameter2, ..)
*/


//The code to be executed, by the function, i placed inside curly brackets : {}


function name (parameter1, parameter2,parameter3) {
	//code to be executed. 
}

/*
Function arguments are the values received by the function when it is invoked. 
Inside the function , the arguments (the parameters) behave as local variables.

When Js reaches a return statement, the function will stop executing. 

Functions often compute a return value. The return value is "returned" back to the "caller".
*/

//If the function was invoked from a statement, Js will "return" to execute the code after the invoking statement.



//Calculate the product of two numbers, and return the result. 



var x =myFunction(4,3);  //Function invoke, return value will end up in x.

function myFunction(a, b) {
	return a*b;
	//This function returns the product of a and b.
}


/* 
We can reuse code : Define the code once, and use it many times. 
We can use the same code many times with different arguments, to produce differen results. 
*/


//The () operator invokes the function .  

new toCelsius = new Object(); 

function toCelsius (argument) {
	
}


/* 
To invoke the function toCelsius use toCelsisus() ; 
To invoke the object toCelsisus use toCelsius;


Local Variables 
Variables declared within a Js function, become LOCAL to the function.
Local variables can only be acessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different
functions, 

Local variables are creates when a function starts and deleted when the function is completed.
*/

