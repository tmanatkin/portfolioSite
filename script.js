// start name trace
function TraceName() {
  // select svg path layers
  let layer1 = document.querySelectorAll(".nameTrace > .layer1");
  let layer2 = document.querySelectorAll(".nameTrace > .layer2");
  // reset delay
  let delayCounter = 300;
  // iterate through first layer
  layer1.forEach((path) => {
    // define speed for each path
    let length = path.getTotalLength() * 2;
    // set animation for each path
    path.style.animation = "draw " + length + "ms ease-out forwards " + delayCounter + "ms";
    // increase delay
    delayCounter = delayCounter + length + 10;
  });
  // reset delay
  delayCounter = 400;
  // iterate through second layer
  layer2.forEach((path) => {
    // define speed for each path
    let length = path.getTotalLength() * 2;
    // set animation for each path
    path.style.animation = "draw " + length + "ms ease-out forwards " + delayCounter + "ms";
    // increase delay
    delayCounter = delayCounter + length + 10;
  });
}

// settings for viewport intersection observer
const options = {
  // sets viewport as container
  root: null,
  // decrease viewport height by 50px
  rootMargin: "-10px",
  // 0% of the element needs to be visible to trigger animation
  threshold: 0,
};

// wait for window to load before running
window.addEventListener("load", (event) => {
  // animate on entering viewport
  let scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // if entering viewport
      if (entry.isIntersecting) {
        // if coming from bottom
        if (entry.boundingClientRect.top > 0) {
          // add class to animate target
          entry.target.classList.add("fromBottom");
          // if coming from top
        } else {
          // add class to animate target
          entry.target.classList.add("fromTop");
        }
        // remove classes to animate target again later
      } else {
        entry.target.classList.remove("fromBottom");
        entry.target.classList.remove("fromTop");
      }
    });
  }, options);
  // observe each elementf with class .fadeIn
  document.querySelectorAll(".fadeIn").forEach((element) => {
    scrollObserver.observe(element);
  });
});

// wiait for window to load before running
window.addEventListener("load", (event) => {
  // animate on entering viewport
  let scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // if entering viewport
      if (entry.isIntersecting) {
        // animate
        TraceName();
      }
      // reset animation
      else {
        let paths = document.querySelectorAll(".nameTrace > path");
        paths.forEach((path) => {
          path.style.animation = "undraw 0ms";
        });
      }
    });
  }, options);
  // observe each target with class .fadeIn
  document.querySelectorAll(".nameTrace").forEach((element) => {
    scrollObserver.observe(element);
  });
});

// target vs element?
// why add event listner at beginning?
