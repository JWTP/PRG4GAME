class Clicker{

    protected div:HTMLElement;
    protected name:string;
    protected clicksPS:number;
    protected cost:number;
    protected posX:number;
    protected posY:number;
    protected amount:number = 0;
    protected game:Game;

    constructor(name:string,clicksPS:number, cost:number,posX:number, posY:number,g:Game){
    this.game = g;
    }


    protected move(){
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }     
}

