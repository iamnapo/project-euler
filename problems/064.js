export default () => {
	let result = 0;
	for (let n = 2; n < 10_001; n += 1) {
		const limit = Math.trunc(Math.sqrt(n));
		if (limit ** 2 !== n) {
			let period = 0;
			let d = 1;
			let m = 0;
			let a = limit;
			do {
				m = (d * a) - m;
				d = (n - (m ** 2)) / d;
				a = Math.trunc((limit + m) / d);
				period += 1;
			} while (a !== 2 * limit);

			if (period % 2 === 1) {
				result += 1;
			}
		}
	}

	return `Problem 64 solution is: ${result}`;
};
