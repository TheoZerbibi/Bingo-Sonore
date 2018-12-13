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

	bingo(nbr) {
		if (nbr <= 0) {
			if (this.CountSong >= this.listSize) 
				return alert('Tous les song ont était jouez !');
			this.buttonStart = document.getElementById("randomStart").style.display = 'none';
			this.buttonStop = document.getElementById("randomStop").style.display = 'block';	
			const randomSong = Object.keys(this.list)[Math.floor(Math.random() * this.listSize)];
			console.log(randomSong);
			if (randomSong === 'poule') {
				if (this.list.poule >= 1) {
					this.bingo();
				} else {
					this.list.poule += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			} else if (randomSong === 'chassedeau') {
				if (this.list.chassedeau >= 1) {
					this.bingo();
				} else {
					this.list.chassedeau += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			}
			this.audio = new Audio(`./song/${randomSong}.mp3`);
			this.audio.play();
		}
			this.audio.addEventListener("ended", function() {
				this.audio.currentTime = 0.0;
				this.buttonWait = document.getElementById("wait").style.display = 'block';
				setTimeout(() => {
					this.buttonStart = document.getElementById("randomStart").style.display = 'block';
					this.buttonStop = document.getElementById("randomStop").style.display = 'none';
				}, 80000);
			});
			if (nbr >= 1) {
			this.audio.pause();
			this.audio.currentTime = 0.0;
			this.buttonWait = document.getElementById("wait").style.display = 'block';
			this.buttonStop = document.getElementById("randomStop").style.display = 'none';
			setTimeout(() => {
				this.buttonStart = document.getElementById("randomStart").style.display = 'block';
				this.buttonWait = document.getElementById("wait").style.display = 'none';
			}, 8000);
				console.log("Ended");
				nbr = 0;
			}
	}
}