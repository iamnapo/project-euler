module.exports = () => {
	let sum = 1;
	for (let n = 2; n < 1e8; n += 4) {
		if (!isPrime(n / 2 + 2)) continue;
		let shouldInclude = true;
		const sqrt = n ** 0.5;
		for (let i = 1; i <= sqrt; i += 1) {
			if (n % i === 0) shouldInclude = isPrime(i + n / i);
			if (!shouldInclude) break;
		}
		if (shouldInclude) sum += n;
	}
	return console.log(`Problem 357 solution is: ${sum}`);
};

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	if (n < 9) return true;
	if (n % 3 === 0) return false;
	let counter = 5;
	while (counter ** 2 <= n) {
		if (n % counter === 0 || n % (counter + 2) === 0) return false;
		counter += 6;
	}
	return true;
}
