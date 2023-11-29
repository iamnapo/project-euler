const problem073 = () => {
	const limit = 12_000;
	let [a, b, c, d] = [1, 3, 4000, 11_999];
	let result = 0;

	while (!(c === 1 && d === 2)) {
		result += 1;
		const k = Math.trunc((limit + b) / d);
		const e = (k * c) - a;
		const f = (k * d) - b;
		[a, b, c, d] = [c, d, e, f];
	}

	return `Problem 73 solution is: ${result}`;
};

export default problem073;
