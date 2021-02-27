export default () => {
	let result = 0;
	for (let i = 1; i < 1001; i += 1) {
		let temp = i;
		for (let j = 1; j < i; j += 1) {
			temp *= i;
			temp %= 1e10;
		}
		result += temp;
		result %= 1e10;
	}
	return `Problem 48 solution is: ${result}`;
};
