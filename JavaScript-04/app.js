//Functions
//greet = custom function

// function greet (studentName){     //Parameter
//     console.log("Hellow " + studentName);
// }

// greet("Ali"); Argument
// greet("Eisar"); Argument
// greet("Touseef"); Argument

// function employee(fileNo){
//     console.log("Working on file no: " + fileNo);
// }

// employee(7);
// employee(9);

// function employee(fileNo){
//     return("Working on file no: " + fileNo);
// }

// let data = employee(7);
// console.log(data);

// function add (num1 , num2){
//     return num1 + num2;
// }

// let result = add(5, 7);
// console.log(result);

//Recursion- Kissi bh kaam ko baar 

function writeData(data, times) {
    document.write(data);
    if (times > 0) {
        writeData(data, times - 1);
    }
}
writeData("Hellow", 5);

// function factorial (num) {
//     if (num > 1){
//          return num * factorial(num - 1);
//     }
//     return 1
// }
// console.log(factorial(7));

// Closures ===> Scopes
// Global scope == >whole file
// local scope ==> inside function

// let abc = 7;       //Global Scope
// function print (def){
//     // let def = 14; // local scope
//     return function(ghi) { // anonymous Function
//         console.log(def + ghi);
//     }
    
// }

// let innerFunction = print(7);
// let innerFunction2 = print(10);

// innerFunction(7);
// innerFunction2(5);

// function saveUrl (url) {
//     return function(){
//         fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }
// }

// let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos")
// makesRequest();
// makesRequest();

// function addTwoNumbers (number1 , number2) {
//     return number1 + number2
// } 

// let result = addTwoNumbers(5, 10);
// console.log("result  " , result);

// function loginUserMessage (username = "Ahmed" ){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     } 
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ali"));

// let a = 300;
// if (true){
//     let a = 2;
//     let b = 5;
//     console.log("INNER: ", a);


// console.log(a);

// function one() {
//     let username = "Ali"

//     function two(){
//         let website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
    
//     two()
// }

// one()

if(true){
    let username = "Ahmed"
    if(username === "Ahmed"){
        let website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);