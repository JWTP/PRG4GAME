class BatmanTheClicker{

    private batman:HTMLElement;
    private clicksPerSecond:number;
    private costBatman:number
    private posX:number;
    private posY:number;
    private game:Game;



    constructor(clicksPS:number,cost:number,x:number,y:number,g:Game){
        this.clicksPerSecond = clicksPS;
        this.costBatman = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
    


        this.batman = document.createElement('batman')
        document.body.appendChild(this.batman)

        this.batman.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move()

    }

    onMouseClick(event: MouseEvent){
        if(this.game.score > this.costBatman){
            this.game.score -= this.costBatman
            this.costBatman += 50;
            this.game.clicksPerSecond += this.clicksPerSecond;
        }else{
            alert("Batman kost " + this.costBatman)
        }
     }  

    move(){
        this.batman.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}