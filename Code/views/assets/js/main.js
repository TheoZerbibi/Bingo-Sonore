const fs = require('fs');

let list = ["ane","aspirateur","atchoum","avion","bouchon","camion","canard","chassedeau","chat","cheval","chevre",
	"chien","chips","clap","cloche","coca","cochon","craie","eau","elephant","enfant","feu","feuartifice","flute",
	"grenouille","guitare","lion","maracasses","marteau","moto","mouche","oiseau","orage","papier","pas","pendule",
	"piano","pleure","pluie","porte","poule","reveil","rire","ronflement","scie","sechecheveux","singe","tambour",
	"tirette","train","trompette","vache","vague","vaisselle"];
let CountSong = 0;
let cache = null;
let Song = new Map();
let lock = 0;

function Count(obj) {
	var nbr = 0;
	for (var property in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, property)) {
				nbr++;
		}
	}

	return (nbr);
}

fs.writeFile('./songlist.txt', ``, (err) => {
	if (err) {
		return console.log(err);
	}
});

let listSize = Count(list);
console.log("List Size : " + listSize);
let audio = {};

function start() {
	if (CountSong >= listSize) {
		data();
		console.log(Song);
		return ;
	}

	const randomSong = list[Math.floor(Math.random() * listSize)];

	if (Song.get(randomSong)) {
		start();
		return ;
	}

	document.getElementById("randomStart").style.display = 'none';
	document.getElementById("replay").style.display = 'none';
	document.getElementById("wait").style.display = 'block';
	setTimeout(() => {
		if (document.getElementById("wait").style.display === 'none') 
			return ;
		document.getElementById("randomStop").style.display = 'block';
		document.getElementById("wait").style.display = 'none';
	}, 1500);

	CountSong++;
	Song.set(randomSong, CountSong);
	console.log(Song);

	fs.appendFile('./songlist.txt', `${CountSong} - ${randomSong}<br>`, (err) => {
		if (err) {
			return console.log(err);
		}
	});

	console.log(CountSong);
	console.log(randomSong);

	cache = randomSong;
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
		if (document.getElementById("wait").style.display === 'none') 
			return ;
		document.getElementById("randomStart").style.display = 'block';
		document.getElementById("wait").style.display = 'none';
		if (CountSong >= 1) {
			document.getElementById("replay").style.display = 'block';
		}
	}, 3000);

		console.log("Ended");
}

function data() {
	audio.pause();
	audio.currentTime = 0.0;

	lock = 1;

	document.getElementById("randomStop").style.display = 'none';
	document.getElementById("randomStart").style.display = 'none';
	document.getElementById("buttonBingo").style.display = 'none';
	document.getElementById("wait").style.display = 'none';
	document.getElementById("list").style.display = 'none';
	document.getElementById("continue").style.display = 'block';
	document.getElementById("end").style.display = 'block';
	document.getElementById("SongList").style.visibility = 'visible';

	fs.readFile('./songlist.txt', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		document.getElementById('SongList').innerHTML = data.bold();
	});

}

function bingo() {
	if (CountSong < 1) {
		return alert("Impossible, au-moins 1 son doit être joué.");
	}

	data();
}

function cont() {
	document.getElementById("randomStart").style.display = 'block';
	document.getElementById("buttonBingo").style.display = 'block';
	document.getElementById("list").style.display = 'block';
	document.getElementById("continue").style.display = 'none';
	document.getElementById("end").style.display = 'none';
	document.getElementById("SongList").style.visibility = 'hidden';

	lock = 0;
}

function end() {
	fs.writeFile('./songlist.txt', ``, (err) => {
		if (err) {
			return console.log(err);
		}
	});

	document.getElementById("randomStart").style.display = 'block';
	document.getElementById("buttonBingo").style.display = 'block';
	document.getElementById("list").style.display = 'block';
	document.getElementById("continue").style.display = 'none';
	document.getElementById("end").style.display = 'none';
	document.getElementById("replay").style.display = 'none';
	document.getElementById("SongList").style.visibility = 'hidden';

	CountSong = 0;
	lock = 0;

	console.log("Restart");
}

function replay() {
	document.getElementById("randomStart").style.display = 'none';
	document.getElementById("replay").style.display = 'none';
	document.getElementById("wait").style.display = 'block';
	setTimeout(() => {
		if (document.getElementById("wait").style.display === 'none') 
			return ;
		document.getElementById("randomStop").style.display = 'block';
		document.getElementById("wait").style.display = 'none';
	}, 1500);
	audio = new Audio(`./assets/song/${cache}.mp3`);
	audio.play();
	audio.addEventListener("ended", function() {
		stop();
	});
}

$("#randomStart").click(function() {
	start();
});

$("#randomStop").click(function() {
	stop();
});

$("#buttonBingo").click(function() {
	bingo();
});

$("#continue").click(function() {
	cont();
});

$("#end").click(function() {
	end();
});

$("#replay").click(function() {
	replay();
});

$("#list").mouseover(function() {
	document.getElementById("SongList").style.top = "1%";
	document.getElementById("SongList").style.left = "1%";
	document.getElementById("list").style.display = 'none';

	fs.readFile('./songlist.txt', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		document.getElementById('SongList').innerHTML = data.bold();
	});

	document.getElementById('SongList').style.visibility =' visible';
});

$("#SongList").mouseout(function() {
	if (lock === 0) {
		document.getElementById("list").style.display = 'block';
		document.getElementById("SongList").style.top = "25%";
		document.getElementById("SongList").style.left = "45%";
		document.getElementById("SongList").style.visibility = 'hidden';
	}
});
