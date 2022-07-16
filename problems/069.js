import getFirstNPrimes from "./common/get-first-n-primes.js";

export default () => {
	const primeList = getFirstNPrimes(200);

	let result = 1;
	let i = 0;
	while (result * primeList[i] < 1e06) {
		result *= primeList[i];
		i += 1;
	}

	return `Problem 69 solution is: ${result}`;
};
