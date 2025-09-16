//Array

// let January = "January"
// let february = "February"

//let months = ["January","February","March","April"];
// months[4] = "May" not recommended

// let shouldIStore = prompt("Array mai value rakhu");

// if(shouldIStore === "yes"){
//     months.push("May")
// }
// console.log(months);

// let number = [1, 2, 3, 4];

// let StoreValue = prompt("Array mai value rakhu");

// if(StoreValue === "yes"){
//         number.push(5, 6, 7)
// }

// console.log(number);

// let months = ["January", "February", "Sept","oct", "March" , "April"];

        // months.shift(); // removes 1st index
        // months.unshift();// modify or add value on 1st index
        // months.push("MAY");// Add value on last+1 index
        // months.pop();// remove last index
        // months.length  Tells the quantity of CSSStyleValue

        // months.splice(2, 2, "June", "July","August"); //remove or replace
        // months.slice(0, 2);//provide a new copy of array
        // let newArr = months.slice(0, 2)
        // console.log(months);
        // console.log(newArr);

        // let arr = ["Apple", "Orange", "Mango"];
        //arr.forEach //loops through array values
        // arr.forEach(function(val, index){
        //     console.log(index, val);
            
        // });
        
//arr.filter()

// let arr = [1, 2, 3, 4, 5];
// let filterArr = arr.filter(function(val){
//     return val % 2 === 0;
// });

// console.log(filterArr, arr);

//arr.sort()
// let arr = [1, 9, 3, 6, 5, 7, 8, 10, 2, 4];

// let sortedArr = arr.sort(function(a, b){
//     if(a < b){
//         return 1;
//     } else {
//         return -1;
//     }
// });

//      console.log(sortedArr);   

//reduce

// let arr = [1, 9, 3, 6, 5, 7, 8, 10, 2, 4];

// let total = arr.reduce(function(preValues, currVal){
//         return preValues + currVal
// }, 0);

// console.log(total);

// let arr = ["Happy", "Birthday", "Ameen"];

// let finalString = arr.reduce(function(preValues, currVal){
//         return preValues+ " "+ currVal;
// }, "");

// console.log(finalString);

let arr = ["Happy", "Birthday", "Ameen"];
let finalString = "";

arr.forEach(function(val){
        finalString = finalString + " " + val;
});

console.log(finalString);


//Array.map()

let weeks = ["Monday", "Tuesday", "Wednesday"];

let shouldIStore = prompt("array mai value rakhu ?");

if(shouldIStore === "yes"){
        weeks.push("Thrusday");
}
console.log(weeks);


 