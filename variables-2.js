/*
  Exercise 1
  Insert "console.log(name);" in the program below so that it prints out "inner"
*/

let  name = "outer";
function print() {
  let name = "inner"; 
  console.log(name)
}
print();

/*
  Exercise 2
  Without removing the "console.log" from the program above, make it log "outer" by removing exactly 1 line
*/

/*
  Exercise 3
  Without changing innerFunction at all, make it print "SCOPE"
*/

// function outerFunction() {
  
//   function innerFunction() {
//     console.log(name);
//   }
//   innerFunction();
// }
// outerFunction();

/*
  Exercise 4
  Move the name variable in a different location so that all 3 console.logs print something
*/

// function scope1() {
  
//   console.log(name);
//   function scope2() {
    
//     console.log(name);
//     function scope3() {
      
//       var name = "Beyonce";
//       console.log(name);
//     }
//     scope3();
//   }
//   scope2();
// }
// scope1();

/*
  Exercise 5
  
*/

// var namesList = ["John", "Annie"];
// function run() {
//   var namessList = ["Ann", "Porter"];
//   var toFind = "Ann";
//   var capitals = namesList.forEach((name) => {
//     if(name === toFind) {
//       console.log("Found Ann!");
//     }
//   });
// }
// run();



