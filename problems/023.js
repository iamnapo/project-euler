export default () => {
	const canBeWritten = new Set();
	const abundants = Array.from({ length: 28_123 }, (_, ind) => ind).filter(isAbundant);
	for (let i = 12; i < 28_123; i += 1) {
		for (const num of abundants) {
			if (num >= i) break;
			if (isAbundant(i - num)) {
				canBeWritten.add(i);
				break;
			}
		}
	}

	return `Problem 23 solution is: ${Array.from({ length: 28_123 }, (_, ind) => ind).filter((a) => !canBeWritten.has(a)).reduce((a, b) => a + b)}`;
};

function isAbundant(n) {
	if (n === 0) return false;

	let sum = 1;
	const sqrt = n ** 0.5; // Euler said that
	for (let i = 2; i <= sqrt; i += 1) {
		if (n % i === 0) sum += i + (i ** 2 === n ? 0 : n / i);
	}

	return sum > n;
}
