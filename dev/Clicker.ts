class Clicker{

    protected div:HTMLElement;
    protected name:string;
    protected clicksPS:number;
    protected cost:number;
    protected posX:number;
    protected posY:number;
    protected amount:number;
    protected game:Game;
    constructor(name:string,clicksPS:number, cost:number,posX:number, posY:number,amount:number,g:Game){
        this.game = g;
    }
    protected onMouseClick(event: MouseEvent){
        if(this.game.score >= this.cost){
            this.game.score -= this.cost
            this.cost *=1.2;
            this.amount +=1;
            this.game.clicksPerSecond += this.clicksPS;
            document.getElementById(this.name).innerHTML = "[" + this.amount + "] " + this.name.toUpperCase();
            console.log(this.amount);
        }else{
            alert(this.name + " costs " + Math.floor(this.cost) + " " + "batman's")
        }
     }
    protected move(){
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }     
}

