export default class Bingo {
	constructor() {
		this.list = {"poule":0,"chassedeau":0};
		this.CountSong = 0;

		function Count(obj) {
			var nbr = 0;
			for (var property in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, property)) {
						nbr++;
				}
			}
			return (nbr);
		}
		this.listSize = Count(this.list);
		console.log("List Size : " + this.listSize);
		this.audio = {};
	}

	start() {
			if (this.CountSong >= this.listSize) 
				return alert('Tous les sons ont été joué !');
			this.buttonStart = document.getElementById("randomStart").style.display = 'none';
			this.buttonStop = document.getElementById("randomStop").style.display = 'block';	
			const randomSong = Object.keys(this.list)[Math.floor(Math.random() * this.listSize)];
			console.log(randomSong);
			if (randomSong === 'poule') {
				if (this.list.poule > 0) {
					this.start();
				} else {
					this.list.poule += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			} else if (randomSong === 'chassedeau') {
				if (this.list.chassedeau > 0) {
					this.start();
				} else {
					this.list.chassedeau += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			}
			this.audio = new Audio(`./song/${randomSong}.mp3`);
			this.audio.play();
			this.audio.addEventListener("ended", function() {
				this.stop();
			});
		}

		stop() {
			this.audio.pause();
			this.audio.currentTime = 0.0;
			this.buttonWait = document.getElementById("wait").style.display = 'block';
			this.buttonStop = document.getElementById("randomStop").style.display = 'none';
			this.timer();
			setTimeout(() => {
				this.buttonStart = document.getElementById("randomStart").style.display = 'block';
				this.buttonWait = document.getElementById("wait").style.display = 'none';
			}, 10000);
				console.log("Ended");
		}

		timer() {
			setTimeout(function() {

				var time = 10;
				var initialOffset = '440';
				var i = 1
			
				$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
				this.timer = document.getElementById("timer").style.display = 'block';
			
				var interval = setInterval(function() {
						$('h2').text(i);
						if (i == time) {
							clearInterval(interval);
							this.timer = document.getElementById("timer").style.display = 'none';
							i = 1;
							return;
						}
						$('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
						i++;  
				}, 1000);
			}, 0)
		}
}