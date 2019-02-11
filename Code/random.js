const nbr = 54;
let size = 1;
let x = 1;
let result1, result2, result3, result4, result5;

console.log('Start');

while(x <= 60) {
	result1 = Math.floor(Math.random() * nbr);
	result2 = Math.floor(Math.random() * nbr);
	result3 = Math.floor(Math.random() * nbr);
	result4 = Math.floor(Math.random() * nbr);
	result5 = Math.floor(Math.random() * nbr);
	console.log(`${x} : ${result1} - ${result2} - ${result3} - ${result4} - ${result5}`);
	x++;
}