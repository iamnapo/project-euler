module.exports = () => {
	let [x, y] = [2, 1];
	const limit = 1e09;
	let result = 0;

	for (;;) {
		let aTimes3 = (2 * x) - 1;
		let areaTimes3 = y * (x - 2);
		if (aTimes3 > limit) {
			break;
		}
		if (aTimes3 > 0 && areaTimes3 > 0 && aTimes3 % 3 === 0 && areaTimes3 % 3 === 0) {
			const a = aTimes3 / 3;
			result += (3 * a) + 1;
		}
		aTimes3 = (2 * x) + 1;
		areaTimes3 = y * (x + 2);
		if (aTimes3 > 0 && areaTimes3 > 0 && aTimes3 % 3 === 0 && areaTimes3 % 3 === 0) {
			const a = aTimes3 / 3;
			result += (3 * a) - 1;
		}
		[x, y] = [(2 * x) + (y * 3), (y * 2) + x];
	}
	return console.log(`Problem 94 solution is: ${result}`);
};
