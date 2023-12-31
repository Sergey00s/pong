import Request from "./Request.js";
import Game from "./Game.js";

var backendurl = "http://pongapi.ftpong.duckdns.org";
var endpoint = "/api"


var req = new Request(backendurl + endpoint);


var canvas = document.getElementById("pongCanvas");

var game = new Game(canvas, backendurl + endpoint);

var queryString = window.location.search;
var queryString = queryString.substring(1);
var serachParams = new URLSearchParams(queryString);

const gameid = serachParams.get("gameid");
const gamepass = serachParams.get("gamepass");
const player = serachParams.get("player");
const playerpass = serachParams.get("playerpass");

console.log(gameid);
console.log(gamepass);
console.log(player);
console.log(playerpass);



if (gameid != null && gamepass != null && player != null && playerpass != null) {
	game.set_parameters(gameid, gamepass, player, playerpass);
	game.join_game(gameid, gamepass, player, playerpass);

} else {
	window.location.href = "error.html";
}
