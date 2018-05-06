module.exports = () => {
	let result = 0;

	for (let i = 0; i < 12; i++) {
		result += fibonacci(((i + 1) * 6) + 3) / 2;
	}

	return console.log(`Problem 138 solution is: ${Math.ceil(result)}`);
};

function fibonacci(n) {
	const tmp = Math.sqrt(5);
	return ((((1 + tmp) / 2) ** n) - (((1 - tmp) / 2) ** n)) / tmp;
}
