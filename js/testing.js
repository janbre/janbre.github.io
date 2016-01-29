var CANVAS_SIZE = 1080;
var x = CANVAS_SIZE / 2;
var y = CANVAS_SIZE / 2;

var mercuryRadiusOrbit = 8;
var venusRadiusOrbit = 11;
var earthRadiusOrbit = 16.5;
var marsRadiusOrbit = 24;
var jupiterRadiusOrbit = 82;
var saturnRadiusOrbit = 144;
var uranusRadiusOrbit = 333;
var neptuneRadiusOrbit = 500;
var mercuryRadiusPlanet;
var venusRadiusPlanet;
var earthRadiusPlanet;
var marsRadiusPlanet;
var jupiterRadiusPlanet;
var saturnRadiusPlanet;
var uranusRadiusPlanet;
var neptuneRadiusPlanet;
var mercuryOrbit;
var venusOrbit;
var earthOrbit;
var marsOrbit;
var jupiterOrbit;
var saturnOrbit;
var uranusOrbit;
var neptuneOrbit;

var mercury = new Image();
var venus = new Image();
var earth = new Image();
var mars = new Image();
var jupiter = new Image();
var saturn = new Image();
var uranus = new Image();
var neptune = new Image();
var background = new Image();

var ctx;

var mercuryAngle = 0;
var mercuryX;
var mercuryY;
var venusAngle = 0;
var venusX;
var venusY;
var earthAngle = 0;
var earthX;
var earthY;
var marsAngle = 0;
var marsX;
var marsY;
var jupiterAngle = 0;
var jupiterX;
var jupiterY;
var saturnAngle = 0;
var saturnX;
var saturnY;
var uranusAngle = 0;
var uranusX;
var uranusY;
var neptuneAngle = 0;
var neptuneX;
var neptuneY;

var earthYear = 1;
var mercuryYear = 0.24;
var venusYear = 0.62;
var marsYear = 1.9;
var jupiterYear = 12;
var saturnYear = 29.45;
var uranusYear = 84;
var neptuneYear = 164.8;

function init() {
  var canvas = document.getElementById('tutorial');
  ctx = canvas.getContext('2d');
  mercuryOrbit = createOrbit(ctx, x, y, mercuryRadiusOrbit, 0, 360);
  venusOrbit = createOrbit(ctx, x, y, venusRadiusOrbit, 0, 360);
  earthOrbit = createOrbit(ctx, x, y, earthRadiusOrbit, 0, 360);
  marsOrbit = createOrbit(ctx, x, y, marsRadiusOrbit, 0, 360);
  jupiterOrbit = createOrbit(ctx, x, y, jupiterRadiusOrbit, 0, 360);
  saturnOrbit = createOrbit(ctx, x, y, saturnRadiusOrbit, 0, 360);
  uranusOrbit = createOrbit(ctx, x, y, uranusRadiusOrbit, 0, 360);
  neptuneOrbit = createOrbit(ctx, x, y, neptuneRadiusOrbit, 0, 360);
  mercury.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  venus.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  mars.src = 'img/mars.png';
  jupiter.src = 'img/jupiter.png';
  saturn.src = 'img/saturn.png';
  uranus.src = 'img/uranus.png';
  neptune.src = 'img/neptune.png';
  background.src = 'img/stars.jpg';
  //draw();
  window.requestAnimationFrame(draw);
}


function draw2() {
  ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
  var new_x = jupiterRadiusOrbit + jupiterRadius * Math.cos(angle * Math.PI / 180);
  var new_y = jupiterRadiusOrbit + jupiterRadius * Math.sin(angle * Math.PI / 180);
  angle++;
  if (angle >= 360) {
    angle = 0;
  }
  ctx.drawImage(earth, new_x, new_y);
  window.requestAnimationFrame(draw2);
}

function draw() {
  ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
  ctx.drawImage(background, 0, 0);
  ctx.strokeStyle = 'rgba(0,152,255,0.4)';
  ctx.stroke(earthOrbit);
  ctx.stroke(mercuryOrbit);
  ctx.stroke(venusOrbit);
  ctx.stroke(marsOrbit);
  ctx.stroke(jupiterOrbit);
  ctx.stroke(saturnOrbit);
  ctx.stroke(uranusOrbit);
  ctx.stroke(neptuneOrbit);
  animateMercury();
  animateVenus();
  // TODO:
  animateEarth();
  animateMars();
  animateJupiter();
  animateSaturn();
  animateUranus();
  animateNeptune();
  window.requestAnimationFrame(draw);
}

function createOrbit(ctx, centerX, centerY, radius, startAngle, endAngle) {
  var orbit = new Path2D();
  orbit.arc(centerX, centerY, radius, startAngle, endAngle);
  return orbit;
}


function drawBackgroud() {
  // TODO: draw a starry background. Place pixels at random locations, some bigger than others
  // perhaps also some blur on some of them
  return null;
}

