import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem050 = () => {
	let result = 0;
	let numberOfPrimes = 0;
	const primeList = getFirstNPrimes(1e6);

	const primeSum = [];
	primeSum[0] = 0;
	for (const [i, element] of primeList.entries()) {
		primeSum[i + 1] = primeSum[i] + element;
	}

	for (let i = numberOfPrimes; i < primeSum.length; i += 1) {
		for (let j = i - (numberOfPrimes + 1); j > -11; j -= 1) {
			if (primeSum[i] - primeSum[j] > 1e06) {
				break;
			}

			if (primeList.includes(primeSum[i] - primeSum[j])) {
				numberOfPrimes = i - j;
				result = primeSum[i] - primeSum[j];
			}
		}
	}

	return `Problem 50 solution is: ${result}`;
};

export default problem050;
