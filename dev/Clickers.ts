class Clickers extends Clicker{

    constructor(name:string,clicksPS:number,cost:number,x:number,y:number,g:Game){
        super(name,clicksPS,cost,x,y,g)
        this.clicksPS = clicksPS;
        this.cost = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.name = name;

        this.div = document.createElement('li')
        this.div.setAttribute("id", this.name);
        document.getElementById("menu").appendChild(this.div);
        this.div.innerHTML = this.name;

        this.div.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 

        this.move();
    }
}

