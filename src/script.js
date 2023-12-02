window.onload = function () {
  // Declare count variable
  let clickCount = 0;

  // Declare buttons from DOM
  let buttonContainer = document.getElementById("button-container");
  let clickButton = document.getElementById("btn");
  let resetButton = document.getElementById("resetbtn");

  // Declare count display from DOM, where count will be displayed
  let display = document.getElementById("display");
  let message = document.getElementById("msg");

  // Declare function to reset counter and win message
  const onReset = () => {
    clickCount = 0;
    clickButton.style.display = "block";
    display.innerHTML = clickCount;
    message.innerHTML = "";
  };

  // Function to count clicks
  const onClick = () => {
    clickCount++;
    display.innerHTML = clickCount;

    // Check for specific click counts
    if (clickCount === 25 || clickCount === 50 || clickCount === 75) {
      message.innerHTML = `You have clicked ${clickCount} times!`;
    }

    if (clickCount === 100) {
      // Once user clicks 100 times, buttons will be removed from DOM, and win message will be displayed
      display.style.fontSize = "100px";
      message.style.fontSize = "50px";
      message.innerHTML = "You win! You have clicked 100 times!";
      clickButton.style.display = "none";
    }

    display.classList.add("animate");

    setTimeout(() => {
      display.classList.remove("animate");
    }, 500); // Adjust the time to match the animation duration
  };

  // Event listener for reset button and clicker
  clickButton.addEventListener("click", onClick);
  resetButton.addEventListener("click", onReset);
};
