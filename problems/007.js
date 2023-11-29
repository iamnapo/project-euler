import isPrime from "./common/is-prime.js";

const problem007 = () => {
	let count = 0;
	for (let i = 1; ; i += 1) {
		if (isPrime(i)) {
			count += 1;
		}

		if (count === 10_001) {
			return `Problem 7 solution is: ${i}`;
		}
	}
};

export default problem007;
