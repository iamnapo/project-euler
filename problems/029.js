export default () => {
	const powers = new Set();
	for (let a = 2; a < 101; a += 1) {
		for (let b = 2; b < 101; b += 1) {
			powers.add(a ** b);
		}
	}
	return `Problem 29 solution is: ${powers.size}`;
};
