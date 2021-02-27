export default () => {
	let result = 0;

	for (let k = 1; k < 16; k += 1) {
		result = fibonacci(2 * k) * fibonacci((2 * k) + 1);
	}

	return `Problem 137 solution is: ${Math.trunc(result)}`;
};

function fibonacci(n) {
	const tmp = Math.sqrt(5);
	return ((((1 + tmp) / 2) ** n) - (((1 - tmp) / 2) ** n)) / tmp;
}
