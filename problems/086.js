module.exports = () => {
	let l = 2;
	let count = 0;
	const target = 1e06;
	while (count < target) {
		l += 1;
		for (let wh = 3; wh <= 2 * l; wh += 1) {
			const sqrt = Math.sqrt((wh * wh) + (l * l));
			if (sqrt === Math.trunc(sqrt)) {
				count += (wh <= l) ? wh / 2 : 1 + (l - ((wh + 1) / 2));
			}
		}
	}
	return console.log(`Problem 86 solution is: ${l}`);
};
