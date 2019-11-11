module.exports = () => {
	let result = 50 * 50 * 3;
	for (let x = 1; x < 51; x += 1) {
		for (let y = 1; y < 51; y += 1) {
			const fact = gcd(x, y);
			result += Math.min(Math.trunc((y * fact) / x), Math.trunc(((50 - x) * fact) / y)) * 2;
		}
	}
	return console.log(`Problem 91 solution is: ${result}`);
};

function gcd(a, b) {
	let x;
	let y;
	[x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}
