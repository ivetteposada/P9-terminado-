var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(400,400);  
  

}

function draw() {
  
  background(r,g,b);
  

  if(keyIsDown(RIGHT_ARROW)){
    red_bg();
  }

  if (keyIsDown(LEFT_ARROW)){
    green_bg();
  
  }

  if(keyIsDown(UP_ARROW)){
    blue_bg();
  }


}


function red_bg()
{
  
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}

function blue_bg()
{
  r=0;
  g=0;
  b=255;
}
