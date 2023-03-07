// start name trace
function traceName() {
  // select svg path layers
  var layer1 = document.querySelectorAll(".nameTrace > .layer1");
  var layer2 = document.querySelectorAll(".nameTrace > .layer2");
  // reset delay
  var delayCounter = 300;
  // iterate through first layer
  layer1.forEach((path) => {
    // define speed for each path
    var length = path.getTotalLength() * 2;
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
    var length = path.getTotalLength() * 2;
    // set animation for each path
    path.style.animation = "draw " + length + "ms ease-out forwards " + delayCounter + "ms";
    // increase delay
    delayCounter = delayCounter + length + 10;
  });
}
