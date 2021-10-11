export default () => {
	let target = 2;
	const primeList = [];
	for (let i = 0; primeList.length < 2000; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}

	for (;;) {
		const ways = Array.from({ length: target + 1 }, () => 0);
		ways[0] = 1;

		for (const prime of primeList) {
			for (let j = prime; j <= target; j += 1) {
				ways[j] += ways[j - prime];
			}
		}

		if (ways[target] > 5000) {
			break;
		}

		target += 1;
	}

	return `Problem 77 solution is: ${target}`;
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
