import isPrime from "./common/is-prime.js";

const problem128 = () => {
	let count = 1;
	const limit = 2000;
	let n = 0;
	let number = 0;

	while (count < limit) {
		n += 1;
		if (isPrime((6 * n) - 1) && isPrime((6 * n) + 1) && isPrime((12 * n) + 5)) {
			count += 1;
			number = (((3 * n) * n) - (3 * n) + 2);
			if (count >= limit) {
				break;
			}
		}

		if (isPrime((6 * n) + 5) && isPrime((6 * n) - 1) && isPrime((12 * n) - 7) && n !== 1) {
			count += 1;
			number = (((3 * n) * n) + (3 * n) + 1);
		}
	}

	return `Problem 128 solution is: ${number}`;
};

export default problem128;
