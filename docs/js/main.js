var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Batman = (function () {
    function Batman(x, y, g) {
        var _this = this;
        this.Xpos = x;
        this.Ypos = y;
        this.game = g;
        this.batman = document.createElement("cookie");
        document.body.appendChild(this.batman);
        this.batman.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        this.move();
    }
    Batman.prototype.onMouseClick = function (event) {
        this.game.score += 1;
    };
    Batman.prototype.move = function () {
        this.batman.style.transform = "translate(" + this.Xpos + "px, " + this.Ypos + "px)";
    };
    return Batman;
}());
var Clicker = (function () {
    function Clicker(name, clicksPS, cost, posX, posY, g) {
        this.amount = 0;
        this.game = g;
    }
    Clicker.prototype.onMouseClick = function (event) {
        if (this.game.score >= this.cost) {
            this.game.score -= this.cost;
            this.cost *= 1.2;
            this.amount += 1;
            this.game.clicksPerSecond += this.clicksPS;
            document.getElementById(this.name).innerHTML = "[" + this.amount + "] " + this.name.toUpperCase() + " [" + Math.floor(this.cost) + "]";
        }
        else {
            alert(this.name + " costs " + Math.floor(this.cost) + " " + "batmans");
        }
    };
    Clicker.prototype.move = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Clicker;
}());
var Clickers = (function (_super) {
    __extends(Clickers, _super);
    function Clickers(name, clicksPS, cost, x, y, g) {
        var _this = _super.call(this, name, clicksPS, cost, x, y, g) || this;
        _this.clicksPS = clicksPS;
        _this.cost = cost;
        _this.posX = x;
        _this.posY = y;
        _this.game = g;
        _this.name = name;
        _this.div = document.createElement('li');
        _this.div.setAttribute("id", _this.name);
        document.getElementById("menu").appendChild(_this.div);
        _this.div.innerHTML = _this.name.toUpperCase() + " [" + Math.floor(_this.cost) + "]";
        _this.div.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        _this.move();
        return _this;
    }
    return Clickers;
}(Clicker));
var Game = (function () {
    function Game() {
        var _this = this;
        this.clicksPerSecond = 0;
        this.score = 1000000000000;
        this.amount = 0;
        this.cookie = new Batman(200, 200, this);
        this.clicker = new Clicker("Clicker", 0, 0, 0, 0, this);
        this.alfred = new Clickers("Alfred", (1 / 60), 20, 0, 100, this);
        this.batman = new Clickers("Batman", (5 / 60), 100, 0, 120, this);
        this.riddler = new Clickers("Riddler", (25 / 60), 1000, 0, 140, this);
        this.poison_ivy = new Clickers("Poison Ivy", (50 / 60), 10000, 0, 160, this);
        this.bane = new Clickers("Bane", (75 / 60), 25000, 0, 180, this);
        this.Harley_Quinn = new Clickers("Harley Quinn", (100 / 60), 50000, 0, 200, this);
        requestAnimationFrame(function () { return _this.gameloop(); });
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        this.updateScore();
        this.updateClicksPerSecond();
        this.updateClicks();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.updateScore = function () {
        document.getElementById("score").innerHTML = "Batmans: " + Math.floor(this.score);
    };
    Game.prototype.updateClicksPerSecond = function () {
        document.getElementById("clicksPerSecond").innerHTML = "Batmans per second:  " + Math.floor((this.clicksPerSecond * 60));
    };
    Game.prototype.updateClicks = function () {
        this.score += this.clicksPerSecond;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Startscren();
});
var Startscren = (function () {
    function Startscren() {
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "overlay");
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");
        var inside = document.createElement("div");
        this.background.appendChild(inside);
        inside.setAttribute("id", "startScreenInside");
        inside.innerHTML = "<h3>Batman Basher</h3>";
        var button = document.createElement("button");
        inside.appendChild(button);
        button.setAttribute("id", "button");
        button.innerHTML = "Start Game";
        button.addEventListener("click", this.startGame);
    }
    Startscren.prototype.startGame = function () {
        document.getElementById("startScreen").remove();
        document.getElementById("overlay").remove();
        new Game();
    };
    return Startscren;
}());
//# sourceMappingURL=main.js.map
