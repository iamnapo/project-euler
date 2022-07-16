import getFirstNPrimes from "./common/get-first-n-primes.js";
import isPrime from "./common/is-prime.js";

export default () => {
	const primeList = getFirstNPrimes(1e4);

	const queue = [[]];
	let ind = 0;
	for (;;) {
		const y = primeList[ind];
		ind += 1;
		for (let i = 0; i < queue.length; i++) {
			if (queue[i].every((x) => isPrime(`${x}${y}`) && isPrime(`${y}${x}`))) {
				const tmp = [...queue[i], y];
				if (tmp.length > 4/* sure, why not? */) return `Problem 60 solution is: ${tmp.reduce((a, b) => a + b, 0)}`;
				queue.push(tmp);
			}
		}
	}
};
