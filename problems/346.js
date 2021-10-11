export default () => {
	const limit = 1e12;
	const d = new Set();
	let b = 2;
	let b2 = b * (b + 1) + 1;
	let s = 1n;
	for (;;) {
		let n = b2;
		for (;;) {
			if (!d.has(n)) {
				d.add(n);
				s += BigInt(n);
			}

			n = b * n + 1;
			if (n >= limit) break;
		}

		b += 1;
		b2 = b * (b + 1) + 1;
		if (b2 >= limit) break;
	}

	return `Problem 346 solution is: ${s}`;
};
