class JohnTheClicker extends Clicker{

    constructor(name:string,clicksPS:number,cost:number,x:number,y:number,amount:number,g:Game){
        super(name,clicksPS,cost,x,y,amount,g)
        this.clicksPS = clicksPS;
        this.cost = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.name = name;
        this.amount = amount;


        this.div = document.createElement('john')
        document.body.appendChild(this.div)
        document.createElement('h2').innerHTML = "Johnny the clicker"

        this.div.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move();
    }

}