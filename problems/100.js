export default () => {
	let [b, n] = [15, 21];
	while (n < 1e12) {
		[b, n] = [((3 * b) + (2 * n)) - 2, ((4 * b) + (3 * n)) - 3];
	}

	return `Problem 100 solution is: ${b}`;
};
