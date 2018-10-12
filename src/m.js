window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};

var colors = new Array(
  [4, 96, 157],
  [106, 49, 92],
  [146, 0, 19],
  [255, 120, 46],
  [224, 223, 92]
);

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.0075;
var rot = 315;

setInterval(function () {
  // requestAnimationFrame(() => {
    updateGradient();
    rot = rot + 0.25 > 360 ? 0 : rot + 0.25;
  // });
}, 50);

function updateGradient() {
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  document.querySelector("#g").style.background = "linear-gradient(" + rot + "deg, " + color1 + " , " + color2 + ") scroll";

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;

    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}