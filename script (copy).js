function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent();
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(100, 280, 200, 280, 150, 210);
describe('A white triangle with a black outline on a gray canvas.');

  // teken de deur
  noStroke();
  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
  rect(115,340,25,40);
  // teken de maan
  fill('khaki');
  // VERVANG DEZE REGEL door een regel die de maan tekent met een diameter van 150 en 25 vanaf de rand
circle(350,80,130);
describe('A white circle with black outline in the middle of a gray canvas.');
  fill('sienna');
  rect(300,250,40,140);
  fill('olive');
  ellipse(320,200,100,150)
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}