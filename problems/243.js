import getPrimesLessThan from "./common/get-primes-less-than.js";

export default () => `Problem 243 solution is: ${R(15_499 / 94_744)}`;

function R(goal) {
	let [r, d] = [1, 1];
	const primeList = getPrimesLessThan(1e2);

	for (const p of primeList) {
		for (let i = 2; i < p; i += 1) {
			if (((r * i) / (d * i - 1)) < goal) return d * i;
		}

		r *= p - 1;
		d *= p;
		if ((r / (d - 1)) < goal) return d;
	}
}
