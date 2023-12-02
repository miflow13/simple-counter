// window.onLoad so script does not run before DOM fully loads
window.onload = function () {
  // declare count variable
  let count = 0;

  // declaring buttons from DOM
  let btngroup = document.getElementById("button-container");
  let btn = document.getElementById("btn");
  let resetbtn = document.getElementById("resetbtn");

  // declare count display from dom, where count will be displayed
  let disp = document.getElementById("display");
  let msg = document.getElementById("msg");

  const onReset = () => {
    count = 0;
    disp.innerHTML = count;
    msg.innerHTML = "";
  };

  // Function to count clicks
  const onClick = () => {
    count++;
    disp.innerHTML = count;
    if (count === 25) {
      msg.innerHTML = "You have clicked 25 times!";
    }
    if (count === 50) {
      msg.innerHTML = "You have clicked 50 times!";
    }
    if (count === 75) {
      msg.innerHTML = "You have clicked 75 times!";
    }
    if (count === 100) {
      // once user clicks 100 times, buttons will be removed from dom and win message will be displayed
      msg.innerHTML = "You win! You have clicked 100 times!";
      btngroup.remove();
      resetbtn.remove();
    }
  };

  // function to reset counter and message

  // event lister for reset button and clicker
  btn.addEventListener("click", onClick);
  resetbtn.addEventListener("click", onReset);
};
