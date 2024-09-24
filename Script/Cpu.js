class Cpu{
    constructor(c,bola ){
        this.c = c;
        this.bola = bola;
        this.largura= 40;
        this.altura= 100;
        this.x=this.c.canvas.width - this.largura -5; 
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.meioY = Math.random() * this.altura;
        this.vel=5;
        this.Cpu = new Image();
        this.Cpu.width= 60
        this.Cpu.height= 80;
        this.Cpu.src= "Assets/Golleros.png";
        this.Cpu.addEventListener('load', () => 
        {
            this.draw()
        });

    }
    management(){
      // movimentação do pad
      if ((this.bola.dirX > 0) && (this.bola.x > (this.c.canvas.width/2)))
        {
            if (this.bola.y + (this.bola.altura/2) > (this.y+this.meioY))
                this.y += this.vel;
            if (this.bola.y + (this.bola.altura/2) < (this.y+this.meioY))
                this.y -= this.vel;
        }
        else
        {
            if (this.y > this.inicioY){
                this.y -= this.vel
            }
            if (this.y < this.inicioY){
                this.y += this.vel
            }
        }
    // colisão
    if ((this.x <= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x)&& ((this.y + this.altura >= this.bola.y) && (this.y <= this.bola.altura+ this.bola.y)))
        {
            this.bola.dirX = -1;
            this.bola.dirY = ((this.bola.y + (this.bola.altura/2))-(this.y +(this.altura/2)))/16;
            this.meioY = Math.random() * this.altura;
        }
}
    
    
        
    


draw(){
    this.management();
    this.c.drawImage(this.Cpu, this.x, this.y, this.Cpu.width, this.Cpu.height);
    
}
}
