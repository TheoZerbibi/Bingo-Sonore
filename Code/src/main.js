import Engine from "./engine"
const list = require("./list.json")
let engine = new Engine;

console.log(Object.keys(list));
function Count(obj) {
	var nbr = 0;
	for (var property in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, property)) {
				nbr++;
		}
	}
	return (nbr);
}

var listSize = Count(list);
console.log("List Size : " + listSize);

$("#randomStart").click(function() {

	var randomSong = Object.keys(list)[Math.floor(Math.random() * listSize)];
	console.log(randomSong);

	/*var audio = new Audio(`./song/${randomSong}.mp3`);
	audio.play();
	audio.addEventListener("ended", function(){
		audio.currentTime = 0;
		console.log("Ended");
		location.reload();
	});
	$("#randomStart").replaceWith('<button onclick="location.reload()" class="button btn btn-danger">Stop</button>');*/
});