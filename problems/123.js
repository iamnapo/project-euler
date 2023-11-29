import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem123 = () => {
	let r = 0;
	const primeList = getFirstNPrimes(5e5);

	let n = 7037;

	while (r < 1e10) {
		n += 2;
		const p = primeList[n - 1];
		r = (2 * p) * n;
	}

	return `Problem 123 solution is: ${n}`;
};

export default problem123;
