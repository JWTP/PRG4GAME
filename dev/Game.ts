class Game{

    clicksPerSecond:number = 0;
    score: number = 0;
    cookie:Cookie;
    john:JohnTheClicker;
    batman:BatmanTheClicker;
    flash:FlashTheClicker;
    constructor(){
        this.cookie = new Cookie(200,200, this);
        this.john = new JohnTheClicker(0.015,19,0,400,this);
        this.batman = new BatmanTheClicker(0.05,99,200,465,this);
        this.flash = new FlashTheClicker(0.5,999,400,465,this);
        requestAnimationFrame(() => this.gameloop());
        
        console.log(this.clicksPerSecond)
    }

    gameloop(){
        requestAnimationFrame(() => this.gameloop())
        setInterval(this.renderScore());
        setInterval(this.renderClicksPerSecond());
        setInterval(this.updateClicks())
    }

    renderScore(){
        document.getElementById("score").innerHTML = "Score " + Math.floor(this.score);

    }
    renderClicksPerSecond(){
        document.getElementById("clicksPerSecond").innerHTML = "Auto clicker " + this.clicksPerSecond;
    }
    updateClicks(){
        this.score += this.clicksPerSecond
    }

}

