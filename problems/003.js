import isPrime from "./common/is-prime.js";

const problem003 = () => {
	let factor;
	let start = 600_851_475_143;
	for (let i = 3; i < start + 1; i += 1) {
		if (start % i === 0 && isPrime(i)) {
			start /= i;
			factor = i;
		}
	}

	return `Problem 3 solution is: ${factor}`;
};

export default problem003;
