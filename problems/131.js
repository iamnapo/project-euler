export default () => {
	let result = 0;
	for (let i = 1; i < 577; i += 1) {
		if (isPrime(((i + 1) ** 3) - (i ** 3))) {
			result += 1;
		}
	}

	return `Problem 131 solution is: ${result}`;
};

function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	if (n === 2) {
		return true;
	}
	if (n % 2 === 0) {
		return false;
	}
	if (n < 9) {
		return true;
	}
	if (n % 3 === 0) {
		return false;
	}
	let counter = 5;
	while ((counter * counter) <= n) {
		if (n % counter === 0) {
			return false;
		}
		if (n % (counter + 2) === 0) {
			return false;
		}
		counter += 6;
	}
	return true;
}
