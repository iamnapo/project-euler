module.exports = () => {
	const s = [];
	const triangular = [];
	let tmp = 0;
	for (let i = 0; i < 500500; i += 1) {
		tmp = ((615949 * tmp) + 797807) % 1048576;
		s.push(tmp - 524288);
	}
	for (let i = 0; i < 1000; i += 1) {
		triangular.push(((i + 1) * i) / 2);
	}
	const rowSum = new Array(1000).fill([]);
	for (let i = 0; i < 1000; i += 1) {
		rowSum[i] = new Array(i + 2).fill(0);
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
	return console.log(`Problem 150 solution is: ${min}`);
};
