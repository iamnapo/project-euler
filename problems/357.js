import isPrime from "./common/is-prime.js";

export default () => {
	let sum = 1;
	for (let n = 2; n < 1e8; n += 4) {
		if (isPrime(n / 2 + 2)) {
			let shouldInclude = true;
			const sqrt = n ** 0.5;
			for (let i = 1; i <= sqrt; i += 1) {
				if (n % i === 0) shouldInclude = isPrime(i + n / i);
				if (!shouldInclude) break;
			}

			if (shouldInclude) sum += n;
		}
	}

	return `Problem 357 solution is: ${sum}`;
};
