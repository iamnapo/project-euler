export default () => {
	let result = 0;
	for (let a = 99; a > 0; a -= 1) {
		for (let b = 99; b > 0; b -= 1) {
			if (9 * b * Math.ceil(Math.log10(a + 1)) < result) return `Problem 56 solution is: ${result}`;
			let tmp = [1];
			for (let i = 0; i < b; i += 1) tmp = multiply(tmp, a);
			tmp = tmp.reduce((i, j) => i + j);
			if (tmp > result) result = tmp;
		}
	}

	return null;
};

function multiply(a, b) {
	let mul = [0];
	for (let i = 0; i < b; i += 1) mul = add(mul, a);
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
