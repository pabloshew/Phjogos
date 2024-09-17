class Pad{
    constructor(c, keyboard){
       
        this.c = c;
        this.keyboard = keyboard;
        this.x=50;
        this.largura= 20;
        this.altura= 100
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        this.Pad = new Image();
        this.Pad.width= 60
        this.Pad.height= 80;
        this.Pad.src= "Assets/Goleiro.png";
        this.Pad.addEventListener('load', () => 
        {
            this.draw()
        });
       
    

    }
    management(){
        if(this.keyboard.cima)
            if(this.y > 0 && this.y - 5)
                this.y-=this.vel;
            if(this.keyboard.baixo)
                if(this.y < this.c.canvas.height-this.altura - 5)
                    this.y+=this.vel;
    
    }
    draw(){
        this.management();
       this.c.drawImage(this.Pad, this.x, this.y, this.Pad.width, this.Pad.height);
        
    }
}