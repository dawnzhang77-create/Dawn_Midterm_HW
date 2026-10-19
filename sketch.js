let centerImg;
let flyingImg;
let centerAngle = 0;
let flyingPics = [];
let timer = 0;

function preload(){

centerImg = loadImage('img_1.PNG');
flyingImg = loadImage('img_2.PNG');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(0);

    push();
    translate(width / 2, height / 2);
    rotate(centerAngle);
    image(centerImg, 0,0, 200,200);
    pop();
    centerAngle +=0.5;
    timer +=1;

    if(timer > 60 && flyingPics.length < 5){
        let newPic = new mover(width /2, height /2);
        flyingPics.push(newPic);
        timer = 0;
    }
for (let i = 0; i < flyingPics.length; i++){
    flyingPics[i].update();
    flyingPics[i].keepInCanvas();
    flyingPics[i].display(flyingImg);
}
}
