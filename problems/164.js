const problem164 = () => {
	const digitSum = 9;
	const length = 20;
	const s = Math.max(0, Math.min(9 * 3, digitSum));
	let x = initCounts(s);
	for (let i = 0; i < length - 2; i += 1) x = nextCounts(x, s);
	return `Problem 164 solution is: ${x.flat().reduce((a, b) => a + b, 0)}`;
};

function initCounts(digitSum) {
	const x = Array.from({ length: 10 }, () => []);
	for (let i = 0; i < 10; i += 1) x[i] = Array.from({ length: 10 }, () => 0);
	for (let i = 1; i < 10; i += 1) {
		for (let j = 0; j < Math.min(9, digitSum - i) + 1; j += 1) x[i][j] = 1;
	}

	return x;
}

function nextCounts(x, digitSum) {
	const y = Array.from({ length: 10 }, () => []);
	for (let i = 0; i < 10; i += 1) y[i] = Array.from({ length: 10 }, () => 0);
	for (let i = 0; i < 10; i += 1) {
		for (let j = 0; j < Math.min(9, digitSum - i) + 1; j += 1) {
			for (let k = 0; k < Math.min(9, digitSum - i - j) + 1; k += 1) y[j][k] += x[i][j];
		}
	}

	return y;
}

export default problem164;
