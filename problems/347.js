import getPrimesLessThan from "./common/get-primes-less-than.js";

const problem347 = () => {
	const primeList = getPrimesLessThan(1e7);

	let total = 0;
	for (let i = 0; i < primeList.length; i += 1) {
		for (let j = i + 1; j < primeList.length; j += 1) {
			if (primeList[i] * primeList[j] > 1e7) break;
			total += best(primeList[i], primeList[j]);
		}
	}

	return `Problem 347 solution is: ${total}`;
};

function best(p, q) {
	let a = 1;
	let maximum = 0;
	while ((p ** a) * q <= 1e7) {
		let b = 1;
		while ((p ** a) * (q ** b) <= 1e7) {
			maximum = Math.max(maximum, (p ** a) * (q ** b));
			b += 1;
		}

		a += 1;
	}

	return maximum;
}

export default problem347;
