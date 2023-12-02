// window.onLoad so script does not run before DOM fully loads
window.onload = function () {

  // declare count variable
  let count = 0;

  // declaring buttons from DOM
  let btn = document.getElementById("btn");
  let resetbtn = document.getElementById("resetbtn");

  // declare count display from dom, where count will be displayed
  let disp = document.getElementById("display");
  let msg = document.getElementById("msg");

  // Function to count clicks
  const onClick = () => {
    count++;
    disp.innerHTML = count;
    if (count === 10) {
      msg.innerHTML = "Yay you clicked 10 times!";
    }
    if (count === 20) {
      msg.innerHTML = "You have clicked 20 times!";
    }
  };

  // function to reset counter and message
  const onReset = () => {
    count = 0;
    disp.innerHTML = count;
    msg.innerHTML = "";
  };

  // event lister for reset button and clicker
  btn.addEventListener("click", onClick);
  resetbtn.addEventListener("click", onReset);
};
