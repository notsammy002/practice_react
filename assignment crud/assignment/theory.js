/*
1. difference between Java and Javascript
the main difference between Java and JavaScript is that Java is an OOP programming language while JavaScript is an OOP programming script. 
JavaScript code is written completely in text and need only be interpreted. 
Java, on the other hand, must be compiled.


2. Primitive
a primitive (primitive value, primitive data type) is data that is not an object and has no methods. 
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

var str = 'asb'
str.toUpper(str)
log(str)  // asb

All primitives are immutable, i.e., they cannot be altered. 
It is important not to confuse a primitive itself with a variable assigned a primitive value. 
The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

str = str.toUpper(str)
log(str) // ASB

3. difference between null, undefined, and NaN
Null
Javascript null represents the intentional absence of any object value. 
null expresses a lack of identification, indicating that the variable points to no object.
In JavaScript, the data type of null is an object.

Undefined
The undefined property indicates that the variable has not been assigned a value or not declared at all. The NaN property represents a “Not-a-Number” value. 

NaN
The NaN property indicates that a value is not a legitimate number. 

4. The XMLHttpRequest object can be used to exchange data with a server behind the scenes. 
This means that it is possible to update parts of a web page, without reloading the whole page.

5.An application programming interface is a connection between computers or between computer programs.
 It is a type of software interface, offering a service to other pieces of software. 
A document or standard that describes how to build or use such a connection or interface is called an API specification.

Browser APIs 
are built into your web browser and are able to expose data from the browser and surrounding computer environment and 
do useful complex things with it
*/