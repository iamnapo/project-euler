module.exports = () => {
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
	for (let i = 0; i < primeList.length; i += 1) {
		primeSum[i + 1] = primeSum[i] + primeList[i];
	}
	for (let i = numberOfPrimes; i < primeSum.length; i += 1) {
		for (let j = i - (numberOfPrimes + 1); j > -11; j -= 1) {
			if (primeSum[i] - primeSum[j] > 1e06) {
				break;
			}
			if (primeList.indexOf(primeSum[i] - primeSum[j]) > -1) {
				numberOfPrimes = i - j;
				result = primeSum[i] - primeSum[j];
			}
		}
	}
	return console.log(`Problem 50 solution is: ${result}`);
};

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return number > 1;
}
