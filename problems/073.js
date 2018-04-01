module.exports = () => {
	const limit = 12000;
	let [a, b, c, d] = [1, 3, 4000, 11999];
	let result = 0;

	while (!(c === 1 && d === 2)) {
		result += 1;
		const k = Math.trunc((limit + b) / d);
		const e = (k * c) - a;
		const f = (k * d) - b;
		[a, b, c, d] = [c, d, e, f];
	}

	return console.log(`Problem 73 solution is: ${result}`);
};
