import isPrime from "./common/is-prime.js";

export default () => {
	let noOfPrimes = 3;
	let sl = 2;
	let c = 9;

	while (noOfPrimes / ((2 * sl) + 1) > 0.1) {
		sl += 2;
		for (let i = 0; i < 3; i += 1) {
			c += sl;
			if (isPrime(c)) {
				noOfPrimes += 1;
			}
		}

		c += sl;
	}

	return `Problem 58 solution is: ${sl + 1}`;
};
