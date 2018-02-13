var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 100.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas(1000, 900);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(151);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.005;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  // A simple way to draw the wave with an ellipse at each location
for (var y = -150; y < height*2; y+=20) {
      for (var x = 0; x < yvalues.length; x++) {
            rect(x*xspacing, y/2+yvalues[x], 5, 5);
            fill(random(0, 75));

      }
}
}
