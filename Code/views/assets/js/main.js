let list = {"poule":0,"chassedeau":0};
let CountSong = 0;

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
	if (CountSong >= listSize) 
		return alert('Tous les sons ont été joué !');
	let buttonStart = document.getElementById("randomStart").style.display = 'none';
	let buttonStop = document.getElementById("randomStop").style.display = 'block';	
	const randomSong = Object.keys(list)[Math.floor(Math.random() * listSize)];
	console.log(randomSong);
	if (randomSong === 'poule') {
		if (list.poule > 0) {
			console.log('Reload');
			start();
		} else {
			list.poule += 1;
			CountSong += 1;
			console.log(CountSong);
		}
	} else if (randomSong === 'chassedeau') {
		if (list.chassedeau > 0) {
			console.log('Reload')
			start();
		} else {
			list.chassedeau += 1;
			CountSong += 1;
			console.log(CountSong);
		}
	}
	audio = new Audio(`./assets/song/${randomSong}.mp3`);
	audio.play();
	audio.addEventListener("ended", function() {
		stop();
	});
}

function stop() {
	audio.pause();
	audio.currentTime = 0.0;
	let buttonWait = document.getElementById("wait").style.display = 'block';
	let buttonStop = document.getElementById("randomStop").style.display = 'none';
	timer();
	setTimeout(() => {
		buttonStart = document.getElementById("randomStart").style.display = 'block';
		buttonWait = document.getElementById("wait").style.display = 'none';
	}, 10000);
		console.log("Ended");
}

function timer() {
	setTimeout(function() {

		var time = 10;
		var initialOffset = '440';
		var i = 1
	
		$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
		let timer = document.getElementById("timer").style.display = 'block';
	
		var interval = setInterval(function() {
				$('h2').text(i);
				if (i == time) {
					clearInterval(interval);
					timer = document.getElementById("timer").style.display = 'none';
					i = 1;
					return;
				}
				$('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
				i++;  
		}, 1000);
	}, 0)
}

$("#randomStart").click(function() {
	start();
});

$("#randomStop").click(function() {
	stop();
});