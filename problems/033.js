module.exports = () => {
	const pairs = [];
	for (let b = 2; b < 100; b += 1) {
		for (let a = 1; a < b; a += 1) {
			const pair = [a, b];
			if (isCurious(pair)) {
pairs.push(pair);
			}
		}
	}
	let num = 1;
	let den = 1;
	for (const pair of pairs) {
		num *= pair[0];
		den *= pair[1];
	}
	return console.log(`Problem 33 solution is: ${den / gcd(num, den)}`);
};

function isCurious(pair) {
	if (pair[0] % 10 === Math.floor(pair[1] / 10) && pair[0] % 10 !== 0) {
		return pair[0] / pair[1] === (Math.floor(pair[0] / 10)) / (pair[1] % 10);
	}
	return false;
}

function gcd(a, b) {
	if (b) {
		return gcd(b, a % b);
	}
	return Math.abs(a);
}
