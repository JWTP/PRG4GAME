class Game{

    clicksPerSecond:number = 0;
    score: number = 25000;
    cookie:Cookie;
    alfred:Clickers;
    batman:Clickers;
    riddler:Clickers;
    clicker:Clicker;
    poison_ivy:Clickers;
    bane:Clickers;
    Harley_Quinn:Clickers;

    constructor(){
        this.clicker = new Clicker("Clicker",0,0,0,0,0,this)
        this.cookie = new Cookie(200,200, this);
        this.alfred = new Clickers("Alfred",(1/60),20,0,100,0,this);
        this.batman = new Clickers("Batman",(5/60),100,0,120,0,this);
        this.riddler = new Clickers("Riddler",(25/60),1000,0,140,0,this);
        this.poison_ivy = new Clickers("Poison Ivy",(50/60),10000,0,160,0,this);
        this.bane = new Clickers("Bane",(75/60),25000,0,180,0,this);
        this.Harley_Quinn = new Clickers("Harley Quinn",(100/60),50000,0,200,0,this);
        

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

