import getFirstNPrimes from "./common/get-first-n-primes.js";

let exponents;

export default () => {
	const primeList = getFirstNPrimes(15);

	exponents = Array.from({ length: primeList.length }, () => 0);
	let result = 1;
	for (const element of primeList) {
		result *= element;
	}

	const limit = (2 * 4_000_000) - 1;
	let counter = 1;

	for (;;) {
		twos(limit);
		if (exponents[0] < exponents[1]) {
			counter += 1;
		} else {
			const number = getNum(primeList, result);
			if (number < result) {
				result = number;
			}

			counter = 1;
		}

		if (counter >= exponents.length) {
			break;
		}

		exponents[counter] += 1;
		for (let i = 0; i < counter; i += 1) {
			exponents[i] = exponents[counter];
		}
	}

	return `Problem 110 solution is: ${result}`;
};

function twos(limit) {
	exponents[0] = 0;
	let divisors = 1;
	for (const element of exponents) {
		divisors *= (2 * element) + 1;
	}

	exponents[0] = Math.trunc(((limit / divisors) - 1) / 2);
	while (divisors * ((2 * exponents[0]) + 1) < limit) {
		exponents[0] += 1;
	}
}

function getNum(primeList, result) {
	let number = 1;
	for (const [i, element] of exponents.entries()) {
		if (element === 0) {
			break;
		}

		number *= primeList[i] ** element;
		if (result < number) {
			return result + 1;
		}
	}

	return number;
}
