export default () => {
	const primeList = [];
	for (let i = 2; i < 1e7; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	let total = 0;
	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = i + 1; j < primeList.length; j += 1) {
			if (primeList[i] * primeList[j] > 1e7) break;
			total += best(primeList[i], primeList[j]);
		}
	}

	return `Problem 347 solution is: ${total}`;
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

function best(p, q) {
	let a = 1;
	let maximum = 0;
	while ((p ** a) * q <= 1e7) {
		let b = 1;
		while ((p ** a) * (q ** b) <= 1e7) {
			maximum = Math.max(maximum, (p ** a) * (q ** b));
			b += 1;
		}

		a += 1;
	}

	return maximum;
}
