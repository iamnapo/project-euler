module.exports = () => {
	const limit = 1_000_001;
	let n = limit;
	while (aa(n) < limit) {
		n += 2;
	}

	return console.log(`Problem 129 solution is: ${n}`);
};

function aa(n) {
	if (gcd(n, 10) !== 1) {
		return 0;
	}
	let x = 1;
	let k = 1;
	while (x !== 0) {
		x = ((x * 10) + 1) % n;
		k += 1;
	}
	return k;
}

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}
