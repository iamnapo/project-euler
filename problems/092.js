module.exports = () => {
	let result = 0;
	for (let i = 2; i < 1e07; i += 1) {
		let tmp = i;
		for (;;) {
			if (tmp === 89) {
				result += 1;
			}
			if ([1, 89].includes(tmp)) {
				break;
			}
			tmp = squareDigitSum(tmp);
		}
	}
	return console.log(`Problem 92 solution is: ${result}`);
};

function squareDigitSum(number) {
	const tmp = number.toString().split("").map((a) => Number.parseInt(a, 10) ** 2);
	return tmp.reduce((a, b) => a + b);
}
