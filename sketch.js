var wall,thickness;
var bullet,speed,weight



function setup(){
    createCanvas(1600,400)


speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)

bullet=createSprite(50,200,50,50)
bullet.velocityX = speed
bullet.shapeColor=color(255)

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)


}


function draw(){




{
    wall.shapeColorr=color(0,255,0)
}

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
 {
  bullet.velocityX=0
  var deformation=0.5 *weight * speed* speed/22500
  if(deformation>180)
 {
    bullet.shapeColor=color(255,0,0)
  }
if(deformation<180 && deformation>100)
{
bullet.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0)
}






drawSprites()
}


function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x+bullet.width
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    if(hasCollided(bullet,wall))
{
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness)
if(damage>10)
{
wall.shapeColor=color(255,0,0)

}

    {
        return true
    }
    return false
  }
}
}
