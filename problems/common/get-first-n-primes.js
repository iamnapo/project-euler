import isPrime from "./is-prime.js";

const getFirstNPrimes = (n, { after = 1 } = {}) => {
	const primeList = [];
	for (let i = after; primeList.length < n; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	return primeList;
};

export default getFirstNPrimes;
