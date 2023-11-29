const problem016 = () => {
	const big = [2];
	let c = 0;
	for (let i = 1; i < 1000; i += 1) {
		for (let j = 0; j < big.length; j += 1) {
			big[j] = (2 * big[j]) + c;
			c = 0;
			while (big[j] > 9) {
				c += 1;
				big[j] -= 10;
			}
		}

		while (c !== 0) {
			const j = big.push(c);
			c = 0;
			while (big[j] > 9) {
				c += 1;
				big[j] -= 10;
			}
		}
	}

	return `Problem 16 solution is: ${big.reduce((a, b) => Number.parseInt(a, 10) + Number.parseInt(b, 10))}`;
};

export default problem016;
