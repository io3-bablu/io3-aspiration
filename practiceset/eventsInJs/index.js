//2nd way fo wright function
const callingFunction = () => {
  alert("most common way to wright function");
};
// 3rd way to wright function ==> its not work if we use same reference for multiple event call
const thirdWay = document.getElementById("button3");
thirdWay.onclick = () => {
  alert("3rd and most common way to wright a function again");
};
thirdWay.onclick = () => {
  console.log("3rd and most common way to wright a function again");
};
//4th way to wright function ==> u can use same reference for multiple event call
const fourthWay = document.querySelector("#button4");
fourthWay.addEventListener("click", () => {
  alert("i love this way of writing function");
});
fourthWay.addEventListener("click", () => {
  document.querySelector(".button4-text").innerHTML = "EVENT LISTENER";
});
