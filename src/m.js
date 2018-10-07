window.ontouchmove = function() {
  return false;
};
window.onorientationchange = function() {
  document.body.scrollTop = 0;
};

// setInterval(() => {
//   requestAnimationFrame(ug);
// }, 500);

// let cs = ['#04609D', '#CE021C', '#6A315C']
// let gs = 0.0075;
// c1idx = 0;
// c2idx = 1;
// function ug() {
//   document.querySelector("#g").style.background = "linear-gradient(-45deg, " + cs[c1idx] + " , " + cs[c2idx] + ") scroll";
//   c1idx = c2idx;
//   c2idx = c2idx++ >= cs.length ? 0 : c2++;
// }


// var colors = new Array(
//   [4, 96, 157],
//   [106, 49, 92],
//   [146, 0, 19]);

// var step = 0;
// //color table indices for: 
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0,1,2,3];

// //transition speed
// var gradientSpeed = 0.002;

// function updateGradient()
// {
  
//   if ( $===undefined ) return;
  
// var c0_0 = colors[colorIndices[0]];
// var c0_1 = colors[colorIndices[1]];
// var c1_0 = colors[colorIndices[2]];
// var c1_1 = colors[colorIndices[3]];

// var istep = 1 - step;
// var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// var color1 = "rgb("+r1+","+g1+","+b1+")";

// var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// var color2 = "rgb("+r2+","+g2+","+b2+")";

//  $('#gradient').css({
//    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//     background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
//   step += gradientSpeed;
//   if ( step >= 1 )
//   {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];
    
//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
//   }
// }

// setInterval(updateGradient,10);






let colors = new Array(
  [4,   96,  157],
  [106, 49,  92],
  [146, 0,   19],
  [255, 120, 46],
);

let step = 0;
let colorIndices = [0, 1, 2, 3];
let gradientSpeed = 0.0075;
let rot = 315;


setInterval( function() {
  requestAnimationFrame(() => {
    updateGradient();
    rot = rot + 0.25 > 360 ? 0 : rot + 0.25;
  });
}, 50);

// setInterval(() => {
//   requestAnimationFrame(() => {
//     rot = rot + 0.45 > 360 ? 0 : rot + 0.45;
//   });
// }, 150)


function updateGradient() {
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c1_0 = colors[colorIndices[2]];
  let c1_1 = colors[colorIndices[3]];

  let istep = 1 - step;
  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = "rgb("+r1+","+g1+","+b1+")";

  let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = "rgb("+r2+","+g2+","+b2+")";

  document.querySelector("#g").style.background = "linear-gradient(" + rot + "deg, " + color1 + " , " + color2 + ") scroll";

  step += gradientSpeed;
  if ( step >= 1 ){
    step %= 1;

    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}




// let istep = 1 - step;
// let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// let color1 = `rgb(${r1},${g1},${b1})`;

// let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// let color2 = `rgb(${r2},${g2},${b2})`;

// document.querySelector("#g").style.background = `linear-gradient(${rot}deg, ${color1}, ${color2}) scroll}`;

// rot = rot + 15 > 360 ? 0 : rot + 15;
