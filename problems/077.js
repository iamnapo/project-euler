import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem077 = () => {
	let target = 2;
	const primeList = getFirstNPrimes(2000);

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

export default problem077;
