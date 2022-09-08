var first_name = 10;
var last_name = 2;
console.log("hello this is bobby", first_name * last_name);

const studentName = "Ankur";

const mathMarks = 55;
const EngMarks = 70;
const sceincemarks = 45;

console.log("2022-09-04 --> 1 -->");

// My name is Ankur Maurya. I got marks in math is 55, in science is 45 and in English is 70

console.log(
  "my name is",
  studentName,
  "maurya. I got marks in math is",
  mathMarks,
  "in science is 45 and in English is",
  EngMarks
);
//-----------------------------------
const paise = 600000;
const carPrice = 600000;
if (paise > carPrice) {
  console.log(`congratulation's you can bought a car`);
} else {
  console.log(`sory!!you can buy only bike`);
}
//------------------------------------

function bobby() {
  console.log(`hi!! i'm bobby`);
  ravi();
}
function ravi() {
  console.log(`hi!! i'm ravi`);
  sunil();
}
function sunil() {
  console.log(`hi!! i'm sunil`);
  imran();
}
function imran() {
  console.log(`hi!! i'm imran`);
}

imran();
//-------------------->fat_arrow_function<-----------------------

const aayat = () => {
  console.log(`hi !! i'm aayat`);
};
aayat();

//----------------------------><--------------

document.write(`this is document`);
//---------------------exercise------------->
const hindi = prompt(`enter the hindi marks`);
const english = prompt(`enter the english marks`);
const physics = prompt(`enter the physics marks`);
const chemistry = prompt(`enter the chemistry marks`);
const punjabi = prompt(`enter the punjabi marks`);

function studentReportCard({
  hindiMarks,
  englishMarks,
  phyMarks,
  chemistryMarks,
  punjabiMarks,
}) {
  if (hindiMarks > 100) {
    console.warn(`enter the valid hindi marks ${hindiMarks} that you get.../`);
  } else {
    console.log(`hindi marks is`, hindi);
  }
  if (englishMarks > 100) {
    console.warn(
      `enter the valid english marks ${englishMarks}that you get.../ `
    );
  } else {
    console.log(`english marks is`, english);
  }

  if (phyMarks > 100) {
    console.warn(`enter the valid physics marks ${phyMarks}that you get.../ `);
  } else {
    console.log(`phisics marks is`, physics);
  }

  if (chemistryMarks > 100) {
    console.warn(
      `enter the valid chemistry marks ${chemistryMarks} that you get.../ `
    );
  } else {
    console.log(`chemistry marks is`, chemistry);
  }

  if (punjabiMarks > 100) {
    console.log(
      `enter the valid punjabi marks ${punjabiMarks} that you get.../ `
    );
  } else {
    console.log(`punjabi marks is`, punjabi);
  }
}
const totalMarks = 500;
const obtainedMarks =
  Number(hindi) +
  Number(english) +
  Number(physics) +
  Number(chemistry) +
  Number(punjabi);
console.log(`the obtainedMarks is`, obtainedMarks);
// percentage calculation----------------------------
const percentage = (obtainedMarks / totalMarks) * 100;
console.log(`the percentage of obtained marks`, percentage);
//average marks------------------------...----------------
const average = obtainedMarks / 5;
console.log(`the average marks is `, average);

studentReportCard({
  hindiMarks: hindi,
  englishMarks: english,
  phyMarks: physics,
  chemistryMarks: chemistry,
  punjabiMarks: punjabi,
});
