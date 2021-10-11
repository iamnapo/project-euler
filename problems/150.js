export default () => {
	const s = [];
	const triangular = [];
	let tmp = 0;
	for (let i = 0; i < 500_500; i += 1) {
		tmp = ((615_949 * tmp) + 797_807) % 1_048_576;
		s.push(tmp - 524_288);
	}

	for (let i = 0; i < 1000; i += 1) {
		triangular.push(((i + 1) * i) / 2);
	}

	const rowSum = Array.from({ length: 1000 }, () => []);
	for (let i = 0; i < 1000; i += 1) {
		rowSum[i] = Array.from({ length: i + 2 }, () => 0);
		for (let j = 1; j <= i + 1; j += 1) {
			rowSum[i][j] = rowSum[i][j - 1] + s[triangular[i] + j - 1];
		}
	}

	let min = Number.MAX_VALUE;
	for (let i = 0; i < 1000; i += 1) {
		for (let j = 0; j <= i; j += 1) {
			let sum = 0;
			for (let k = i, n = 1; k < 1000; k += 1, n += 1) {
				sum += rowSum[k][j + n] - rowSum[k][j];
				if (sum < min) {
					min = sum;
				}
			}
		}
	}

	return `Problem 150 solution is: ${min}`;
};
