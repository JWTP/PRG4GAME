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
var Clicker = (function () {
    function Clicker(name, clicksPS, cost, posX, posY, amount, g) {
        this.game = g;
    }
    Clicker.prototype.onMouseClick = function (event) {
        if (this.game.score >= this.cost) {
            this.game.score -= this.cost;
            this.cost *= 1.2;
            this.amount += 1;
            this.game.clicksPerSecond += this.clicksPS;
            document.getElementById(this.name).innerHTML = "[" + this.amount + "] " + this.name.toUpperCase();
            console.log(this.amount);
        }
        else {
            alert(this.name + " costs " + Math.floor(this.cost) + " " + "batman's");
        }
    };
    Clicker.prototype.move = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Clicker;
}());
var Clickers = (function (_super) {
    __extends(Clickers, _super);
    function Clickers(name, clicksPS, cost, x, y, amount, g) {
        var _this = _super.call(this, name, clicksPS, cost, x, y, amount, g) || this;
        _this.clicksPS = clicksPS;
        _this.cost = cost;
        _this.posX = x;
        _this.posY = y;
        _this.game = g;
        _this.name = name;
        _this.amount = amount;
        _this.div = document.createElement('li');
        _this.div.setAttribute("id", _this.name);
        document.getElementById("menu").appendChild(_this.div);
        _this.div.innerHTML = _this.name;
        _this.div.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        _this.move();
        return _this;
    }
    return Clickers;
}(Clicker));
var BatmanLogo = (function () {
    function BatmanLogo(x, y, g) {
        var _this = this;
        this.Xpos = x;
        this.Ypos = y;
        this.game = g;
        this.cookie = document.createElement("cookie");
        document.body.appendChild(this.cookie);
        this.cookie.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        this.move();
    }
    BatmanLogo.prototype.onMouseClick = function (event) {
        this.game.score += 1;
    };
    BatmanLogo.prototype.move = function () {
        this.cookie.style.transform = "translate(" + this.Xpos + "px, " + this.Ypos + "px)";
    };
    return BatmanLogo;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.clicksPerSecond = 0;
        this.score = 0;
        this.clicker = new Clicker("Clicker", 0, 0, 0, 0, 0, this);
        this.cookie = new BatmanLogo(200, 200, this);
        this.alfred = new Clickers("Alfred", (1 / 60), 20, 0, 100, 0, this);
        this.batman = new Clickers("Batman", (5 / 60), 100, 0, 120, 0, this);
        this.riddler = new Clickers("Riddler", (25 / 60), 1000, 0, 140, 0, this);
        this.poison_ivy = new Clickers("Poison Ivy", (50 / 60), 10000, 0, 160, 0, this);
        this.bane = new Clickers("Bane", (75 / 60), 25000, 0, 180, 0, this);
        this.Harley_Quinn = new Clickers("Harley Quinn", (100 / 60), 50000, 0, 200, 0, this);
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
        document.getElementById("score").innerHTML = "Batman's: " + Math.floor(this.score);
    };
    Game.prototype.updateClicksPerSecond = function () {
        document.getElementById("clicksPerSecond").innerHTML = "Batman's per second:  " + Math.floor((this.clicksPerSecond * 60));
    };
    Game.prototype.updateClicks = function () {
        this.score += this.clicksPerSecond;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map