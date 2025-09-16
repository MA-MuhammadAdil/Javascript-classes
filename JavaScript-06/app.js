//objects

// let person = {
//     name:"Salman",
//     Cnic: 123456789,
//     age:25,
//     eyesColor:"Black",
//     language:"Urdu",
//     speak: function(sentence) {
//         console.log(sentence + this.name);
        
//     }

// };

// let person2 = {
//     name:"Najam",
//     Cnic: 123456789,
//     age:25,
//     eyesColor:"Black",
//     language:"Urdu",
//     speak: function(sentence) {
//         console.log(sentence);
        
//     }

// };

// person2.speak("Hellow, I'm ");
// console.log(person.name);

// let student1 = {
//   name:"Ali",
//   rollNo: 12,
//   teacher: "Ishaq",
//   className: "Javascript"
// };

// let student2 = {
//     name:"Ahmed",
//     rollNo: 13,
//     teacher: "Ghouse",
//     className: "CSS"  
// };

   
// function provideStudent (name, rollNo, teacher, className ) {
//     return {
//     name: name,
//     rollNo: rollNo,
//     teacher: teacher,
//     className: className,
//     };
// }

// let students = [
//     provideStudent("Ali", 13, "Ishaq", "Javascript" ),
//     provideStudent("Ahsan", 14, "Ghouse", "Typescript" ),
// ];

// console.log(students);

// let preStudents = localStorage.getItem("students"); // get from local storage
// let students = preStudents ? JSON.parse(preStudents) : [];
// function provideStudent(){
//     let std = {
//         name: prompt("Enter Name"),
//         rollNo: +prompt("Enter Roll no"),
//         teacher: prompt("Enter Teacher Name"),
//         className: prompt("Enter your Class")
//     }; 
// students.push(std);
// console.log(students);
// let stringify = JSON.stringify(students);  // convert it to string
// localStorage.setItem("students", stringify); // save it to local storage

// };

// let prevStudents = localStorage.getItem("students");
// let students = prevStudents ? JSON.parse(prevStudents): [];

// function provideStudent(){
//  let std = {
//     name: prompt("Enter Name"),
//     rollNo: +prompt("Enter roll No"),
//     teacher: prompt("Enter Teacher name"),
//     className: prompt("Enter class name"),

// };
// students.push(std);
// console.log(students);
// let stringify = JSON.stringify(students);
// localStorage.setItem("students", stringify);

// };

