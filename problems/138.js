const problem138 = () => {
	let result = 0;

	for (let i = 0; i < 12; i += 1) result += fibonacci(((i + 1) * 6) + 3) / 2;

	return `Problem 138 solution is: ${Math.ceil(result)}`;
};

function fibonacci(n) {
	let [a, b] = [0, 1];
	let sum = 0;
	while (n > 1) {
		sum = a + b;
		[a, b] = [b, sum];
		n -= 1;
	}

	return sum;
}

export default problem138;
