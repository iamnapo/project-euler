import getPrimesLessThan from "./common/get-primes-less-than.js";

export default () => {
	let result = 10;
	const primeList = getPrimesLessThan(1e5, { after: 6 });

	for (const element of primeList) {
		if (otherFactor(a(element))) {
			result += element;
		}
	}

	return `Problem 133 solution is: ${result}`;
};

function a(n) {
	let x = 1;
	let k = 1;
	while (x !== 0) {
		x = ((x * 10) + 1) % n;
		k += 1;
	}

	return k;
}

function otherFactor(k) {
	const factors = [2, 5];
	let i = 0;
	while (i < factors.length && k > 1) {
		if (k % factors[i] === 0) {
			k = Math.trunc(k / factors[i]);
		} else {
			i += 1;
		}
	}

	return k > 1;
}
