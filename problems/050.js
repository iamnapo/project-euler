export default () => {
	let result = 0;
	let numberOfPrimes = 0;
	const primeList = [];
	for (let i = 1; primeList.length < 1e06; i += 1) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}
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

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return number > 1;
}
