export default () => {
	let sum = 1;
	for (let i = 3; i < 1002; i += 2) {
		sum += i ** 2; // Top right
		sum += (i ** 2) - (1 * (i - 1)); // Top left
		sum += (i ** 2) - (2 * (i - 1)); // Bottom left
		sum += (i ** 2) - (3 * (i - 1)); // Bottom right
	}

	return `Problem 28 solution is: ${sum}`;
};
