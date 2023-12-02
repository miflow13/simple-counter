
// window.onLoad so script does not run before DOM fully loads
window.onload = function () {
    
// declare count variable
  let count = 0;

  // declare button from DOM
  let btn = document.getElementById("btn");

  // declare count display from dom, where count will be displayed
  let disp = document.getElementById("display");

  btn.addEventListener("click", function () {
    count++;
    disp.innerHTML = count;
    console.log("hello");
  });
};
