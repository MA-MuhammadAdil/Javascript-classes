// // Sync Example

// alert("Done");
// console.log("Pakistan Zindabad");


// // Async Example

// function runAfter1Sec () {
// setTimeout(function () {
//     console.log("Done");
    
// }, 2000);
// }
// runAfter1Sec();
// console.log("Pakistan zindabad");

// Callbacks:- koe bh aesa func jis ko hum us waqt chlatay hain jb hamara kaam comle8 hojai

// function runAfter1Sec (cb) {
//     setTimeout(function () {
//         console.log("Done");
//         cb();
//     }, 1000 );
// }

// function toBeExecutedwhenDone() {
//     console.log("Yes, Its done");
        
// }

// runAfter1Sec(toBeExecutedwhenDone);
// console.log("Hellow Pakistan");

//Promise


function runAfter1Sec() {
    return new Promise(function (resolve){
        setTimeout (function () {
            let date = 5 + val;
            resolve(date);
        }, 1000);
    });
}

runAfter1Sec(5)
.then(function(data){
    console.log(data);
    
});