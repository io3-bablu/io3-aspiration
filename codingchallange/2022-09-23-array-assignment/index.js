//**1st question*/ write a function to check whether an input is an array or not-----------
const array1 = [23, 4, 5, 6, 77];
const bobby = "bobby";
console.log(Array.isArray(array1)); //true because its an array
console.log(Array.isArray(bobby)); // false because its not an array
//1st point is done------------------------------------------------------
console.log("first point done");
//**2nd question */ find the length of following array */
const a = [5, 12, 8, 130, 44];
const b = ["g", "e", "e", "k", "s"];
const c = ["shoes", "shirt", "shocks", "sweater"];
const d = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
const e = ["sunday", 90, false, undefined, "90", "g", "cat"];
console.log(a.length);
console.log(b.length);
console.log(c.length);
console.log(d.length);
console.log(e.length);
//2nd point is done------------------------------------------------------
console.log("2nd point done");

//**3rd question  */ find the element of  following position below provide---
const b1 = ["g", "e", "e", "k", "s"]; //10 position
const c1 = ["shoes", "shirt", "shocks", "sweater"]; //4 position
const d1 = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]; //3 position
const e1 = ["sunday", 90, false, undefined, "90", "g", "cat"]; //5 position
console.log(d1.find((elem, index) => index == 3));

const valueB1 = b1.find((elem, index) => index == 10);
console.log(valueB1);
const valueC1 = c1.find((elem, index) => index == 4);
console.log(valueC1);
const valueE1 = e1.find((elem, index) => index == 5);
console.log(valueE1);
//3rd point is done--------------------------------------
console.log("3rd point done");

//**4th question */ concat two array-----------------------------------------------------
const weekOfTheDay = ["sun", "mon", "tue"];
const weekOfTheDay2 = ["wed", "thu", "fri"];
const weekOfTheDay3 = ["wed", "thu", "fri"];

let week = weekOfTheDay.concat(weekOfTheDay2.concat(weekOfTheDay3));
console.log(week);
// 4th point done--------------------
console.log("4th point done");

//**5th question */ sort following array----------------------
const a2 = [5, 12, 8, 130, 44];
const b2 = ["g", "e", "e", "k", "s"];
const c2 = ["shoes", "shirt", "shocks", "sweater"];
const d2 = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
const e2 = ["sunday", 90, false, undefined, "90", "g", "cat"];
let sorta2 = a2.sort();
console.log(sorta2);
console.log(b2.sort());
console.log(c2.sort());
console.log(d2.sort());
console.log(e2.sort());
//sort show element in order by checking elements first digit or letter-----
// 5th point done--------------------
console.log("5th point done");
//**6th question */ reverse the following array----------------------------
//its show the array elements in reverse order----------------
const a3 = [5, 12, 8, 130, 44];
const b3 = ["g", "e", "e", "k", "s"];
const c3 = ["shoes", "shirt", "shocks", "sweater"];
const d3 = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
const e3 = ["sunday", 90, false, undefined, "90", "g", "cat"];
console.log(
  a3.reverse(),
  b3.reverse(),
  c3.reverse(),
  d3.reverse(),
  e3.reverse()
);
// 6th point done--------------------
console.log("6th point done");
//**7th question */ find the index number of each elements of following array------
const a4 = [5, 12, 8, 130, 44];
const b4 = ["g", "e", "e", "k", "s"];
const c4 = ["shoes", "shirt", "shocks", "sweater"];
const d4 = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
const e4 = ["sunday", 90, false, undefined, "90", "g", "cat"];

for (let elements in a4) {
  console.log(elements);
}
for (let elements of a4) {
  console.log(elements);
}
console.log("-------------------------------------------------");
for (let elements in b4) {
  console.log(elements);
}
console.log("-------------------------------------------------");

for (let elements in c4) {
  console.log(elements);
}
console.log("-------------------------------------------------");

for (let elements in d4) {
  console.log(elements);
}
console.log("-------------------------------------------------");

for (let elements in e4) {
  console.log(elements);
}
console.log("7th point is done");
// 7th point is done------------------------------------------
//**8th question */ find the last index of following array----------
const d5 = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];
const e5 = ["sunday", 90, false, undefined, "90", "g", "cat"];
console.log("-------------------------------------------");
const indexNumber = d5.indexOf("fri");
console.log(indexNumber);

let length = d5.length;
console.log(`${length - 1}`);
let length1 = e5.length;
console.log(`${length - 1}`);
//8th point is done-------------------------
console.log("8th point is done");
//**9th question */ multiply each elements of following array with 2 and find the sum of them---------------
const a5 = [5, 12, 8, 130, 44];
const qus9 = a5
  .map((elem) => elem * 2)
  .map((elem) => Math.sqrt(elem))
  .reduce((accumulator, elem) => accumulator + elem);
console.log(qus9);
//9th point done--------------------------------
console.log("9th point is done");
//**10th question */-find the index number of the array as per condition
//a. element>11
//b. element*10+5>100
//c. element < 0
//d. element ==8
//e. element == 11 || 12

//a. element>11
const a6 = [314, 115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
// let pointA = a6.filter((elem) => elem > 11);
console.log(a6.filter((elem) => elem > 11));
// pointA.forEach((elem, index) => {
//   console.log(`index number${index} value is ${elem} is greater the 11`);
// });
console.log(`a. element>11 ----done--`);
//b. element*10+5>100
// let pointB = a6.map((elem) => elem * (10 + 5)).filter((elem) => elem > 100);
console.log(a6.map((elem) => elem * (10 + 5)).filter((elem) => elem > 100));
console.log(`b. element*10+5>100 ----done--`);
//c. element < 0
// let pointC = a6.filter((elem) => elem < 0);
console.log(a6.filter((elem) => elem < 0));
// pointC.forEach((elem, index) => {
//   console.log(`index number${index} value is ${elem} is greater the 11`);
// });
console.log(`c. element < 0 ----done--`);
//d. element ==8
// let pointD = a6.indexOf(8);
// console.log(pointD);
console.log(a6.filter((elem) => elem == 8));
console.log(`d. element ==8 ----done--`);
//e. element == 11 || 12
let pointE = a6.filter((elem) => elem == 11 || elem == 12);
console.log(pointE);
