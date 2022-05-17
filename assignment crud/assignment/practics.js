// var name = 'Ajay'
// var person = {
//     name: 'Haren',
//     company: 'masai',
//     checks: function(){
//         console.log(this.name, "1")
//         return 1
//     }
// }

// person.checks()  // if thefunction is defined inside the obj then it will run  || it is an type error
// console.log(person.checks())




// const sum = (x, y) =>{

//     x = x && 5 // prev
//     y = y || 5 // first
//     console.log(x, y)   //   5  10
//     return x+y

// }

// console.log(sum(20,10)) // output = 15



// const sum = (x, y) =>{

//     x = x && 5 // prev
//     y = y || 0 // first
//     console.log(x, y)     // if any value in and is 0 o/p is 0 and if any value is 0 in or another var is printed
//     return x+y  //  5  10

// }

// console.log(sum(20,10))  // 15


//const sum = (x,y) => x+ y

//function sum(x, y) { return x+ y}

// console.log(sum(2, 4))  // in normal function return is used with it the ouypuy is undefined


{/* <User data={{name:'advait', age:'25'}} />   */} // to define a object we use double curvly brackets


// (function(){ console.log('Hello!')})();   self calling function,


// const sum = function (x = 10, y = 5){
//     console.log(x, y)
// }

// sum()




// var $name
// var _value
// var 0thName  invalid
// var sum


// hoisting
// printName('Sammy')

// var printName

// function printName(name){
//     console.log('hello', name)
// }

// printName = function(name){
//     console.log('hey', name)
// }
// only normla are saved during hoisting another are saved as a variable


//console.log(name)
// function getName(){
//     var status = true;
//     if(status){
//         var name;
//     }
//     name = "sammy"
// }
// var name ;
// name = "sammy"
// console.log(name)

//getName()
// const and let are block scope varibale ( only run inside the block where there are decleared)
// var global scope


// const arr = ["a", "b", "c"]

// arr[0] = "d"
// arr.unshift("e")
// console.log(arr)   /// [ 'e', 'd', 'b', 'c' ]



//console.log(typeof [])  // object


// function alpha(){
//     var x = 100
//     this.beta()
// }

// function beta(){
//     var x = 200;
//     console.log(x)
// }

// alpha() // typeerror


// for(let i =0; i <= 5; i++){
//     setTimeout(function asyncronous(){
//         console.log(i)
//     }, i* 1000)
// } // 0 1 2 3 4 5

// for(var i =0; i <= 5; i++){
//     setTimeout(function asyncronous(){
//         console.log(i)
//     }, i* 1000)
// } //  6 6 6 6 6 6


// var arr = ['a','b', 'c' ,'d', 'e']
// const func = ([f, ...r]) => r.reduce((a, c) => a+c)+f

// console.log(func(arr)) // bcdea



// console.log( [1] == [1]) in js array are decleared as object and there have
//different memory address

// var str = 'masai'
// var {lenght} = str

// console.log({lenght}) // undefined


// function getYear() {
//     var year = new Date().getFullYear()

//     return year
// }


// getYear()
// console.log(year) ReferenceError: year is not defined


function getName(){
    var name = 'albert'
}

getName()
console.log(typeof(name), name)  //albert


// console.log(typeof [1, 1, 1] === typeof { val: 1, val: 1,val: 1})  true

// const prod = (x) =>{
//     x = x + 7
//     console.log(x, "x")
//     return inner => (
//         x * inner
//     )
// }

// console.log(prod(5)(2)) // 5 is x and 7 is inner

