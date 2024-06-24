"use strict";
// Callbacks Example 1
// function person(name: string, cb: ()=> void) {
//     console.log(name);
//     cb()
// }
// // function calling
// person("Areeba",()=> {
//     console.log("This is a callback");
// })
// Callback Example 2
// function teacher(slot: string) {
//     console.log("this is a callback function");
//     console.log(slot);
// }
// function stu(name: string, cb: (slot: string)=> void) {
//     console.log(name);
//     cb("Thursday");
// }
// stu("Areeba",teacher)
// nested Function 
// function hello() { // outer func
//     function world() { // inner func
//         console.log("hello world");
//     }
//     world()
// }
// hello()
// Tea 
// Add Water
// After 2 second Add Sugar 
// After 2 second Add Tea Leaves
// After 10 second Add Milk 
// After 3 second Tea is Ready
console.log("Add Water");
setTimeout(() => {
    console.log("Add Sugar");
}, 3000);
console.log("hi");
setTimeout(() => {
    console.log("Add Tea Leaves");
}, 2000);
setTimeout(() => {
    console.log("Add Milk");
}, 10000);
setTimeout(() => {
    console.log("Tea is Ready");
}, 3000);
