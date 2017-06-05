class JohnTheClicker extends Clicker{

    private john:HTMLElement;
    private game:Game;



    constructor(clicksPS:number,cost:number,x:number,y:number,g:Game){
        super(clicksPS,cost,x,y)
        this.clicksPS = clicksPS;
        this.cost = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
    


        this.john = document.createElement('john')
        document.body.appendChild(this.john)

        this.john.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move()

    }

    onMouseClick(event: MouseEvent){
        if(this.game.score > this.cost){
            this.game.score -= this.cost
            this.cost += 10;
            this.game.clicksPerSecond += this.clicksPS;
        }else{
            alert("john kost " + this.cost)
        }
     }  

    move(){
        this.john.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}