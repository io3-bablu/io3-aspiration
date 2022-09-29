function myFunction() {
  setInterval(() => {
    // let d = new Date();
    let t = new Date().toLocaleTimeString();
    let d = new Date().toLocaleDateString();
    document.getElementById("time").innerHTML = t;
    document.getElementById("date").innerHTML = d;
  });
}
