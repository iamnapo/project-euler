import getFirstNPrimes from "./common/get-first-n-primes.js";

export default () => {
	const limit = 1e06;
	let result = 0;
	let chainLength = 0;
	const primeList = getFirstNPrimes(1e5);

	const numbers = Array.from({ length: limit + 1 }, () => false);
	for (let i = 2; i < limit + 1; i += 1) {
		if (!(numbers[i])) {
			const chain = [];
			let newNumber = i;
			let broken = false;

			while (!chain.includes(newNumber)) {
				chain.push(newNumber);
				newNumber = sumOfFactors(newNumber, primeList);
				if (newNumber > limit || numbers[newNumber]) {
					broken = true;
					break;
				}
			}

			if (!broken) {
				let smallest = Number.MAX_SAFE_INTEGER;
				const first = chain.indexOf(newNumber);
				if (chain.length - first > chainLength) {
					for (let j = first; j < chain.length; j += 1) {
						if (chain[j] < smallest) {
							smallest = chain[j];
						}
					}

					chainLength = chain.length - first;
					result = smallest;
				}
			}

			for (const element of chain) {
				numbers[element] = true;
			}
		}
	}

	return `Problem 95 solution is: ${result}`;
};

function sumOfFactors(number, primeList) {
	let n = number;
	let sum = 1;
	let [p] = primeList;
	let j;
	let i = 0;
	while (p * p <= n && n > 1) {
		p = primeList[i];
		i += 1;
		if (n % p === 0) {
			j = p * p;
			n = Math.trunc(n / p);
			while (n % p === 0) {
				j *= p;
				n = Math.trunc(n / p);
			}

			sum = (sum * (j - 1)) / (p - 1);
		}
	}

	if (n > 1) {
		sum *= n + 1;
	}

	return sum - number;
}
