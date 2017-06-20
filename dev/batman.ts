class Batman{
    private batman:HTMLElement;
    private Xpos:number;
    private Ypos:number;

    private game:Game;

    constructor(x:number, y:number,g:Game){
        this.Xpos = x;
        this.Ypos = y;
        this.game = g;

        this.batman = document.createElement("cookie");
        document.body.appendChild(this.batman);

        
        this.batman.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)) 
        
        this.move()
        
    }
        
     onMouseClick(event: MouseEvent){   
        this.game.score += 1;
     }  

     move(){
        this.batman.style.transform = "translate("+this.Xpos+"px, "+this.Ypos+"px)";
    }
}

