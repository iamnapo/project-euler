export default () => {
	let result = 0;
	const limit = 1e8;
	let [x, y] = [1, 1];

	while (x + y < limit) {
		[x, y] = [(3 * x) + (4 * y), (2 * x) + (3 * y)];
		result += Math.trunc(limit / (x + y));
	}

	return `Problem 139 solution is: ${result}`;
};
