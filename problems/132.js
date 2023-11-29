import getFirstNPrimes from "./common/get-first-n-primes.js";

const problem132 = () => {
	let result = 0;
	let count = 0;
	const primeList = getFirstNPrimes(5e4);

	const k = 1e09;
	let i = 0;

	while (count < 40) {
		if (expmod(10, k, 9 * primeList[i]) === 1) {
			count += 1;
			result += primeList[i];
		}

		i += 1;
	}

	return `Problem 132 solution is: ${result}`;
};

function expmod(base, exp, mod) {
	if (exp === 0) {
		return 1;
	}

	if (exp % 2 === 0) {
		return (expmod(base, (exp / 2), mod) ** 2) % mod;
	}

	return (base * expmod(base, (exp - 1), mod)) % mod;
}

export default problem132;
