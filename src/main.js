import Engine from "./engine"

let list = ["poule.mp3", "chassedeau.mp3"];

let engine = new Engine;

$("#randomStart").click(function() {
	var randomSong = list[Math.floor(Math.random() * list.length)];
	var audio = new Audio(`./song/${randomSong}`);
	
	audio.play();
	audio.addEventListener("ended", function(){
		audio.currentTime = 0;
		console.log("Ended");
		location.reload();
	});
	$("#randomStart").replaceWith('<button onclick="location.reload()" class="button btn btn-danger">Stop</button>');
});
