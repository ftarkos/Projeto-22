var starImg,bg,bgImg;
var star, starBody;
var fairy, fairyimg
var fairySound
var bg

//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    fairySound = loadSound("sound/JoyMusic.mp3")


}

function setup() {
    createCanvas(800, 750);

    bg = createSprite(400,375)
    bg.addImage(bgImg)

    //escrever código para tocar o som vozFada
    
    //criar sprite de fada e adicionar animação para fada
    fairy = createSprite(400,650);
    fairy.addAnimation(fairyimg);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
    drawSprites();
    
    
    
    if (keyDown(LEFT_ARROW)){
        fairy.velocityX = -10
    
    }else if(keyDown(RIGHT_ARROW)){
        fairy.velocityX = 10

    }
       

    
        

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody, true)
    }



}

    






