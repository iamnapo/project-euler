import isPrime from "./common/is-prime.js";

let total = 0;
const problem387 = () => {
	for (let i = 1; i < 10; i += 1) Harshad(i, i, 0);
	return `Problem 387 solution is: ${total}`;
};

function Harshad(n, s, strong) {
	for (let i = 0; i < 10; i += 1) {
		const a = n * 10 + i;
		const b = s + i;
		if (a % b === 0) {
			if (a < 1e13) Harshad(a, b, isPrime(a / b));
		} else if (strong && isPrime(a)) {
			total += a;
		}
	}

	return total;
}

export default problem387;
