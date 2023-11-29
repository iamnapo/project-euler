import isPrime from "./common/is-prime.js";

const problem131 = () => {
	let result = 0;
	for (let i = 1; i < 577; i += 1) {
		if (isPrime(((i + 1) ** 3) - (i ** 3))) {
			result += 1;
		}
	}

	return `Problem 131 solution is: ${result}`;
};

export default problem131;
