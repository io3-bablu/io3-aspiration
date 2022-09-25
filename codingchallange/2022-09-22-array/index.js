//find the sqrt of each elements  of the array below---------

// const array1 = [25, 64, 81, 36, 64, 4, 16];
// const arrayMap1 = array1.map((element) => Math.sqrt(element));
// console.log(arrayMap1);
// console.log(array1);
//multiply each elements of the array with 2 and return only numbers witch greater then 4---
// const array2 = [1, 2, 3, 4, 5, 6];

// const arrayMap2 = array2
//   .map((element) => element * 2)
//   .filter((element) => element > 4)
//   .reduce((accumulator, element) => accumulator * element, 7);

// console.log(arrayMap2);
// console.log(array2);
// convert 2d and 3d array into one dimension array---flatArray-------
//reduce---------------------------------------------------------------
const monthWeek = [
  ["jan", "feb", "mar", " apr", "may"],
  ["sun", "mon", "tue", " wed", " thu", " fri", "sat"],
];
// let newArray = monthWeek.concat();
// // console.log(newArray);
// const flatArray = monthWeek.reduce((accumulator, element) =>
//   accumulator.concat(element)
// );
// console.log(flatArray);
const bobby =
  "ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt ullam labore temporibus natus voluptate facilis earum, commodi quos, repudiandae sit a tempore dolore esse numquam velit optio modi magni.";
let aayat = bobby.slice(0, 50);
console.log(aayat);
console.log(aayat.length);
