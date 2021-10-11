export default () => {
	const primeList = [];
	for (let i = 1490; primeList.length < 10_000; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = i + 1; j < primeList.length; j += 1) {
			const k = (2 * primeList[j]) - primeList[i];
			if (k < 10_000 && isPrime(k) && isPermutation(primeList[i], primeList[j]) && isPermutation(primeList[i], k)) {
				return `Problem 49 solution is: ${primeList[i].toString() + primeList[j].toString() + k.toString()}`;
			}
		}
	}

	return null;
};

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}

	return number > 1;
}

function isPermutation(numA, numB) {
	const tmpA = numA.toString().length === 4 ? numA.toString() : numA.toString().padStart(4, 0);
	const tmpB = numB.toString().length === 4 ? numB.toString() : numB.toString().padStart(4, 0);
	for (const c of tmpA) {
		if (!tmpB.includes(c)) {
			return false;
		}
	}

	for (const c of tmpB) {
		if (!tmpA.includes(c)) {
			return false;
		}
	}

	return true;
}
