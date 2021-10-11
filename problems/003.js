export default () => {
	let factor;
	let start = 600_851_475_143;
	for (let i = 3; i < start + 1; i += 1) {
		if (start % i === 0 && isPrime(i)) {
			start /= i;
			factor = i;
		}
	}

	return `Problem 3 solution is: ${factor}`;
};

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}

	return number !== 1;
}
