class FlashTheClicker extends Clicker{

    private flash:HTMLElement;
    private game:Game;



    constructor(clicksPS:number,cost:number,x:number,y:number,g:Game){
        super(clicksPS,cost,x,y)
        this.clicksPS = clicksPS;
        this.cost = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
    


        this.flash = document.createElement('flash')
        document.body.appendChild(this.flash)

        this.flash.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move()

    }

    onMouseClick(event: MouseEvent){
        if(this.game.score > this.cost){
            this.game.score -= this.cost
            this.cost += 250;
            this.game.clicksPerSecond += this.clicksPS;
        }else{
            alert("the Flash kost " + this.cost)
        }
     }  

    move(){
        this.flash.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}