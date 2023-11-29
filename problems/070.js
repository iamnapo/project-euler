import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem070 = () => {
	let result = 1;
	let bestRatio = Number.POSITIVE_INFINITY;
	const limit = 1e07;
	const primeList = getFirstNPrimes(3000, { after: 2000 });

	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = i + 1; j < primeList.length; j += 1) {
			const n = primeList[i] * primeList[j];
			if (n > limit) {
				break;
			}

			const phi = (primeList[i] - 1) * (primeList[j] - 1);
			const ratio = n / phi;

			if (isPerm(n, phi) && bestRatio > ratio) {
				result = n;
				bestRatio = ratio;
			}
		}
	}

	return `Problem 70 solution is: ${result}`;
};

function isPerm(m, n) {
	const arr = Array.from({ length: 10 }, () => 0);

	let temp = n;
	while (temp > 0) {
		arr[temp % 10] += 1;
		temp = Math.trunc(temp / 10);
	}

	temp = m;
	while (temp > 0) {
		arr[temp % 10] -= 1;
		temp = Math.trunc(temp / 10);
	}

	for (let i = 0; i < 10; i += 1) {
		if (arr[i] !== 0) {
			return false;
		}
	}

	return true;
}

export default problem070;
