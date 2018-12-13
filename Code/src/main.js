import Engine from "./engine"
import Bingo from "./bingo";

let bingo = new Bingo;
let engine = new Engine;
let nbr = 0;

$("#randomStart").click(function() {
	bingo.bingo(nbr);
});

$("#randomStop").click(function() {
	nbr += 1;
	bingo.bingo(nbr);
	nbr = 0;
});