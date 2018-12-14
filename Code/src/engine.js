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
		this.backgroundImage = new Image(); 
		this.backgroundImage.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3246865/1360/906/m1/fpnw/wm1/ljjxrnajzgexcvyjh8mfwuk25vimoqepobo6pd9euhe8l26bpeqb8cpi0amlcv34-.jpg?1505315766&s=a3c4396d54f7d13486bf7f4ebbfbf2ee';

		window.requestAnimationFrame(this.loop.bind(this));
	}

	loop() {
		let time = new Date().getTime();
		let dt = (time - this.lastTime) / 1000;

		this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);
		this.ctx[0].style.backgroundImage = 'url(this.backgroundImage) no-repeat center center fixed';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.lastTime = this.time;
		window.requestAnimationFrame(this.loop.bind(this));
	}
}