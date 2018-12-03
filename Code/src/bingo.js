export default class Bingo {
	constructor() {
		this.list = {"poule":0,"chassedeau":0,"test":0};

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
		console.log("List Size : " + listSize);
	}

	start() {

	}

	reset() {

	}
}