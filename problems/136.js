module.exports = () => {
	const n = 5e07;
	const solutions = new Array(n + 1).fill(0);
	for (let u = 1; u <= n; u += 1) {
		for (let v = 1; u * v <= n; v += 1) {
			if ((u + v) % 4 === 0 && 3 * v > u && (((3 * v) - u) % 4) === 0) {
				solutions[u * v] += 1;
			}
		}
	}
	return console.log(`Problem 136 solution is: ${solutions.filter((el) => el === 1).length}`);
};
