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
var BatmanTheClicker = (function () {
    function BatmanTheClicker(clicksPS, cost, x, y, g) {
        var _this = this;
        this.clicksPerSecond = clicksPS;
        this.costBatman = cost;
        this.posX = x;
        this.posY = y;
        this.game = g;
        this.batman = document.createElement('batman');
        document.body.appendChild(this.batman);
        this.batman.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        this.move();
    }
    BatmanTheClicker.prototype.onMouseClick = function (event) {
        if (this.game.score > this.costBatman) {
            this.game.score -= this.costBatman;
            this.costBatman += 50;
            this.game.clicksPerSecond += this.clicksPerSecond;
        }
        else {
            alert("Batman kost " + this.costBatman);
        }
    };
    BatmanTheClicker.prototype.move = function () {
        this.batman.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return BatmanTheClicker;
}());
var Clicker = (function () {
    function Clicker(clicksPS, cost, posX, posY) {
    }
    return Clicker;
}());
var Cookie = (function () {
    function Cookie(x, y, g) {
        var _this = this;
        this.Xpos = x;
        this.Ypos = y;
        this.game = g;
        this.cookie = document.createElement("cookie");
        document.body.appendChild(this.cookie);
        this.cookie.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        this.move();
    }
    Cookie.prototype.onMouseClick = function (event) {
        console.log(this.game.score);
        this.game.score += 1;
    };
    Cookie.prototype.move = function () {
        this.cookie.style.transform = "translate(" + this.Xpos + "px, " + this.Ypos + "px)";
    };
    return Cookie;
}());
var FlashTheClicker = (function (_super) {
    __extends(FlashTheClicker, _super);
    function FlashTheClicker(clicksPS, cost, x, y, g) {
        var _this = _super.call(this, clicksPS, cost, x, y) || this;
        _this.clicksPS = clicksPS;
        _this.cost = cost;
        _this.posX = x;
        _this.posY = y;
        _this.game = g;
        _this.flash = document.createElement('flash');
        document.body.appendChild(_this.flash);
        _this.flash.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        _this.move();
        return _this;
    }
    FlashTheClicker.prototype.onMouseClick = function (event) {
        if (this.game.score > this.cost) {
            this.game.score -= this.cost;
            this.cost += 250;
            this.game.clicksPerSecond += this.clicksPS;
        }
        else {
            alert("the Flash kost " + this.cost);
        }
    };
    FlashTheClicker.prototype.move = function () {
        this.flash.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return FlashTheClicker;
}(Clicker));
var Game = (function () {
    function Game() {
        var _this = this;
        this.clicksPerSecond = 0;
        this.score = 0;
        this.cookie = new Cookie(200, 200, this);
        this.john = new JohnTheClicker(0.015, 19, 0, 400, this);
        this.batman = new BatmanTheClicker(0.05, 99, 200, 465, this);
        this.flash = new FlashTheClicker(0.5, 999, 400, 465, this);
        requestAnimationFrame(function () { return _this.gameloop(); });
        console.log(this.clicksPerSecond);
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
        setInterval(this.renderScore());
        setInterval(this.renderClicksPerSecond());
        setInterval(this.updateClicks());
    };
    Game.prototype.renderScore = function () {
        document.getElementById("score").innerHTML = "Score " + Math.floor(this.score);
    };
    Game.prototype.renderClicksPerSecond = function () {
        document.getElementById("clicksPerSecond").innerHTML = "Auto clicker " + this.clicksPerSecond;
    };
    Game.prototype.updateClicks = function () {
        this.score += this.clicksPerSecond;
    };
    return Game;
}());
var JohnTheClicker = (function (_super) {
    __extends(JohnTheClicker, _super);
    function JohnTheClicker(clicksPS, cost, x, y, g) {
        var _this = _super.call(this, clicksPS, cost, x, y) || this;
        _this.clicksPS = clicksPS;
        _this.cost = cost;
        _this.posX = x;
        _this.posY = y;
        _this.game = g;
        _this.john = document.createElement('john');
        document.body.appendChild(_this.john);
        _this.john.addEventListener("click", function (event) { return _this.onMouseClick(event); });
        _this.move();
        return _this;
    }
    JohnTheClicker.prototype.onMouseClick = function (event) {
        if (this.game.score > this.cost) {
            this.game.score -= this.cost;
            this.cost += 10;
            this.game.clicksPerSecond += this.clicksPS;
        }
        else {
            alert("john kost " + this.cost);
        }
    };
    JohnTheClicker.prototype.move = function () {
        this.john.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return JohnTheClicker;
}(Clicker));
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map