export default () => {
	let r = 0;
	const primeList = [];
	for (let i = 0; primeList.length < 5e05; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}

	let n = 7037;

	while (r < 1e10) {
		n += 2;
		const p = primeList[n - 1];
		r = (2 * p) * n;
	}

	return `Problem 123 solution is: ${n}`;
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
