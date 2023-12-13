import Request from "./Request.js";
import Game from "./Game.js";

var backendurl = "http:159.89.0.237//:2700";
var endpoint = "/api"


var req = new Request(backendurl + endpoint);

var gamecrt = document.getElementById("gamecrt");
var joingame = document.getElementById("joingame");



var canvas = document.getElementById("pongCanvas");

var game = new Game(canvas, backendurl + endpoint);

joingame.addEventListener("click", function(){

	var gameid = document.getElementById("gameidj");
	var gamepass = document.getElementById("passwordj");
	var player = document.getElementById("player");
	var playerpass = document.getElementById("ppass");

    var integer_val = parseInt(player.value);
    game.join_game(gameid.value, gamepass.value, integer_val, playerpass.value).then(function(data){

        console.log(data);
        game.set_parameters(gameid.value, gamepass.value, integer_val, playerpass.value);
            
    });
 
});


gamecrt.addEventListener("click", function(){
	
	var gamepass = document.getElementById("password");
	var gameid = document.getElementById("gameid");
	var p1pass = document.getElementById("p1pass");
	var p2pass = document.getElementById("p2pass");

	var data = {gameid: gameid.value, password: gamepass.value, private: true, 
		password_p1: p1pass.value, password_p2: p2pass.value
	};
	req.post("/new_game", data).then(function(response){
		if(response.ok){
			return response.json();
		}else{
			throw new Error("HTTP error " + response.status);
		}
	}).then(function(data){
		console.log(data);
	}).catch(function(error){
		console.log(error);
	});
});


