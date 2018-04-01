module.exports = () => {
	let d = [1];
	let n = [2];

	for (let i = 2; i < 101; i += 1) {
		const c = (i % 3 === 0) ? 2 * (i / 3) : 1;
		[d, n] = [n, add(multiply(n, c), d)];
	}
	return console.log(`Problem 65 solution is: ${n.reduce((a, b) => a + b)}`);
};

function multiply(a, b) {
	let mul = [0];
	for (let i = 0; i < b; i += 1) {
		mul = add(mul, a);
	}
	return mul;
}

function add(a, b) {
	while (a.length < b.length) a.unshift(0);
	while (a.length > b.length) b.unshift(0);
	let c = 0;
	const sum = [];
	for (let i = a.length - 1; i > -1; i -= 1) {
		let s = a[i] + b[i] + c;
		if (s > 9) {
			s -= 10;
			c = 1;
		} else {
			c = 0;
		}
		sum.unshift(s);
	}
	if (c) sum.unshift(c);
	return sum;
}
