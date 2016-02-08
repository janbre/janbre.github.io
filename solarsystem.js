const CANVAS_SIZE = 1080;
const x = CANVAS_SIZE / 2;
const y = CANVAS_SIZE / 2;
var ctx;
var SPEED = 8;
var animateOrbit = false;

function Planet(name, img, orbitRadius, angle, yearLength, scale) {
  this.name = name;
  this.img = new Image();
  this.img.src = img;
  this.orbitRadius = orbitRadius;
  this.radius = this.img.width/2;
  this.angle = angle;
  this.startingAngle = angle;
  this.yearLength = yearLength;
  this.scaleX = scale;
  this.scaleY = scale;
  this.x = 0;
  this.y = 0;
  this.orbitTrail = 0;

  this.update = function() {
    if (animateOrbit) {
      this.animateOrbit();
    } else {
      this.drawOrbit();
    }
    if (this.name == "Saturn") {
      this.scaleY = this.scaleX*2.5;
    }
    this.x = (CANVAS_SIZE / 2) + (this.orbitRadius * Math.cos(this.angle * Math.PI / 180));
    this.y = (CANVAS_SIZE / 2) + (this.orbitRadius * Math.sin(this.angle * Math.PI / 180));
//    ctx.drawImage(this.img, (this.x - (this.radius*4)), this.y - this.radius/scale, this.img.width/scale, this.img.width/scale);
    //ctx.drawImage(this.img, this.x - this.radius,40,this.img.width/scale, this.img.width/scale); for a head on view
    var offset = this.img.width/2; 
    ctx.drawImage(this.img, (this.x - offset/this.scaleX), (this.y - offset/this.scaleY), this.img.width/this.scaleX, this.img.width/this.scaleY);

    var position = this.x - this.radius/scale;
    var xx = this.x - this.radius*4;
    this.angle += (1/this.yearLength)*SPEED;
    if (this.angle >= 360) {
      this.angle = 0;
    }
    if (this.orbitTrail < 120) {
      this.orbitTrail += (1/this.yearLength) * SPEED;
    }
  }

  this.animateOrbit = function() {
    var diff = this.angle - this.orbitTrail;
    if (diff < 0) {
    //if ((this.angle - this.startingAngle) > 120) {
      var orbit = createOrbit(ctx, x, y, this.orbitRadius, (360 + diff)*Math.PI/180, this.angle*Math.PI/180);
    } else {
      var orbit = createOrbit(ctx, x, y, this.orbitRadius, diff*Math.PI/180, this.angle*Math.PI/180);
    }
    ctx.stroke(orbit);
  }

  this.drawOrbit = function() {
    var orbit = createOrbit(ctx, x, y, this.orbitRadius, 0, Math.PI*2);
    ctx.stroke(orbit);
  }
}

var planets = [];

// Planet graphics
var imgMercury = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
var imgVenus = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
var imgEarth = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
var imgMars = "img/mars.png";
var imgJupiter = "img/jupiter.png";
var imgSaturn = "img/saturn.png";
var imgUranus = "img/uranus.png";
var imgNeptune = "img/neptune.png";




var background = new Image();
var c;

function init() {
  var canvas = document.getElementById('tutorial');
  ctx = canvas.getContext('2d');
  c = drawBackground();
  var mercury = new Planet("Mercury", imgMercury, 8, 0, 0.24, 2);
  planets.push(mercury);
  var venus = new Planet("Venus", imgVenus, 11, 10, 0.62, 1);
  planets.push(venus);
  var earth = new Planet("Earth", imgEarth, 16.5, 60, 1, 3);
  planets.push(earth);
  var mars = new Planet("Mars", imgMars, 24, 245, 1.9, 14);
  planets.push(mars);
  var jupiter = new Planet("Jupiter", imgJupiter, 82, 245, 12, 2);
  planets.push(jupiter);
  var saturn = new Planet("Saturn", imgSaturn, 144, 245, 29.45, 2.5);
  planets.push(saturn);
  var uranus = new Planet("Uranus", imgUranus, 333, 0, 84, 3);
  planets.push(uranus);
  var neptune = new Planet("Neptune", imgNeptune, 500, 0, 164.8, 3);
  planets.push(neptune);
  background.src = 'img/stars.jpg';
  window.requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
  ctx.drawImage(c, 0, 0);
  //ctx.strokeStyle = 'rgba(0,152,255,0.4)';
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  planets.forEach( function (arrayItem) {
    arrayItem.update();
  });
  window.requestAnimationFrame(draw);
}

function createOrbit(ctx, centerX, centerY, radius, startAngle, endAngle) {
  var orbit = new Path2D();
  orbit.arc(centerX, centerY, radius, startAngle, endAngle);
  return orbit;
}

function drawBackground() {
  // TODO: have variable opacity. Expand the star field to fill the browser window, but let
  // both opacity and concentration decrease as distance from center of canvas increases
  var starField = document.createElement("canvas");
  starField.width = CANVAS_SIZE;
  starField.height = CANVAS_SIZE;
  var context = starField.getContext("2d");
  var stars = 1500;
  context.fillStyle = 'rgba(232,232,232,0.4)';
  for (var i = 0; i < stars; i++) {
    var mX = Math.floor(Math.random() * CANVAS_SIZE);
    var mY = Math.floor(Math.random() * CANVAS_SIZE);
    var radius = 0.5+(Math.random());
    var star = new Path2D();
    star.arc(mX, mY, radius, 0, Math.PI*2);
    context.fill(star);
  }
  return starField;
}
