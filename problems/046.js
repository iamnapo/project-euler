import getFirstNPrimes from "./common/get-first-n-primes.js";

export default () => {
	const primeList = getFirstNPrimes(1000);

	let result = 1;
	let notFound = true;
	while (notFound) {
		result += 2;
		let j = 0;
		notFound = false;
		while (result >= primeList[j]) {
			if (isTwiceSquare(result - primeList[j])) {
				notFound = true;
				break;
			}

			j += 1;
		}
	}

	return `Problem 46 solution is: ${result}`;
};

function isTwiceSquare(number) {
	return Math.sqrt(number / 2) % 1 === 0;
}
