import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem087 = () => {
	const primeList = getFirstNPrimes(5000);

	const powers = Array.from({ length: 3 }, () => []);
	const target = 5e07;
	const tmpList = [...primeList];
	for (let j = 0; j < 3; j += 1) {
		for (const [i, element] of primeList.entries()) {
			tmpList[i] *= element;
		}

		powers[j] = [...tmpList];
	}

	const numbers = new Set();
	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = 0; j < primeList.length; j += 1) {
			for (let k = 0; k < primeList.length; k += 1) {
				if (powers[0][i] > target) {
					break;
				}

				if (powers[1][j] > target) {
					break;
				}

				if (powers[2][k] > target) {
					break;
				}

				const number = powers[0][i] + powers[1][j] + powers[2][k];
				if (number > target) {
					break;
				}

				numbers.add(number);
			}
		}
	}

	return `Problem 87 solution is: ${numbers.size}`;
};

export default problem087;
