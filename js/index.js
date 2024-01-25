const bodyContainer = document.querySelector(".body-container");
const bodies = bodyContainer.querySelectorAll(".body");

let isMouseHover = false;
const hoverTimes = [1, 1, 1, 1, 1];
let currentIndex = 0;

const getHoverInfo = (event) => {
  /* get target's index */
  gridContainer = event.target.parentElement;
  currentIndex = Array.prototype.indexOf.call(
    gridContainer.children,
    event.target
  );

  isMouseHover = true;
  // parent.style.gridTemplateColumns = "2fr 1fr 1fr 1fr 1fr";
};

const getMouseoutInfo = (event) => {
  isMouseHover = false;
};

const stretch = () => {
  if (isMouseHover && hoverTimes[currentIndex] < 10) {
    hoverTimes[currentIndex]++;

    for (let i = 0; i < hoverTimes.length; i++) {
      if (i === currentIndex || hoverTimes[i] <= 1) continue;
      else {
        hoverTimes[i]--;
      }
    }

    const columns = hoverTimes.map((time) => `${time}fr`).join(" ");
    gridContainer.style.gridTemplateColumns = columns;
  }
};

bodyContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"; // in order to init grid column template
const hoverTimeID = setInterval(stretch, 500);

bodies.forEach((body) => body.addEventListener("mouseover", getHoverInfo));
bodies.forEach((body) => body.addEventListener("mouseout", getMouseoutInfo));
