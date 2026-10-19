class mover {
    constructor (startX, startY){
        this.x = startX;
        this.y = startY;
        this.vx = random(-6,6);
        this.vy = random(-6,6);
        this.angle = random(360);
        this.rotSpeed = random(-3,3);
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.rotSpeed;
    }
    
    keepInCanvas(){
        if (this.x < 0 || this.x > width){
            this.vx = this.vx * -1;
        }
        if (this.y < 0 || this.y > height){
            this.vy = this.vy * -1;
        }
    }
    display(img_2){
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        image(img_2 ,0,0,120,120);
        pop();
    }
}