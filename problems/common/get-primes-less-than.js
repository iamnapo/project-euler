import isPrime from "./is-prime.js";

const getPrimesLessThan = (lim, { after = 1 } = {}) => {
	const primeList = [];
	for (let i = after; i < lim; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	return primeList;
};

export default getPrimesLessThan;
