import isPrime from "./common/is-prime.js";

const problem010 = () => {
	let sum = 0;
	for (let i = 1; i < 2_000_000; i += 1) {
		if (isPrime(i)) {
			sum += i;
		}
	}

	return `Problem 10 solution is: ${sum}`;
};

export default problem010;
