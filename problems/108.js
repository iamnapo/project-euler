import getFirstNPrimes from "./common/get-first-n-primes.js";

export default () => {
	const primeList = getFirstNPrimes(10);

	const limit = 1000;
	for (let n = 1; ;n += 1) {
		if ((noDSquared(n, primeList) + 1) / 2 > limit) {
			return `Problem 108 solution is: ${n}`;
		}
	}
};

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
