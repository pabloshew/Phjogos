class VerifyWinner{

    constructor(c,placar)
    {
        this.c= c;
        this.placar= placar;

    }


    draw(){
        if(pontoJogador1 == 5 || pontoJogador2 == 5) {
            
            if( pontoJogador1 > pontoJogador2)
            {
                setTimeout(() => {
                    textWinner= "Parabéns, Você venceu ele!"
                    this.placar.resetScore();

                },2000);

            }
            else 
            {
                setTimeout(() => {
                    textWinner= "Que pena, o Adversário ganhou!";
                    this.placar.resetScore();

                },1000);

            }
        
    }
    this.c.font= "70px arial";
    this.c.fillStyle=  "black";
    this.c.fillText(textWinner, 100, this.c.canvas.height - 100, this.c.canvas.width);
    }



}