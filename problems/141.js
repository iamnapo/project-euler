export default () => {
	const limit = 1e12;
	const progressiveSquares = [];

	for (let a = 2; a < 10_000; a += 1) {
		for (let b = 1; b < a; b += 1) {
			if ((a ** 3) * 2 * (b ** 2) >= limit) break;
			if (gcd(a, b) === 1) {
				for (let c = 1; ; c += 1) {
					const n = ((a ** 3) * b * c * c) + (c * b * b);
					if (n >= limit) break;
					if (isSquare(n) && !progressiveSquares.includes(n)) progressiveSquares.push(n);
				}
			}
		}
	}

	return `Problem 141 solution is: ${progressiveSquares.reduce((a, b) => a + b, 0)}`;
};

function isSquare(n) {
	const tmp = Math.trunc(Math.sqrt(n));
	return tmp ** 2 === n;
}

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}
