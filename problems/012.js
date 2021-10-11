export default () => {
	let triangle = 1;
	for (let i = 2; ; i += 1) {
		triangle += i;
		if (countdivisors(triangle) > 500) {
			return `Problem 12 solution is: ${triangle}`;
		}
	}
};

function countdivisors(num) {
	let count = 0;
	const sqrt = num ** 0.5; // Euler said that
	for (let i = 0; i < sqrt; i += 1) {
		if (num % i === 0) {
			count += 2;
		}
	}

	return count;
}
