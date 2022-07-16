import isPrime from "./common/is-prime.js";

export default () => {
	let prod = 0;
	let maxN = 0;
	for (let a = -999; a < 1000; a += 1) {
		for (let b = -1000; b < 1001; b += 1) {
			if (isPrime(b)) {
				for (let n = 0; n < 100; n += 1) {
					if (!isPrime((n ** 2) + (a * n) + b)) {
						n -= 1;
						if (n > maxN) {
							maxN = n;
							prod = a * b;
						}

						break;
					}
				}
			}
		}
	}

	return `Problem 27 solution is: ${prod}`;
};
