const problem086 = () => {
	let l = 2;
	let count = 0;
	const target = 1e06;
	while (count < target) {
		l += 1;
		for (let wh = 3; wh <= 2 * l; wh += 1) {
			// eslint-disable-next-line unicorn/prefer-modern-math-apis
			const sqrt = Math.sqrt((wh * wh) + (l * l)); // Weirdly, Math.hypot(wh, l) gives wrong answers in some cases
			if (sqrt % 1 === 0) {
				count += (wh <= l) ? wh / 2 : 1 + (l - ((wh + 1) / 2));
			}
		}
	}

	return `Problem 86 solution is: ${l}`;
};

export default problem086;
