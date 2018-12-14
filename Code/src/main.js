import Engine from "./engine"
import Bingo from "./bingo";

let bingo = new Bingo;
let engine = new Engine;

$("#randomStart").click(function() {
	bingo.start();
});

$("#randomStop").click(function() {
	bingo.stop();
});