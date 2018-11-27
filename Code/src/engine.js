export default class Engine {
	constructor() {
		document.body.style.margin = "0px";
		document.body.style.overflow = "hidden";
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		document.body.appendChild(this.canvas);

		this.ctx = this.canvas.getContext("2d");

		this.lastTime = new Date().getTime();

		window.requestAnimationFrame(this.loop.bind(this));
	}

	loop() {
		let time = new Date().getTime();
		let dt = (time - this.lastTime) / 1000;

		this.ctx.fillStyle = "#303030";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.lastTime = this.time;
		window.requestAnimationFrame(this.loop.bind(this));
	}
}