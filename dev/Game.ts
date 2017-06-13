class Game{

    clicksPerSecond:number = 0;
    score: number = 0;
    cookie:Cookie;
    john:JohnTheClicker;
    batman:BatmanTheClicker;
    flash:FlashTheClicker;
    clicker:Clicker;

    constructor(){
        this.clicker = new Clicker("Clicker",0,0,0,0,0,this)
        this.cookie = new Cookie(200,200, this);
        this.john = new JohnTheClicker("Alfred",(1/60),20,0,10,0,this);
        this.batman = new BatmanTheClicker("Batman",(5/60),100,0,110,0,this);
        this.flash = new FlashTheClicker("Riddler",(25/60),1000,0,220,0,this);
        requestAnimationFrame(() => this.gameloop());


    }

    gameloop(){
        
        // setInterval(this.gameloop(),1000)
        this.updateScore();
        this.updateClicksPerSecond()
        this.updateClicks()
        requestAnimationFrame(() => this.gameloop())
}

    updateScore(){
        document.getElementById("score").innerHTML = "Batman's: " + Math.floor(this.score);

    }
    updateClicksPerSecond(){
        document.getElementById("clicksPerSecond").innerHTML = "Batman's per second:  " + Math.ceil((this.clicksPerSecond * 60));
    }
    updateClicks(){
        this.score += this.clicksPerSecond
    }

}

