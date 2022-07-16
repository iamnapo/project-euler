import getFirstNPrimes from "./common/get-first-n-primes.js";

export default () => {
	const primeList = getFirstNPrimes(1000); // 1000 LGTM

	let consec = 1;
	let result = 2 * 3 * 5 * 7;
	while (consec < 4) {
		result += 1;
		if (numberOfPrimeFacors(result, primeList) === 4) {
			consec += 1;
		} else {
			consec = 0;
		}
	}

	return `Problem 47 solution is: ${result - 3}`;
};

function numberOfPrimeFacors(number, primeList) {
	let nod = 0;
	let pf;
	let remain = number;
	for (const element of primeList) {
		if (element ** 2 > number) {
			return nod + 1;
		}

		pf = false;
		while (remain % element === 0) {
			pf = true;
			remain = Math.trunc(remain / element);
		}

		if (pf) {
			nod += 1;
		}

		if (remain === 1) {
			return nod;
		}
	}

	return nod;
}
