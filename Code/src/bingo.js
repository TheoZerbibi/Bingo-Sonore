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
	}

	start() {
		this.buttonStart = document.getElementById("randomStart").style.display = 'none';
		this.buttonStop = document.getElementById("randomStop").style.display = 'block';
		if (this.CountSong >= this.listSize) {
			alert('Tous les song ont était jouez !');
		} else {
			const randomSong = Object.keys(this.list)[Math.floor(Math.random() * this.listSize)];
			console.log(randomSong);
			if (randomSong === 'poule') {
				if (this.list.poule >= 1) {
					this.start();
				} else {
					this.list.poule += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			} else if (randomSong === 'chassedeau') {
				if (this.list.chassedeau >= 1) {
					this.start();
				} else {
					this.list.chassedeau += 1;
					this.CountSong += 1;
					console.log(this.CountSong);
				}
			}

			const audio = new Audio(`./song/${randomSong}.mp3`);
			audio.play();
			audio.addEventListener("ended", function(){
				this.stop(audio);
			});
		}
	}

	reset() {

	}

		stop(audio) {
			audio.pause();
			console.log("Ended");
			this.buttonStart = document.getElementById("randomStart").style.display = 'block';
			this.buttonStop = document.getElementById("randomStop").style.display = 'none';	
		}
}