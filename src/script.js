window.onload = function () {
  // Declare count variable
  let clickCount = 0;

  document.getElementById("milestone").volume = 0.5;

  // Declare buttons from DOM
  let buttonContainer = document.getElementById("button-container");
  let clickButton = document.getElementById("btn");
  let resetButton = document.getElementById("resetbtn");

  // Declare count display from DOM, where count will be displayed
  let display = document.getElementById("display");
  let message = document.getElementById("msg");

  // Declare function to reset counter and win message
  const onReset = () => {
    clickButton.style.display = "inline-block";
    clickCount = 0;
    display.innerHTML = clickCount;
    message.innerHTML = "";
  };

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const loadAudioBuffer = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch audio file: ${response.status} ${response.statusText}`
        );
      }

      const audioData = await response.arrayBuffer();
      return audioContext.decodeAudioData(audioData);
    } catch (error) {
      console.error("Error loading audio:", error.message);
      throw error; // Re-throw the error to propagate it to the calling code
    }
  };

  const playClickSound = async (url) => {
    const buffer = await loadAudioBuffer(url);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
  };

  // Function to count clicks
  const onClick = () => {
    if (!clickTimeout) {
      clickTimeout = setTimeout(() => {
        clickTimeout = null;
      }, 1000); // Adjust the debounce interval
    }

    playClickSound("click.mp3");
    clickCount++;
    display.innerHTML = clickCount;

    // Check for specific click counts
    if (clickCount === 25 || clickCount === 50 || clickCount === 75) {
      document.getElementById("milestone").play();
      message.innerHTML = `You have clicked  ${clickCount} times!`;
    }

    if (clickCount === 100) {
      // Once user clicks 100 times, buttons will be removed from DOM, and win message will be displayed
      message.style.fontSize = "50px";
      message.innerHTML = "You win! You have clicked 100 times!";
      clickButton.style.display = "none";
    }

    display.classList.add("animate");

    setTimeout(() => {
      display.classList.remove("animate");
    }, 500); // Adjust the time to match the animation duration
  };

  let clickTimeout = null;

  // Function to handle starting over
  const onStartOver = () => {
    onReset(); // Call the existing reset function
  };

  btn.addEventListener("click", onClick);

  // Event listener for reset button and clicker
  clickButton.addEventListener("click", onClick);
  resetButton.addEventListener("click", onReset);
};
