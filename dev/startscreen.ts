class Startscren{


    private background:HTMLElement;

    constructor(){
        
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "overlay");

        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");

        let inside = document.createElement("div");
        this.background.appendChild(inside);
        inside.setAttribute("id", "startScreenInside");

        let rules = document.createElement("div");
        this.background.appendChild(rules);
        inside.setAttribute("id", "startScreenInside");


        inside.innerHTML = "<h3>Batman Basher</h3>";


        let button = document.createElement("button");
        inside.appendChild(button);
        button.setAttribute("id", "button");
        button.innerHTML = "Start Game";
        button.addEventListener("click", this.startGame);

        rules.innerHTML = "<br><h4>Smash that Batman logo to get more batmans<h4><br><h4>When the joker appears KILL IT!</h4>"
        

        
    }
    private startGame(){
        document.getElementById("startScreen").remove();
        document.getElementById("overlay").remove();
        new Game();
        }
}