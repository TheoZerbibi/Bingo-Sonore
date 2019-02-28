const fs = require('fs')
let list = ["poule","chassedeau","cheval"/*,"chevre","vache","chien", "chat", "pluie","oiseau","eau","ane","marteau","scie","moto","train","avion","enfant","rire","pleure","cloche"*/];
let CountSong = 0;
let Song = new Map();

function Count(obj) {
	var nbr = 0;
	for (var property in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, property)) {
				nbr++;
		}
	}
	return (nbr);
}

let listSize = Count(list);
console.log("List Size : " + listSize);
let audio = {};

function start() {
	if (CountSong >= listSize) {
		fs.readFile('./songlist.txt', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			}
			console.log(data);
			document.getElementById('SongList').innerHTML = data;
			fs.writeFile('./songlist.txt', ``, (err) => {
				if (err) {
					return console.log(err);
				}
			});
		});
		document.getElementById("randomStart").style.display = 'none';
		document.getElementById("finish").style.display = 'block';
		document.getElementById("SongList").style.display = 'block';
		console.log(Song);

		// document.write(JSON.stringify(Song));
		return ;
	}

	const randomSong = list[Math.floor(Math.random() * listSize)];

	if (Song.get(randomSong)) {
		start();
		return ;
	}
	CountSong++;
	Song.set(randomSong, CountSong);
	console.log(Song);
	fs.appendFile('./songlist.txt', `${CountSong} - ${randomSong}\n`, (err) => {
		if (err) {
			return console.log(err);
		}
	});
	document.getElementById("randomStart").style.display = 'none';
	document.getElementById("randomStop").style.display = 'block';

	console.log(CountSong);
	console.log(randomSong);

	audio = new Audio(`./assets/song/${randomSong}.mp3`);
	audio.play();
	audio.addEventListener("ended", function() {
		stop();
	});
}

function stop() {
	audio.pause();
	audio.currentTime = 0.0;
	document.getElementById("wait").style.display = 'block';
	document.getElementById("randomStop").style.display = 'none';
	setTimeout(() => {
		document.getElementById("randomStart").style.display = 'block';
		document.getElementById("wait").style.display = 'none';
	}, 3000);
		console.log("Ended");
}

$("#randomStart").click(function() {
	start();
});

$("#randomStop").click(function() {
	stop();
});