function animateOrbit(orbit) {
  // TODO: the orbiting planet trails an outline of the orbit that fades away
  return null;
}

function animateMercury() {
  // TODO: use parameters for Mercury
  mercuryX = (CANVAS_SIZE / 2) - (mercuryRadiusOrbit * Math.cos(mercuryAngle * Math.PI / 180));
  mercuryY = (CANVAS_SIZE / 2) - (mercuryRadiusOrbit * Math.sin(mercuryAngle * Math.PI / 180));
  ctx.drawImage(mercury, (mercuryX - mercury.width/4), mercuryY - mercury.width/4, mercury.width*0.5, mercury.height*0.5);
  mercuryAngle += 1/mercuryYear;
  if (mercuryAngle >= 360) {
    mercuryAngle = 0;
  }
}

function animateVenus() {
  venusX = (CANVAS_SIZE / 2) - (venusRadiusOrbit * Math.cos(venusAngle * Math.PI / 180));
  venusY = (CANVAS_SIZE / 2) - (venusRadiusOrbit * Math.sin(venusAngle * Math.PI / 180));
  ctx.drawImage(venus, (venusX - venus.width/2), venusY - venus.width/2, venus.width*1, venus.height*1);
  venusAngle += 1/venusYear;
  if (venusAngle >= 360) {
    venusAngle = 0;
  }
}

function animateEarth() {
  earthX = (CANVAS_SIZE / 2) - (earthRadiusOrbit * Math.cos(earthAngle * Math.PI / 180));
  earthY = (CANVAS_SIZE / 2) - (earthRadiusOrbit * Math.sin(earthAngle * Math.PI / 180));
  ctx.drawImage(earth, (earthX - earth.width/4), earthY - earth.width/4, earth.width*0.5, earth.height*0.5);
  earthAngle += 1/earthYear;
  if (earthAngle >= 360) {
    earthAngle = 0;
  }
}

function animateMars() {
  marsX = (CANVAS_SIZE / 2) - (marsRadiusOrbit * Math.cos(marsAngle * Math.PI / 180));
  marsY = (CANVAS_SIZE / 2) - (marsRadiusOrbit * Math.sin(marsAngle * Math.PI / 180));
  ctx.drawImage(mars, (marsX-mars.width/18), marsY-mars.width/18, mars.width*0.111, mars.height*0.111);
  marsAngle += 1/marsYear;
  if (marsAngle >= 3600) {
    marsAngle = 0;
  }
}

function animateJupiter() {
  jupiterX = (CANVAS_SIZE / 2) - (jupiterRadiusOrbit * Math.cos(jupiterAngle * Math.PI / 180));
  jupiterY = (CANVAS_SIZE / 2) - (jupiterRadiusOrbit * Math.sin(jupiterAngle * Math.PI / 180));
  ctx.drawImage(jupiter, (jupiterX-jupiter.width/4), jupiterY-jupiter.width/4, jupiter.width*0.5, jupiter.height*0.5);
  jupiterAngle += 1/jupiterYear;
  if (jupiterAngle >= 3600) {
    jupiterAngle = 0;
  }
}

function animateSaturn() {
  saturnX = (CANVAS_SIZE / 2) - (saturnRadiusOrbit * Math.cos(saturnAngle * Math.PI / 180));
  saturnY = (CANVAS_SIZE / 2) - (saturnRadiusOrbit * Math.sin(saturnAngle * Math.PI / 180));
  ctx.drawImage(saturn, (saturnX-saturn.width/5), saturnY-saturn.width/12.2, saturn.width*0.4, saturn.height*0.4);
  saturnAngle += 1/saturnYear;
  if (saturnAngle >= 3600) {
    saturnAngle = 0;
  }

}

function animateUranus() {
  uranusX = (CANVAS_SIZE / 2) - (uranusRadiusOrbit * Math.cos(uranusAngle * Math.PI / 180));
  uranusY = (CANVAS_SIZE / 2) - (uranusRadiusOrbit * Math.sin(uranusAngle * Math.PI / 180));
  ctx.drawImage(uranus, (uranusX-uranus.width/6), uranusY-uranus.width/6, uranus.width*0.33, uranus.height*0.33);
  uranusAngle += 1/uranusYear;
  if (uranusAngle >= 3600) {
    uranusAngle = 0;
  }
}

function animateNeptune() {
  neptuneX = (CANVAS_SIZE / 2) - (neptuneRadiusOrbit * Math.cos(neptuneAngle * Math.PI / 180));
  neptuneY = (CANVAS_SIZE / 2) - (neptuneRadiusOrbit * Math.sin(neptuneAngle * Math.PI / 180));
  ctx.drawImage(neptune, (neptuneX-neptune.width/6), neptuneY-neptune.width/6, neptune.width*0.33, neptune.height*0.33);
  neptuneAngle += 1/neptuneYear;
  if (neptuneAngle >= 3600) {
    neptuneAngle = 0;
  }
}

