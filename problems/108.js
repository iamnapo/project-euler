export default () => {
	const primeList = [];
	for (let i = 0; primeList.length < 10; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}

	const limit = 1000;
	for (let n = 1; ;n += 1) {
		if ((noDSquared(n, primeList) + 1) / 2 > limit) {
			return `Problem 108 solution is: ${n}`;
		}
	}
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

function noDSquared(number, primelist) {
	let nod = 1;
	let exponent;
	let remain = number;
	for (const element of primelist) {
		if (element * element > number) {
			return nod * 2;
		}

		exponent = 1;
		while (remain % element === 0) {
			exponent += 2;
			remain /= element;
		}

		nod *= exponent;
		if (remain === 1) {
			return nod;
		}
	}

	return nod;
}
