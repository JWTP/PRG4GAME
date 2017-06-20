class Batman{
    private batman:HTMLElement;
    private Xpos:number;
    private Ypos:number;
    private clicked:number =0 ;
    private random:number =0;
    private game:Game;

    constructor(x:number, y:number,g:Game){
        this.Xpos = x;
        this.Ypos = y;
        this.game = g;

        this.batman = document.createElement("cookie");
        document.body.appendChild(this.batman);

        this.random = (Math.random()*250);

        this.batman.addEventListener("click", (event: MouseEvent) => this.onMouseClick(event)); 
        
        this.move();
        
    }
    
        
    onMouseClick(event: MouseEvent){   
        this.game.score += 1;
        if(this.clicked > this.random){
            let joker = new Joker(this.game);
            this.clicked = 0;
            this.random = (Math.random()*250);
        }else{
            this.clicked +=1;
        }
     }

     move(){
        this.batman.style.transform = "translate("+this.Xpos+"px, "+this.Ypos+"px)";
    }
}

