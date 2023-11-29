const problem136 = () => {
	const n = 5e07;
	const solutions = Array.from({ length: n + 1 }, () => 0);
	for (let u = 1; u <= n; u += 1) {
		for (let v = 1; u * v <= n; v += 1) {
			if ((u + v) % 4 === 0 && 3 * v > u && (((3 * v) - u) % 4) === 0) {
				solutions[u * v] += 1;
			}
		}
	}

	return `Problem 136 solution is: ${solutions.filter((el) => el === 1).length}`;
};

export default problem136;
