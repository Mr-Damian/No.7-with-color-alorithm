let threeColors = []


function setup() {
  createCanvas(1000, 1000);
  noStroke()
  noLoop()
  threeColors = [...createPalette(3)]
}

function draw() {
  for (x = 0; x < 1001; x += 50) {
    for (y = 0; y < 1001; y += 50) {
      push();
      translate(x, y);
      block()
      circleInBlock()
      pop()
    }
  }
}

function block() {
  fill(color(threeColors[floor(random(0, 3))]))
  rect(0, 0, 50, 50)
}

function circleInBlock() {
  fill(color(threeColors[floor(random(0, 3))]))
  ellipse(0, 0, 50, 50)
}


function createPalette(numberOfColors) {
  colorMode(HSB);

  let harmonyType;

  let generatedPalette = [];

  let harmonyRules = [
    'complementary',
    'splitComplementary',
    'analogous',
    'triadic',
    'tetradic',
    'square',
    'monochromatic',
    'toMany'
  ]

  let anchorColor = [
    random(360),
    random(30, 100),
    random(60, 100)
  ];

  let c = [];


  //selects a type of color harmony randomly
  if (numberOfColors == 2) {
    harmonyType = harmonyRules[floor(random(0, 7))]
  } else if (numberOfColors == 3) {
    harmonyType = harmonyRules[floor(random(1, 7))]
  } else if (numberOfColors == 4) {
    harmonyType = harmonyRules[floor(random(4, 7))]
  } else {
    harmonyType = harmonyRules[8]
  }


  //code for selecting complementary color
  if (harmonyType == 'complementary') {
    c = [...anchorColor]
    for (i = 0; i < numberOfColors; i++) {
      generatedPalette.push(c.slice(0, 3))
      c.splice(0, 1, ((c[0] + 180) % 360))
    }
  }
  //code for selecting split complementary color
  else if (harmonyType == 'splitComplementary') {
    c = [...anchorColor]
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 150) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 60) % 360))
    generatedPalette.push(c.slice(0, 3))
  }
  //code for selcting analogous color
  else if (harmonyType == 'analogous') {
    c = [...anchorColor]
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 40) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 40) % 360))
    generatedPalette.push(c.slice(0, 3))
  }
  //code for selecting triadic color
  else if (harmonyType == 'triadic') {
    c = [...anchorColor]
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 120) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 120) % 360))
    generatedPalette.push(c.slice(0, 3))
  }
  //generates tatradic harmony
  else if (harmonyType == 'tetradic') {
    c = [...anchorColor]
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 30) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 150) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 30) % 360))
    generatedPalette.push(c.slice(0, 3))
  }
  //generates square harmony palette
  else if (harmonyType == 'square') {
    c = [...anchorColor]
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 60) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 60) % 360))
    generatedPalette.push(c.slice(0, 3))
    c.splice(0, 1, ((c[0] + 60) % 360))
    generatedPalette.push(c.slice(0, 3))
  }
  //
  else if (harmonyType == 'monochromatic') {
    c = [...anchorColor]
    c.splice(2, 1, random(80, 100))
    generatedPalette.push(c.slice(0, 3))
    for (i = 0; i < numberOfColors; i++) {
      c.splice(2, 1, (c[2] - 20))
      generatedPalette.push(c.slice(0, 3))
      c.splice(2, 1, (c[2] - 20))
      generatedPalette.push(c.slice(0, 3))
      c.splice(2, 1, (c[2] - 20))
      generatedPalette.push(c.slice(0, 3))
      c.splice(2, 1, (c[2] - 20))
      generatedPalette.push(c.slice(0, 3))
    }
  }
  console.log(generatedPalette)
  return (generatedPalette);
}

function mousePressed() {
  save('No.7_camo_ca.png')
}
