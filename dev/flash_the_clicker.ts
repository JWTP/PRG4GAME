class FlashTheClicker extends Clicker{

    constructor(name:string,clicksPS:number,cost:number,x:number,y:number,amount:number,g:Game){
        super(name,clicksPS,cost,x,y,amount,g)
        this.clicksPS = clicksPS;
        this.cost = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.name = name;
        this.amount = amount;
    


        this.div = document.createElement('flash')
        document.body.appendChild(this.div)

        this.div.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move();
    }
}