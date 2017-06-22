class Game{

    public clicksPerSecond:number = 0;
    public score: number = 0;
    public amount: number = 0;
    private cookie:Batman;
    private alfred:Clickers;
    private batman:Clickers;
    private riddler:Clickers;
    private clicker:Clicker;
    private poison_ivy:Clickers;
    private bane:Clickers;
    private Harley_Quinn:Clickers;
    private joker:Joker;

    constructor(){
        this.cookie         = new Batman(200,200, this);
        this.alfred         = new Clickers("Alfred",(1/60),20,0,100,this);
        this.batman         = new Clickers("Batman",(5/60),100,0,120,this);
        this.riddler        = new Clickers("Riddler",(25/60),1000,0,140,this);
        this.poison_ivy     = new Clickers("Poison Ivy",(50/60),10000,0,160,this);
        this.bane           = new Clickers("Bane",(75/60),25000,0,180,this);
        this.Harley_Quinn   = new Clickers("Harley Quinn",(100/60),50000,0,200,this);

        requestAnimationFrame(() => this.gameloop());
    }

    gameloop(){
        
        this.updateScore();
        this.updateClicksPerSecond();
        this.updateClicks();
        requestAnimationFrame(() => this.gameloop());
}

    updateScore(){
        document.getElementById("score").innerHTML = "Batmans: " + Math.floor(this.score);

    }
    updateClicksPerSecond(){
        document.getElementById("clicksPerSecond").innerHTML = "Batmans per second:  " + Math.floor((this.clicksPerSecond * 60));
    }
    updateClicks(){
        this.score += this.clicksPerSecond
    }

}

