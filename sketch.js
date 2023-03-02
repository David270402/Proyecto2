function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(0, 0, 0);
}
let=posX=40;
let=posY=40;
function draw(){
circle(posY,posY,posX);
fill(255,0,0)
posY = posY+1;
  if(posY==windowWidth){
    posY=40
  }
posX = posX+1;
  if(posX==windowWidth){
    posX=40
  }
}