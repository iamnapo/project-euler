export default () => {
	let sum = 0;
	for (let i = 1; i < 2_000_000; i += 1) {
		if (isPrime(i)) {
			sum += i;
		}
	}

	return `Problem 10 solution is: ${sum}`;
};

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}

	return number !== 1;
}
