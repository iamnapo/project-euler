export default () => {
	let result = 0;
	for (let i = 10; i < 2_540_161; i += 1) {
		let sum = 0;
		let tmp = i;
		while (tmp > 0) {
			const d = tmp % 10;
			tmp = Number.parseInt(tmp / 10, 10);
			sum += factorial(d);
		}

		if (sum === i) {
			result += i;
		}
	}

	return `Problem 34 solution is: ${result}`;
};

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}
