class Joker {

    private div:HTMLElement;
    private posX: number = 0;
    private posY: number = 0;
    private g:Game

    constructor(game:Game){
        this.g = game;
        this.posX = (Math.random()*500);
        this.posY = (Math.random()*window.innerHeight)-200;



        this.div = document.createElement('joker')
        this.div.setAttribute("id", "joker")
        document.body.appendChild(this.div)

        this.div.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event))

        this.move()

    }
    onMouseClick(event:MouseEvent){
        this.g.score +=100;
        document.getElementById('joker').remove();
    }

    move(){
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }


}