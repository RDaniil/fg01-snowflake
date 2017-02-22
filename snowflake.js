var canvasH = 600;
var canvasW = 600;
var lineSize = 400;
var strokeCol = 200;
var backgroundColor = 10;

var iterationsSlider;
var drawButton;

function setup() {
  createCanvas(canvasW, canvasH);
  background(backgroundColor);
  stroke(strokeCol);

  strokeWeight(1.5);
  //Захардкодил позицию с которой все начинает рисоваться
  translate(canvasW/2 + lineSize/2, canvasH/2 + lineSize/3);
  rotate(PI/2);

  instucions = createP("Слайдер - количество итераций (от 0 до 5). Кнопка - рисует снежинку");
  instucions.position(width + 20, 0);

  iterationsSlider = createSlider(0, 5, 0, 1);
  iterationsSlider.position(width + 20, 40);

  drawButton = createButton('Draw snowflake');
  drawButton.mousePressed(drawKochSnowflake);
  drawButton.position(width+20, 80);
}

function drawKochSnowflake()
{
  background(backgroundColor);
  stroke(strokeCol);
  for (var i = 0; i < 3; i++) {
    drawKochCurve(lineSize, iterationsSlider.value());
    rotate(2*PI/3);
  }
}

//Рисует кривую коха с "инициатором" длины length
function drawKochCurve(length, n)
{
  if(n == 0){
    line(0, length, 0, 0);
    translate(0, length);
    return;
  }
    drawKochCurve(length/3, n-1);
    rotate(-PI/3);
    drawKochCurve(length/3,  n-1);
    rotate(2*PI/3);
    drawKochCurve(length/3, n-1);
    rotate(-PI/3);
    drawKochCurve(length/3, n-1);
}
