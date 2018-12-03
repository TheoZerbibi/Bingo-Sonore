import Engine from "./engine"
import Bingo from "./bingo";

let bingo = new Bingo;
let engine = new Engine;

$("#randomStart").click(function() {

	var randomSong = Object.keys(list)[Math.floor(Math.random() * listSize)];
	console.log(randomSong);
	if (randomSong === 'poule') {
		console.log('Poule');
		console.log(list.poule.nbr);
	} else if (randomSong === 'chassedeau') {
		console.log('Chassedeau');
		console.log(list.chassedeau.nbr);
	} else if (randomSong === 'test') {
		console.log('Test');
		console.log(list.test.nbr);
	}

	/*var audio = new Audio(`./song/${randomSong}.mp3`);
	audio.play();
	audio.addEventListener("ended", function(){
		audio.currentTime = 0;
		console.log("Ended");
		location.reload();
	});
	$("#randomStart").replaceWith('<button onclick="location.reload()" class="button btn btn-danger">Stop</button>');*/
});